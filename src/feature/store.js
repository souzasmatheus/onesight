import { configureStore } from '@reduxjs/toolkit';
import recipesReducer from './recipes/RecipesSlice';
import userReducer from './user/UserSlice';

export default configureStore({
  reducer: {
    recipes: recipesReducer,
    user: userReducer,
  },
});
