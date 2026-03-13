import React, { useState } from 'react';
import { View, Text, FlatList, TouchableOpacity, Image, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/Ionicons';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/Favorites';
import { styles } from '../utils/Styles';
import TopHeader from '../components/TopHeader';

export default function FavoritesScreen({ navigation }) {
  const [searchQuery, setSearchQuery] = useState('');
  const favoriteMeals = useSelector((state) => state.favorites.meals);
  const dispatch = useDispatch();

 
  const filteredFavorites = favoriteMeals.filter((meal) =>
    meal.strMeal.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleSearch = () => {
    Keyboard.dismiss(); 
  };

  const renderFavoriteCard = ({ item }) => (
    <TouchableOpacity 
      style={styles.card}
      onPress={() => navigation.navigate('RecipeDetails', { mealId: item.idMeal })}
    >
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.strMealThumb }} style={styles.cardImage} />
        <TouchableOpacity 
          style={styles.favoriteButton}
          onPress={() => dispatch(toggleFavorite(item))}
        >
          <Icon name="heart" size={20} color="tomato" />
        </TouchableOpacity>
      </View>
      <View style={styles.cardInfo}>
        <Text style={styles.mealName} numberOfLines={1}>{item.strMeal}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.favourite_container}>
      <TopHeader 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSearch={handleSearch} 
      />
      
     
      {favoriteMeals.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Icon name="restaurant-outline" size={60} color="#ccc" style={{textAlign:'center',marginTop:20}} />
          <Text style={styles.emptyText}>No favorite meals yet!</Text>
          <Text style={styles.emptySubText}>Tap the heart icon on a recipe to save it here.</Text>
        </View>
      ) : filteredFavorites.length === 0 ? (
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No matches found</Text>
          <Text style={styles.emptySubText}>You haven't favorited a recipe with that name.</Text>
        </View>
      ) : (
        <FlatList
          data={filteredFavorites} 
          keyExtractor={(item) => item.idMeal}
          renderItem={renderFavoriteCard}
          numColumns={2}
          contentContainerStyle={{ paddingHorizontal: 10, paddingBottom: 20 }}
          columnWrapperStyle={{ justifyContent: 'space-between' }}
        />
      )}
    </SafeAreaView>
  );
}