import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface Person {
  profile: string;
  nickname: string;
}

export interface Message {
  content: string;
  writer: Person;
  timestamp: string;
}

export interface chatState {
  chatId: number;
  owner: Person;
  title: string;
  category: string;
  limit: number;
  personnel: number;
  people: Person[];
  notice: string;
  selectedMBTI: string[];
  gender: string;
  ageRange: number[];
  messages: Message[];
}

const initialState: chatState = {
  chatId: 0,
  owner: { profile: "", nickname: "닉네임" },
  title: "",
  category: "",
  limit: 10,
  personnel: 0,
  people: [],
  notice: "",
  selectedMBTI: [],
  gender: "모두",
  ageRange: [0, 100],
  messages: [],
};

const chatSlice = createSlice({
  name: 'chat',
  initialState,
  reducers: {
    setChat: (state, action: PayloadAction<chatState>) => {
      return { ...state, ...action.payload };
    },
    setChatInfo: (state, action: PayloadAction<{id: number, title: string, category: string, limit: number, personnel: number, people: Person[]}>) => {
      state.chatId = action.payload.id;
      state.title = action.payload.title;
      state.category = action.payload.category;
      state.limit = action.payload.limit;
      state.personnel = action.payload.personnel;
      state.people = action.payload.people;
    },
    setChatId: (state, action: PayloadAction<number>) => {
      state.chatId = action.payload;
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
    setPersonnel: (state, action: PayloadAction<number>) => {
      state.personnel = action.payload;
    },
    setPeople: (state, action: PayloadAction<Person[]>) => {
      state.people = action.payload;
    },
    setNotice: (state, action: PayloadAction<string>) => {
      state.notice = action.payload;
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
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },
    addPerson: (state, action: PayloadAction<Person>) => {
      state.people.push(action.payload);
      state.personnel = state.people.length;
    },
    removePerson: (state, action: PayloadAction<string>) => {
      state.people = state.people.filter(person => person.nickname !== action.payload);
      state.personnel = state.people.length;
    },
    addMessage: (state, action: PayloadAction<Message>) => {
      state.messages.push(action.payload);
    },
  },
});

export const {
  setChat, setChatInfo, setChatId, setOwner, setTitle, setCategory, setLimit, setPersonnel, setPeople, setNotice,
  setSelectedMBTI, setGender, setAgeRange, setMessages,
  addPerson, removePerson, addMessage,
} = chatSlice.actions;

export default chatSlice.reducer;