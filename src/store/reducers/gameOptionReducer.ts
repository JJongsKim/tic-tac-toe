import type { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from '@reduxjs/toolkit';

const initialState: StoreType['gameOptionReducer'] = {
  gameSizeValue: '3X3',
  gameWinnerValue: '3',
  user1Value: {
    mark: 'Ｘ',
    markColor: '파랑',
  },
  user2Value: {
    mark: '⃝',
    markColor: '빨강',
  },
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

    /* 📌 플레이어별 선택한 마크 변경 */
    setChangeUserMark: (state, action: PayloadAction<UserMarkActionType>) => {
      const { user, mark } = action.payload;
      if (user === 'user1') {
        state.user1Value.mark = mark;
      }
      if (user === 'user2') {
        state.user2Value.mark = mark;
      }
    },

    /* 📌 플레이어별 선택한 마크의 색상 변경 */
    setChangeUserMarkColor: (state, action: PayloadAction<UserMarkColorActionType>) => {
      const { user, markColor } = action.payload;
      if (user === 'user1') {
        state.user1Value.markColor = markColor;
      }
      if (user === 'user2') {
        state.user2Value.markColor = markColor;
      }
    },
  },
});

export const { setChangeGameSize, setChangeGameWinner, setChangeUserMark, setChangeUserMarkColor } =
  gameOptionReducer.actions;

export default gameOptionReducer.reducer;
