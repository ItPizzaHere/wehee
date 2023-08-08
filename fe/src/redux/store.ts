import { configureStore } from '@reduxjs/toolkit';
import authRedcer from './authSlice';
import userReducer from './userSlice'
import mbtiReducer from './mbtiSlice'


const store = configureStore({
  reducer: {
    auth: authRedcer,
    user: userReducer,
    mbti: mbtiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;