import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import mbtiReducer from './mbtiSlice';
import selectedPageReducer from './selectedPageSlice';


const store = configureStore({
  reducer: {
    user: userReducer,
    mbti: mbtiReducer,
    selectedPage: selectedPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;