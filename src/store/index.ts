import { configureStore } from '@reduxjs/toolkit';
import gameOptionReducer from './reducers/gameOptionReducer';
import gameRecordedReducer from './reducers/gameRecordedReducer';

export const store = configureStore({
  reducer: {
    gameOptionReducer: gameOptionReducer,
    gameRecordedReducer: gameRecordedReducer,
  },
});
