import { createSlice } from '@reduxjs/toolkit';

interface AuthState {
  providerId: string;
}

const initialState: AuthState = {
  providerId: "",
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setProviderId: (state, action) => {
      state.providerId = action.payload;
    },
    clearProviderId: (state) => {
      state.providerId = "";
    },
  },
});

export const { setProviderId, clearProviderId } = authSlice.actions;

export default authSlice.reducer;
