import { createSlice } from '@reduxjs/toolkit';

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState: {
    meals: [], 
  },
  reducers: {
    toggleFavorite: (state, action) => {
      const meal = action.payload;
      // Check if the meal is already in our favorites array
      const existingIndex = state.meals.findIndex(m => m.idMeal === meal.idMeal);
      
      if (existingIndex >= 0) {
        // If it exists, remove it
        state.meals.splice(existingIndex, 1);
      } else {
        // If it doesn't exist, add it to the array
        state.meals.push(meal);
      }
    }
  }
});

export const { toggleFavorite } = favoritesSlice.actions;
export default favoritesSlice.reducer;