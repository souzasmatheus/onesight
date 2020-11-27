import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  recipes: [],
  loading: false,
  errors: false,
};

const recipesSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setLoading: (state, { payload }) => {
      state.loading = payload;
    },
    setErrors: (state, { payload }) => {
      state.errors = payload;
    },
    setRecipes: (state, { payload }) => {
      state.recipes = payload;
    },
  },
});

export const { setLoading, setErrors, setRecipes } = recipesSlice.actions;
export const recipesSelector = (state) => state.recipes;
export const getRecipes = (query) => async (dispatch) => {
  dispatch(setErrors(false));
  dispatch(setLoading(true));
  try {
    const response = await axios.get(`${process.env.REACT_APP_BASE_URL}`, {
      params: { s: query },
    });
    dispatch(setLoading(false));
    dispatch(setRecipes(response.data.meals));
  } catch (error) {
    dispatch(setLoading(false));
    dispatch(setErrors(true));
  }
};

export default recipesSlice.reducer;
