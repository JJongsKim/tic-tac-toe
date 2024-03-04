import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { setReduceUndoCount } from '../../store/reducers/gameOptionReducer';
import {
  BoardColWrap,
  BoardOption,
  BoardOptionWrap,
  BoardRowWrap,
  GameBoardWrap,
  UndoButton,
} from './style';

interface GameBoardProps {
  boardSize: number;
  user: string;
  user1Value: UserValueType;
  user2Value: UserValueType;
}

const GameBoard = ({ boardSize, user, user1Value, user2Value }: GameBoardProps) => {
  const dispatch = useDispatch();

  const [currentUser, setCurrentUser] = useState(user);
  const [gameBoard, setGameBoard] = useState(
    Array.from(Array(boardSize), (_, row) =>
      Array.from(Array(boardSize), (_, col) => row * boardSize + col),
    ),
  );
  const [timer, setTimer] = useState(15);

  const handleClickCell = () => {
    switch (user) {
      case '첫 번째 유저':
        console.log(user1Value);
        break;
      case '두 번째 유저':
        console.log(user2Value);
        break;
    }
    setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
    setTimer(15);
  };

  const handleClickUndoButton = (user: string) => {
    dispatch(setReduceUndoCount(user));
    setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
    setTimer(15);
  };

  useEffect(() => {
    let interval: NodeJS.Timer | number = 0;

    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <GameBoardWrap>
      <BoardOptionWrap>
        <BoardOption>
          <span>현재 순서:</span> {currentUser}
        </BoardOption>
        <BoardOption>
          <span>시간:</span> {timer}
        </BoardOption>
      </BoardOptionWrap>

      <div>
        {gameBoard.map((row, idx) => (
          <BoardRowWrap key={idx}>
            {row.map((cell, colIdx) => (
              <BoardColWrap key={colIdx} onClick={handleClickCell}>
                {cell}
              </BoardColWrap>
            ))}
          </BoardRowWrap>
        ))}

        <UndoButton onClick={() => handleClickUndoButton(currentUser)}>무르기</UndoButton>
      </div>
    </GameBoardWrap>
  );
};

export default GameBoard;
