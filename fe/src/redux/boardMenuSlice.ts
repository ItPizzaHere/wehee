import { createSlice } from '@reduxjs/toolkit';

const boardMenuSlice = createSlice({
  name: 'boardMenu',
  initialState: { selectedMenu: '우리집' },
  reducers: {
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const { setSelectedMenu } = boardMenuSlice.actions;

export default boardMenuSlice.reducer;