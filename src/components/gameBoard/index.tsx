import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import useGetWinningLines from '../../hooks/useGetWinningLines';
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
  const winningLines = useGetWinningLines(boardSize);

  const [winner, setWinner] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState(user);
  const [gameBoard, setGameBoard] = useState(
    Array.from(Array(boardSize), (_, row) =>
      Array.from(Array(boardSize), (_, col) => (row * boardSize + col).toString()),
    ),
  );
  const [timer, setTimer] = useState(15);

  const handleClickCell = (row: number, col: number) => {
    if (!winner) {
      const mark = currentUser === '첫 번째 유저' ? user1Value.mark : user2Value.mark;
      const updatedGameBoard = [...gameBoard];

      if (
        updatedGameBoard[row][col] !== user1Value.mark &&
        updatedGameBoard[row][col] !== user2Value.mark
      ) {
        updatedGameBoard[row][col] = mark;

        setGameBoard(updatedGameBoard);
        calculateWinner();
        setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
        setTimer(15);
      }
    }
  };

  const handleClickUndoButton = (user: string) => {
    dispatch(setReduceUndoCount(user));
    setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
    setTimer(15);
  };

  const calculateWinner = () => {
    for (let i = 0; i < winningLines.length; i++) {
      const [a, b, c] = winningLines[i];
      const markA = gameBoard[Math.floor(a / boardSize)][a % boardSize];
      const markB = gameBoard[Math.floor(b / boardSize)][b % boardSize];
      const markC = gameBoard[Math.floor(c / boardSize)][c % boardSize];

      if (markA && markA === markB && markB === markC) {
        setWinner(markA === user1Value.mark ? user1Value.type : user2Value.type);
        setTimer(0);
        break;
      }
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timer | number = 0;

    if (winner) {
      return () => clearInterval(interval);
    }
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
              <BoardColWrap key={colIdx} onClick={() => handleClickCell(idx, colIdx)}>
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
