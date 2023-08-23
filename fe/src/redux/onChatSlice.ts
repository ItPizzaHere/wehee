import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const onChatSlice = createSlice({
  name: 'onChat',
  initialState: {
    chatList: [],
    myChatList: [],
  },
  reducers: {
    setOnChatList: (state, action) => {
      state.chatList = action.payload;
    },
    setMyChatList: (state, action) => {
      state.myChatList = action.payload;
    }
  },
});

export const { setOnChatList } = onChatSlice.actions;
export const { setMyChatList } = onChatSlice.actions;
export const selectOnChatList = (state: RootState) => state.onChat.chatList;

export default onChatSlice.reducer;
