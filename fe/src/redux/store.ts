import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { persistReducer, persistStore } from 'redux-persist';
import sessionStorage from 'redux-persist/lib/storage/session';
import userReducer from './userSlice';
import mbtiReducer from './mbtiSlice';
import selectedPageReducer from './selectedPageSlice';
import boardMenuReducer from './boardMenuSlice';
import searchReducer from './searchSlice';
import paginationReducer from './paginationSlice';
import postReducer from './postSlice';
import onChatReducer from './onChatSlice';
import chatCreateReducer from './chatCreateSlice';
import chatReducer from './chatSlice';
import voiceroomReducer from './voiceroomSlice';
import authReducer from './authSlice';

const reducers = combineReducers({
  auth: authReducer,
  user: userReducer,
  mbti: mbtiReducer,
  selectedPage: selectedPageReducer,
  boardMenu: boardMenuReducer,
  search: searchReducer,
  pagination: paginationReducer,
  post: postReducer,
  onChat: onChatReducer,
  chatCreate: chatCreateReducer,
  chat: chatReducer,
  voiceroom: voiceroomReducer,
});

const persistConfig = {
  key: "wehee", // key for the localStorage
  storage: sessionStorage,
  whitelist: ["user"], // persist할 reducer 이름
  blacklist: ["user.providerId"], 
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
});


export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export default store;