import React, { useState, useEffect } from 'react';
import { View, Text, Image, ScrollView, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { getMealDetails } from '../api/themealdb';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/Favorites';
import { styles } from '../utils/Styles';

export default function RecipeDetails({ route, navigation }) {
  
  const { mealId } = route.params; 
  
  const [meal, setMeal] = useState(null);
  const [loading, setLoading] = useState(true);

  const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.favorites.meals);
  const isFavorite = favoriteMeals.some(m => m.idMeal === mealId);

  useEffect(() => {
    const fetchDetails = async () => {
      const data = await getMealDetails(mealId);
      setMeal(data);
      setLoading(false);
    };
    fetchDetails();
  }, [mealId]);

  // Helper function to extract the 20 possible ingredients/measures from the API
  const getIngredients = (mealData) => {
    let ingredients = [];
    for (let i = 1; i <= 20; i++) {
      if (mealData[`strIngredient${i}`]) {
        ingredients.push(
          `${mealData[`strMeasure${i}`]} ${mealData[`strIngredient${i}`]}`
        );
      }
    }
    return ingredients;
  };

  if (loading) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#1E7B9D" />
      </View>
    );
  }

  if (!meal) {
    return (
      <View style={styles.center}>
        <Text>Could not load recipe details.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.detail_container} showsVerticalScrollIndicator={false}>
      <Image source={{ uri: meal.strMealThumb }} style={styles.image} />
      
      <View style={styles.content}>
        <View style={styles.headerRow}>
          <Text style={styles.detail_title}>{meal.strMeal}</Text>
          <TouchableOpacity onPress={() => dispatch(toggleFavorite(meal))}>
            <Icon 
              name={isFavorite ? "heart" : "heart-outline"} 
              size={30} 
              color="tomato" 
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.detail_subtitle}>{meal.strCategory} • {meal.strArea}</Text>

        <Text style={styles.sectionTitle}>Ingredients</Text>
        {getIngredients(meal).map((ingredient, index) => (
          <Text key={index} style={styles.ingredientText}>
            • {ingredient}
          </Text>
        ))}

        <Text style={styles.sectionTitle}>Instructions</Text>
        <Text style={styles.instructionsText}>{meal.strInstructions}</Text>
      </View>
    </ScrollView>
  );
}

