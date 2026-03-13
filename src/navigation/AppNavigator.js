import React from 'react';
import { NavigationContainer,DefaultTheme } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
// Import Screens
import HomeScreen from '../screens/HomeScreen';
import FavoritesScreen from '../screens/FavoriteScreen';
import RecipeDetailsScreen from '../screens/RecipeDetailScreen';
import Colors from '../utils/Colors';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MealifyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: Colors.primary_color, 
    primary: Colors.secondary_color,    
  },
};


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'Favorites') {
            iconName = focused ? 'heart' : 'heart-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.secondary_color,
        tabBarInactiveTintColor: 'gray',
        headerShown: false, 
      })}
    >
      
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
    </Tab.Navigator>
  );
}


export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name="MainTabs" 
          component={TabNavigator} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="RecipeDetails" 
          component={RecipeDetailsScreen} 
          //  options={{ headerShown: false }} 
        options={{
      title: 'Recipe Details',
      headerStyle: {
        backgroundColor: Colors.primary_color, 
      },
      headerTintColor: Colors.black_color, 
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}