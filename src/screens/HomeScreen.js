import React,{useState,useEffect,useRef} from "react";
import { View, Text, FlatList,ActivityIndicator,TouchableOpacity,Image,Dimensions } from "react-native";
import { styles } from "../utils/Styles";
import { SafeAreaView } from "react-native-safe-area-context";
import Icon from 'react-native-vector-icons/Ionicons';
import {getFilteredIndianMeals,searchMeals} from '../api/themealdb';
import { useSelector, useDispatch } from 'react-redux';
import { toggleFavorite } from '../store/Favorites';
import TopHeader from "../components/TopHeader";
const screenWidth = Dimensions.get('window').width;
import photos from "../assets/photos";

const carouselImages = [
  { id: '1', source: photos.image_one }, 
  { id: '2', source: photos.image_two },
  { id: '3', source: photos.image_three },
  {id:'4',source:photos.image_four},
];

export default function HomeScreen({navigation}) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const [error, setError] = useState(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [activeIndex, setActiveIndex] = useState(0);

  const flatListRef = useRef(null);

 const onViewRef = useRef(({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setActiveIndex(viewableItems[0].index || 0);
    }
  });
  const viewConfigRef = useRef({ viewAreaCoveragePercentThreshold: 50 });

  
  useEffect(() => {
   
    const slideTimer = setInterval(() => {
      let nextIndex = activeIndex + 1;
      
      
      if (nextIndex >= carouselImages.length) {
        nextIndex = 0;
      }

      
      if (flatListRef.current) {
        flatListRef.current.scrollToIndex({
          index: nextIndex,
          animated: true,
        });
      }
    }, 5000);

    
    return () => clearInterval(slideTimer);
  }, [activeIndex]); 

  
  const getItemLayout = (data, index) => ({
    length: screenWidth,
    offset: screenWidth * index,
    index,
  });

    const dispatch = useDispatch();
  const favoriteMeals = useSelector((state) => state.favorites.meals);

  // Fetch meals whenever the activeFilter changes
  useEffect(() => {
    const loadMeals = async () => {
      const data = await getFilteredIndianMeals(activeFilter);
      setMeals(data);
    };
    
    loadMeals();
  }, [activeFilter]);

 

  const fetchMeals = async (searchTerm) => {
    setLoading(true);
    setError(null);
    try {
      const results = await searchMeals(searchTerm);
      setMeals(results);
    } catch (err) {
      setError('Failed to fetch recipes. Check your connection.');
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchMeals(searchQuery);
  };

  const renderRecipeCard = ({ item }) => {
    
   const isFavorite = favoriteMeals.some(m => m.idMeal === item.idMeal); 

    return (
      <TouchableOpacity 
        style={styles.card}
        onPress={() => navigation.navigate('RecipeDetails', { mealId: item.idMeal })}
      >
        <View style={styles.imageContainer}>
          <Image 
            source={{ uri: item.strMealThumb }} 
            style={styles.cardImage} 
          />
          <TouchableOpacity 
            style={styles.favoriteButton}
            onPress={() => dispatch(toggleFavorite(item))}
          >
            <Icon 
              name={isFavorite ? "heart" : "heart-outline"} 
              size={20} 
              color="tomato" 
            />
          </TouchableOpacity>
        </View>
        
        <View style={styles.cardInfo}>
          <Text style={styles.mealName} numberOfLines={1}>{item.strMeal}</Text>
          
        </View>
      </TouchableOpacity>
    );
  };


    return (
      <SafeAreaView style={styles.container}>
          
     
    <TopHeader 
        searchQuery={searchQuery} 
        setSearchQuery={setSearchQuery} 
        onSearch={handleSearch} 
      />
      
      <View style={styles.carouselWrapper}>
        <FlatList
          ref={flatListRef} 
          data={carouselImages}
          keyExtractor={(item) => item.id}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          
          getItemLayout={getItemLayout} 
          
          onViewableItemsChanged={onViewRef.current}
          viewabilityConfig={viewConfigRef.current}
          
          renderItem={({ item }) => (
            <View style={styles.carouselItemContainer}>
              <Image source={item.source} style={styles.carouselImage} />
            </View>
          )}
        />
        
        {/* Pagination Dots */}
        <View style={styles.paginationContainer}>
          {carouselImages.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                activeIndex === index ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      </View>
      {/* Sleek Custom Tab Bar */}
      <View style={styles.tabContainer}>
        {['all', 'veg', 'non-veg'].map((filter) => (
          <TouchableOpacity 
            key={filter}
            style={[styles.tabButton, activeFilter === filter && styles.activeTabButton]} 
            onPress={() => setActiveFilter(filter)}
            activeOpacity={0.8}
          >
            <Text style={[styles.tabText, activeFilter === filter && styles.activeTabText]}>
              {filter === 'all' ? 'All Indian' : filter === 'veg' ? 'Veg' : 'Non-Veg'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="tomato" style={styles.loader} />
      ) : error ? (
        <Text style={styles.errorText}>{error}</Text>
      ) : (
        <FlatList
          data={meals}
          keyExtractor={(item) => item.idMeal}
          renderItem={renderRecipeCard}
           numColumns={2} 
          columnWrapperStyle={styles.row} 
          contentContainerStyle={styles.listContainer}
          ListEmptyComponent={
            <Text style={styles.emptyText}>No recipes found. Try another search!</Text>
          }
        />
      )}
        </SafeAreaView>
    );
}
