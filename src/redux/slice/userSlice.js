import { createSlice } from '@reduxjs/toolkit';
const localStorageUser = JSON.parse(localStorage.getItem('data'))
const userSlice = createSlice({
  name: 'user',
  initialState: {
    currentUser: localStorageUser,
  },
  reducers: {
    setUser(state, action) {
      state.currentUser = action.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export default userSlice.reducer;