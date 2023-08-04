import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './slice/loginSlice';
import authRedcer from './slice/authSlice';

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authRedcer, 
  },
});

export default store;