interface StoreType {
  gameOptionReducer: {
    gameSizeValue: string;
    gameWinnerValue: string;
    firstAttackUser: string;
    user1Value: UserValueType;
    user2Value: UserValueType;
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
