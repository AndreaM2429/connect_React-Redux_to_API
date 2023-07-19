import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  Arrusers: [],
  isLoading: true,
  error: undefined,
};

export const fetchUser = createAsyncThunk('get/users', async (thunkAPI) => {
  try {
    const resp = await axios.get('https://randomuser.me/api/?results=5');
    return resp.data;
  } catch (error) {
    return thunkAPI.rejectWithValue('something wrong');
  }
});

const usersSlice = createSlice({
  name: 'userList',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.Arrusers = action.payload.results;
      })
      .addCase(fetchUser.rejected, (status) => {
        status.isLoading = false;
        status.error = 'Error';
      });
  },
});

export default usersSlice.reducer;
