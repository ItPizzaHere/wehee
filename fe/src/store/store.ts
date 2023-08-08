import { configureStore } from '@reduxjs/toolkit';
import loginReducer from './loginSlice';
import authRedcer from './authSlice';
import mbtiReducer from './mbtiSlice'

export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    login: loginReducer,
    auth: authRedcer,
    mbti: mbtiReducer,
  },
});

export default store;