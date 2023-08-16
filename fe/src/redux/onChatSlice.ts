import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

export const onChatSlice = createSlice({
  name: 'onChat',
  initialState: {
    chatList: [],
  },
  reducers: {
    setOnChatList: (state, action) => {
      state.chatList = action.payload;
    },
  },
});

export const { setOnChatList } = onChatSlice.actions;
export const selectOnChatList = (state: RootState) => state.onChat.chatList;

export default onChatSlice.reducer;
