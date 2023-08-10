import { createSlice } from '@reduxjs/toolkit';

export interface BoardMenuState {
  selectedMenu: string;
}

const initialState: BoardMenuState = {
  selectedMenu: 'home', // 초기 선택 메뉴 값을 지정
};

const boardMenuSlice = createSlice({
  name: 'boardMenu',
  initialState,
  reducers: {
    setSelectedMenu: (state, action) => {
      state.selectedMenu = action.payload;
    },
  },
});

export const { setSelectedMenu } = boardMenuSlice.actions;

export default boardMenuSlice.reducer;