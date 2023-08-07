import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import authRedcer from './authSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authRedcer, 
  },
});

export default store;