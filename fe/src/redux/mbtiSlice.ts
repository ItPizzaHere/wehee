import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from 'redux/store';

export interface MBTIChipData {
  key: number;
  label: string;
  selected: boolean;
  color: string;
}

interface MBTIState {
  chipData: MBTIChipData[];
}

export const initialState: MBTIState = {
  chipData:
    [
      { key: 0, label: 'INFP', selected: false, color: '#A3B28F' },
      { key: 1, label: 'INFJ', selected: false, color: '#598658' },
      { key: 2, label: 'ENFP', selected: false, color: '#ADD303' },
      { key: 3, label: 'ENFJ', selected: false, color: '#63BE09' },
      { key: 4, label: 'INTP', selected: false, color: '#8841FB' },
      { key: 5, label: 'INTJ', selected: false, color: '#8A438A' },
      { key: 6, label: 'ENTP', selected: false, color: '#F08080' },
      { key: 7, label: 'ENTJ', selected: false, color: '#C25353' },
      { key: 8, label: 'ISFP', selected: false, color: '#F59504' },
      { key: 9, label: 'ISFJ', selected: false, color: '#28B0C3' },
      { key: 10, label: 'ESFP', selected: false, color: '#E09063' },
      { key: 11, label: 'ESFJ', selected: false, color: '#6BBAF4' },
      { key: 12, label: 'ISTP', selected: false, color: '#F8C719' },
      { key: 13, label: 'ISTJ', selected: false, color: '#5656A4' },
      { key: 14, label: 'ESTP', selected: false, color: '#D5CD0D' },
      { key: 15, label: 'ESTJ', selected: false, color: '#425FFA' },
    ]
}

const mbtiSlice = createSlice({
  name: 'mbti',
  initialState,
  reducers: {
    toggleChip: (state, action: PayloadAction<number>) => {
      state.chipData = state.chipData.map((chip) => ({
        ...chip,
        selected: chip.key === action.payload ? !chip.selected : false,
      }));
    },
    selectChip: (state, action: PayloadAction<number>) => {
      const key = action.payload;
      const chip = state.chipData.find(chip => chip.key === key);
      if (chip) {
        if (chip.selected || state.chipData.filter(chip => chip.selected).length < 3) {
          chip.selected = !chip.selected;
        } else {
          alert('최대 3개의 MBTI 유형만 선택할 수 있습니다.');
        }
      }
    },
    resetMbtiSelect: () => initialState,
  }
});


export const { toggleChip, selectChip, resetMbtiSelect } = mbtiSlice.actions;

export const selectedMBTI = (state: RootState) => state.mbti.chipData.filter(chip => chip.selected).map(chip => chip.label);

export default mbtiSlice.reducer;