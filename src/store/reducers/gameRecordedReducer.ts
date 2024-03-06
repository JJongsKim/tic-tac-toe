import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: StoreType['gameRecordedReducer'] = {
  selectedCells: [],
  lastBoardData: [],
  gameRecordData: [],
};

const GameRecordedReducer = createSlice({
  name: 'gameRecordedReducer',
  initialState,
  reducers: {
    /* 📌 마지막 보드판 저장 */
    setRecordLastGameBoard: (state, action: PayloadAction<LastBoardActionType>) => {
      const { gameBoard, selectedCells } = action.payload;

      state.lastBoardData = gameBoard;
      state.selectedCells = selectedCells;
    },

    /* 📌 게임 진행 기록 저장 */
    setRecordGame: (state, action: PayloadAction<GameRecordType>) => {
      const { type, mark, cell } = action.payload;
      if (type === 'click') {
        state.gameRecordData.push({
          type: type,
          content: `${mark}가 [${cell.row}, ${cell.col}]을 선택했습니다.`,
        });
      }
      if (type === 'undo') {
        state.gameRecordData.push({
          type: type,
          content: `${mark}가 [${cell.row}, ${cell.col}]을 물렀습니다.`,
        });
      }
    },

    /* 📌 게임 승자 저장 */
    setRecordWinner: (state, action: PayloadAction<string | null>) => {
      const winner = action.payload;

      state.gameRecordData.push({
        content: `🎉 ${winner} 🎉`,
      });
    },

    /* 📌 게임시작 시 데이터 초기화 */
    setResetRecordData: state => {
      state.gameRecordData = [];
      state.lastBoardData = [];
      state.selectedCells = [];
    },
  },
});

export const { setRecordLastGameBoard, setRecordGame, setRecordWinner, setResetRecordData } =
  GameRecordedReducer.actions;

export default GameRecordedReducer.reducer;
