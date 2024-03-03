import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: {
  [key: string]: string;
} = {
  gameSizeValue: '3X3',
  gameWinnerValue: '3',
};

const gameOptionReducer = createSlice({
  name: 'gameOptionReducer',
  initialState,
  reducers: {
    /* 📌 게임판 크기 변경 */
    setChangeGameSize: (state, action: PayloadAction<string>) => {
      state.gameSizeValue = action.payload;
    },

    /* 📌 게임 승리 조건 변경 */
    setChangeGameWinner: (state, action: PayloadAction<string>) => {
      state.gameWinnerValue = action.payload;
    },
  },
});

export const { setChangeGameSize, setChangeGameWinner } = gameOptionReducer.actions;

export default gameOptionReducer.reducer;
