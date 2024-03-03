interface StoreType {
  gameOptionReducer: {
    gameSizeValue: string;
    gameWinnerValue: string;
    user1Value: UserValueType;
    user2Value: UserValueType;
  };
}

interface UserValueType {
  mark: string;
  markColor: string;
}

interface UserMarkActionType {
  user: string;
  mark: string;
}

interface UserMarkColorActionType {
  user: string;
  markColor: string;
}
