import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/RecipesSlice';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
  },
});
