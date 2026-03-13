import axios from "axios";

const apiClient = axios.create({
  baseURL: 'https://www.themealdb.com/api/json/v1/1',
  // timeout: 5000,
});

// 1. Fetch ALL Indian Meals
export const getIndianMeals = async () => {
  try {
    const response = await apiClient.get('/filter.php?a=Indian');
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching Indian meals:", error);
    return [];
  }
};

// 2. Fetch ALL Vegetarian Meals (Globally)
export const getVegetarianMeals = async () => {
  try {
    const response = await apiClient.get('/filter.php?c=Vegetarian');
    return response.data.meals || [];
  } catch (error) {
    console.error("Error fetching Vegetarian meals:", error);
    return [];
  }
};

// 3. Combined Function to get Filtered Indian Meals
export const getFilteredIndianMeals = async (filterType = 'all') => {
  try {
    // Fetch both lists at the same time for better performance
    const [indianMeals, vegMeals] = await Promise.all([
      getIndianMeals(),
      getVegetarianMeals()
    ]);

    // If no filter is applied, return all Indian foods
    if (filterType === 'all') {
      return indianMeals;
    }

    // Create a fast lookup Set of Vegetarian Meal IDs
    const vegMealIds = new Set(vegMeals.map(meal => meal.idMeal));

    if (filterType === 'veg') {
      // Return Indian meals that ARE in the Vegetarian list
      return indianMeals.filter(meal => vegMealIds.has(meal.idMeal));
    } 
    
    if (filterType === 'non-veg') {
      // Return Indian meals that are NOT in the Vegetarian list
      return indianMeals.filter(meal => !vegMealIds.has(meal.idMeal));
    }

  } catch (error) {
    console.error("Error filtering meals:", error);
    return [];
  }
};

// Keep your existing search function for the text input!
export const searchMeals = async (query) => {
  try {
    const response = await apiClient.get(`/search.php?s=${query}`); 
    return response.data.meals || [];
  } catch (error) {
    console.error("Error searching meals:", error);
    return [];
  }
};

export const getMealDetails = async (id) => {
  try {
    const response = await apiClient.get(`/lookup.php?i=${id}`);
    // The API returns an array, but we only want the single meal object
    return response.data.meals ? response.data.meals[0] : null;
  } catch (error) {
    console.error("Error fetching meal details:", error);
    return null;
  }
};