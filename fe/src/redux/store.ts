import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice'
import mbtiReducer from './mbtiSlice'


const store = configureStore({
  reducer: {
    user: userReducer,
    mbti: mbtiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;