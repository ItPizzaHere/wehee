import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface UserState {
  userSign: boolean;
  userId: number;
  nickname: string;
  profile: string;
  mbti: string;
  birth: string;
  gender: string;
  duplicate: boolean;
  canModifyMBTI: boolean;
  canModifyGender: boolean;
  canModifyBirth: boolean;
}

interface UserStateFirst {
  userSign: boolean;
  nickname: string;
  userId: number;
  profile: string;
  mbti: string;
  birth: string;
  gender: string;
  duplicate: boolean;
}

const initialState: UserState = {
  userSign: false,
  userId: 0,
  nickname: "",
  profile: "",
  mbti: "",
  birth: "0",
  gender: "",
  duplicate: true,
  canModifyMBTI: true,
  canModifyGender: true,
  canModifyBirth: true,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserState>) => {
      return { ...state, ...action.payload };
    },
    setUserFirst: (state, action: PayloadAction<UserStateFirst>) => {
      state.userSign = action.payload.userSign;
      state.nickname = action.payload.nickname;
      state.userId = action.payload.userId;
      state.profile = action.payload.profile;
      state.mbti = action.payload.mbti;
      state.birth = action.payload.birth;
      state.gender = action.payload.gender;
      state.duplicate = action.payload.duplicate;
    },
    setUserSign: (state, action: PayloadAction<boolean>) => {
      state.userSign = action.payload;
    },
    setUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    setNickname: (state, action: PayloadAction<string>) => {
      state.nickname = action.payload;
    },
    setMBTI: (state, action: PayloadAction<string>) => {
      state.mbti = action.payload;
    },
    setGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    setBirth: (state, action: PayloadAction<string>) => {
      state.birth = action.payload;
    },
    setDuplicate: (state, action: PayloadAction<boolean>) => {
      state.duplicate = action.payload;
    },
    setCanModifyMBTI: (state, action: PayloadAction<boolean>) => {
      state.canModifyMBTI = action.payload;
    },
    setCanModifyGender: (state, action: PayloadAction<boolean>) => {
      state.canModifyGender = action.payload;
    },
    setCanModifyBirth: (state, action: PayloadAction<boolean>) => {
      state.canModifyBirth = action.payload;
    },
    resetUser: () => initialState,
  }
})

export const {
  setUser,
  setUserFirst,
  setUserSign,
  setUserId,
  setNickname, setMBTI,
  setGender,
  setBirth,
  setDuplicate,
  setCanModifyMBTI,
  setCanModifyGender,
  setCanModifyBirth,
  resetUser,
} = userSlice.actions;

export default userSlice.reducer;