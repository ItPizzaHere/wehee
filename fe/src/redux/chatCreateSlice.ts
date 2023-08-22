import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  profile: string;
  nickname: string;
}

export interface ChatCreateState {
  owner: Person;
  title: string;
  category: string;
  limit: number;
  selectedMBTI: string[];
  gender: string;
  ageRange: number[];
  isCreateButtonEnabled: boolean;
}

const initialState: ChatCreateState = {
  owner: { profile: "", nickname: "닉네임" },
  title: '',
  category: '',
  limit: 10,
  selectedMBTI: [],
  gender: '모두',
  ageRange: [0, 100],
  isCreateButtonEnabled: false,
};

const chatCreateSlice = createSlice({
  name: 'chatCreate',
  initialState,
  reducers: {
    setChatCreate: (state, action: PayloadAction<ChatCreateState>) => {
      return { ...state, ...action.payload };
    },
    setOwner: (state, action: PayloadAction<Person>) => {
      state.owner = action.payload;
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setCategory: (state, action: PayloadAction<string>) => {
      state.category = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setSelectedMBTI: (state, action: PayloadAction<string[]>) => {
      state.selectedMBTI = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setAgeRange: (state, action: PayloadAction<number[]>) => {
      state.ageRange = action.payload;
    },
    setIsCreateButtonEnabled: (state, action: PayloadAction<boolean>) => {
      state.isCreateButtonEnabled = action.payload;
    },
    resetChatCreate: () => initialState,
  },
});

export const {
  setChatCreate,
  setOwner, setTitle, setCategory, setLimit, setSelectedMBTI, setGender, setAgeRange, setIsCreateButtonEnabled,
  resetChatCreate
} = chatCreateSlice.actions;

export default chatCreateSlice.reducer;