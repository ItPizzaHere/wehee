import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  profile: string;
  nickname: string;
  status: string;
  // role 추가 : owner, speaker, listener
}

export interface voiceroomState {
  title: string;
  note: string;
  personnel: number;
  limit: number;
  startTime: string;
  owner: Person;
  people: Person[];
}

const initialState: voiceroomState = {
  title: "",
  note: "",
  personnel: 0,
  limit: 100,
  startTime: "00:00",
  owner: { profile: "", nickname: "", status: "" },
  people: [],
};

const voiceroomSlice = createSlice({
  name: 'voiceroom',
  initialState,
  reducers: {
    setVoiceroom: (state, action: PayloadAction<voiceroomState>) => {
      return { ...state, ...action.payload };
    },
    setTitle: (state, action: PayloadAction<string>) => {
      state.title = action.payload;
    },
    setNote: (state, action: PayloadAction<string>) => {
      state.note = action.payload;
    },
    setPersonnel: (state, action: PayloadAction<number>) => {
      state.personnel = action.payload;
    },
    setLimit: (state, action: PayloadAction<number>) => {
      state.limit = action.payload;
    },
    setStartTime: (state, action: PayloadAction<string>) => {
      state.startTime = action.payload;
    },
    setOwner: (state, action: PayloadAction<Person>) => {
      state.owner = action.payload;
    },
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload;
    },
  },
});

export const {
  setVoiceroom, setTitle, setNote, setPersonnel, setLimit, setStartTime, setOwner, setPeople
} = voiceroomSlice.actions;

export default voiceroomSlice.reducer;