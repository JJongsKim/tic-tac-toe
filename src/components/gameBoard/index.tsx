import { useCallback, useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import useGetWinningLines from '../../hooks/useGetWinningLines';
import { setReduceUndoCount } from '../../store/reducers/gameOptionReducer';
import {
  setRecordGame,
  setRecordLastGameBoard,
  setRecordWinner,
} from '../../store/reducers/gameRecordedReducer';
import {
  BoardColWrap,
  BoardOption,
  BoardOptionWrap,
  BoardRowWrap,
  EndOption,
  EndOptionWrap,
  GameBoardWrap,
  UndoButton,
  WinnerWrap,
} from './style';

/*
  👻 게임 메인 페이지의 보드판 컴포넌트 
  가장 메인이 되는 컴포넌트다!

  - 무르기 기능은 첫 시작이나 플레이어의 횟수가 남아있지 않을 때 사용할 수 없다.
  - 15초 동안 플레이어가 선택하지 않으면 랜덤으로 셀 선택 및 공격 순서가 변경된다.
  - 셀을 선택하면 셀을 선택한 플레이어의 마크와 색상으로 셀의 스타일이 변경된다.
  - 게임이 종료되면, 홈으로 돌아가기와 기록 저장하기 버튼 2가지가 나온다.
  - 기록을 저장하면 review 페이지에서 조회가 가능하다.
*/

interface GameBoardProps {
  boardSize: number;
  winnerValue: string;
  user: string;
  user1Value: UserValueType;
  user2Value: UserValueType;
}

const GameBoard = ({ boardSize, winnerValue, user, user1Value, user2Value }: GameBoardProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const winningLines = useGetWinningLines(boardSize);

  const [winner, setWinner] = useState<string | null>(null);

  const [currentUser, setCurrentUser] = useState(user);
  const [gameBoard, setGameBoard] = useState(
    Array.from(Array(boardSize), (_, row) =>
      Array.from(Array(boardSize), (_, col) => ({
        value: (row * boardSize + col).toString(),
        color: '#ccc',
      })),
    ),
  );
  const [timer, setTimer] = useState(15);
  const [selectedCells, setSelectedCells] = useState<{ row: number; col: number }[]>([]);

  const handleClickCell = (row: number, col: number) => {
    if (!winner) {
      const mark = currentUser === '첫 번째 유저' ? user1Value.mark : user2Value.mark;
      const updatedGameBoard = [...gameBoard];

      if (
        updatedGameBoard[row][col].value !== user1Value.mark &&
        updatedGameBoard[row][col].value !== user2Value.mark
      ) {
        updatedGameBoard[row][col] = {
          value: mark,
          color: mark === user1Value.mark ? user1Value.markColor : user2Value.markColor,
        };

        setGameBoard(updatedGameBoard);
        calculateWinner();
        setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
        setSelectedCells(prevSelectedCells => [...prevSelectedCells, { row, col }]);
        dispatch(setRecordGame({ type: 'click', mark, cell: { row, col } }));

        setTimer(15);
      }
    }
  };

  const handleClickUndoButton = (user: string) => {
    const mark = currentUser === '첫 번째 유저' ? user1Value.mark : user2Value.mark;

    if (selectedCells.length > 0 && (user1Value.undoCount >= 1 || user2Value.undoCount >= 1)) {
      dispatch(setReduceUndoCount(user));
      const lastData = selectedCells.pop(); // 가장 마지막 요소 뽑아내기

      if (lastData) {
        const { row, col } = lastData;
        const updatedGameBoard = [...gameBoard];
        updatedGameBoard[row][col] = {
          value: (row * boardSize + col).toString(),
          color: '#ccc',
        }; // 다시 원래대로(숫자 및 #ccc 색상으로) 돌려놓기
        setGameBoard(updatedGameBoard);
        dispatch(setRecordGame({ type: 'undo', mark, cell: { row, col } }));
      }
      setCurrentUser(prevUser => (prevUser === '첫 번째 유저' ? '두 번째 유저' : '첫 번째 유저'));
      setTimer(15);
    }
  };

  const calculateWinner = useCallback(() => {
    for (let i = 0; i < winningLines.length; i++) {
      const line = winningLines[i];
      let isWinner = true;

      // 마크가 있는지, 모든 셀의 마크가 동일한지 판단
      for (let j = 0; j < Number(winnerValue); j++) {
        const index = line[j];
        const mark = gameBoard[Math.floor(index / boardSize)][index % boardSize].value;

        if (
          !mark ||
          mark !== gameBoard[Math.floor(line[0] / boardSize)][line[0] % boardSize].value
        ) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) {
        const winnerType =
          gameBoard[Math.floor(line[0] / boardSize)][line[0] % boardSize].value === user1Value.mark
            ? user1Value.type
            : user2Value.type;

        setWinner(winnerType);
        setTimer(0);
        break;
      }
    }
  }, [winnerValue]);

  const handleRecordGame = () => {
    alert('게임 기록이 저장되었어요!');
    dispatch(setRecordLastGameBoard({ gameBoard, selectedCells }));

    if (winner !== null) {
      dispatch(setRecordWinner(winner));
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timer | number = 0;

    if (winner) {
      return () => clearInterval(interval);
    }
    if (!winner && selectedCells.length === boardSize ** 2) {
      setWinner('무승부!!!');
      return () => clearInterval(interval);
    }
    if (timer > 0) {
      interval = setInterval(() => {
        setTimer(prev => prev - 1);
      }, 1000);
    } else if (timer === 0) {
      // 타이머가 0초가 되었을 때, 선택되지 않은 셀들 추출하여 랜덤으로 선택하기
      const emptyCells = gameBoard
        .flatMap((row, idx) =>
          row.map((cell, colIdx) => ({ row: idx, col: colIdx, value: cell.value })),
        )
        .filter(
          cell =>
            !selectedCells.some(
              selectedCell => selectedCell.row === cell.row && selectedCell.col === cell.col,
            ),
        );

      // 아직 선택되어 있지 않은 셀들이 남아있는 경우에만 실행!
      if (emptyCells.length > 0) {
        const randomIndex = Math.floor(Math.random() * emptyCells.length);
        const randomCell = emptyCells[randomIndex];
        handleClickCell(randomCell.row, randomCell.col);
      }
    }

    return () => clearInterval(interval);
  }, [timer]);

  return (
    <GameBoardWrap>
      {winner ? (
        <WinnerWrap>🎉 {winner} 🎉</WinnerWrap>
      ) : (
        <BoardOptionWrap>
          <BoardOption>
            <span>현재 순서:</span> {currentUser}
          </BoardOption>
          <BoardOption>
            <span>시간:</span> {timer}
          </BoardOption>
        </BoardOptionWrap>
      )}

      <div>
        {gameBoard.map((row, idx) => (
          <BoardRowWrap key={idx}>
            {row.map((cell, colIdx) => (
              <BoardColWrap
                key={colIdx}
                onClick={() => handleClickCell(idx, colIdx)}
                $color={cell.color}
              >
                {selectedCells.some(cell => cell.row === idx && cell.col === colIdx)
                  ? cell.value
                  : ''}
              </BoardColWrap>
            ))}
          </BoardRowWrap>
        ))}

        <UndoButton
          onClick={() => handleClickUndoButton(currentUser)}
          disabled={
            Boolean(winner) ||
            (currentUser === '첫 번째 유저' && user1Value.undoCount <= 0) ||
            (currentUser === '두 번째 유저' && user2Value.undoCount <= 0)
          }
        >
          무르기
        </UndoButton>
        {winner && (
          <EndOptionWrap>
            <EndOption onClick={() => navigate('/')}>홈으로 돌아가기</EndOption>
            <EndOption onClick={handleRecordGame}>기록 저장하기</EndOption>
          </EndOptionWrap>
        )}
      </div>
    </GameBoardWrap>
  );
};

export default GameBoard;
