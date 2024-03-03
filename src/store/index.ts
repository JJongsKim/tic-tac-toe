import { configureStore } from '@reduxjs/toolkit';
import gameOptionReducer from './reducers/gameOptionReducer';

export const store = configureStore({
  reducer: {
    gameOptionReducer: gameOptionReducer,
  },
});
