import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'
export const fetchPosts = createAsyncThunk(
  'posts',
  async (thunkAPI) => {
    const {data} = await  axios.get('/posts');
    return data
  }
)

const postSlice = createSlice({
  name: 'posts',
  initialState: {
    post: { data: [], status: 'idle', error: null },
  },
  reducers: {
  },
  extraReducers: (builder) => {
    builder
      // Handle pending state
      .addCase(fetchPosts.pending, (state) => {
        state.status = 'loading';
      })
      // Handle fulfilled state
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      // Handle rejected state
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});



export default postSlice.reducer;
