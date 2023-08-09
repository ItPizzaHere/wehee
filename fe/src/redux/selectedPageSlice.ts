import { createSlice } from '@reduxjs/toolkit';

const selectedPageSlice = createSlice({
  name: 'selectedPage',
  initialState: 'main',
  reducers: {
    setPage: (state, action) => {
      return action.payload;
    },
  },
});

export const { setPage } = selectedPageSlice.actions;
export default selectedPageSlice.reducer;