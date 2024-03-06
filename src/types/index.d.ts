interface StoreType {
  gameOptionReducer: {
    gameSizeValue: string;
    gameWinnerValue: string;
    firstAttackUser: string;
    user1Value: UserValueType;
    user2Value: UserValueType;
  };
  gameRecordedReducer: {
    selectedCells: { row: number; col: number }[];
    lastBoardData: { value: string; color: string }[][];
    gameRecordData: { content: string }[];
  };
}

interface UserValueType {
  type: string;
  mark: string;
  markColor: string;
  undoCount: number;
}

interface UserMarkActionType {
  user: string;
  mark: string;
}

interface UserMarkColorActionType {
  user: string;
  markColor: string;
}

interface GameRecordType {
  type: 'click' | 'undo';
  mark: string;
  cell: { row: number; col: number };
}

interface LastBoardActionType {
  gameBoard: StoreType['gameRecordedReducer']['lastBoardData'];
  selectedCells: StoreType['gameRecordedReducer']['selectedCells'];
}
