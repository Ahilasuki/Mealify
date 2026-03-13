import { configureStore } from '@reduxjs/toolkit';
import favoritesReducer from './Favorites';

export const store = configureStore({
  reducer: {
    favorites: favoritesReducer,
  },
});