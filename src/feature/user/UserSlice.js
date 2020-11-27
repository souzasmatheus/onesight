import { createSlice } from '@reduxjs/toolkit';

const initialState = null;

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, { payload }) => payload,
  },
});

export const { setUser } = userSlice.actions;
export const userSelector = (state) => state.user;

export default userSlice.reducer;
