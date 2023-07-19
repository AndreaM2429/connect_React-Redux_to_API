import { configureStore } from '@reduxjs/toolkit';
import usersReducer from './users/usersSlice';

const store = configureStore({
  reducer: {
    userList: usersReducer,
  },
});

export default store;
