import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BoardColWrap, BoardRowWrap, WinnerWrap } from '../../components/gameBoard/style';
import {
  GameRecordDataList,
  GameRecordDataWrap,
  HomeButton,
  NoReviewContent,
  ReviewPageWrap,
} from './style';

/*
  👻 기록된 게임 내용 조회페이지
  바로 이전에 플레이한 게임의 내용을 조회할 수 있다.

  - 홈으로 돌아가기가 가능하다.
  - 이전에 플레이한 보드판과 게임의 진행 상황과 승자를 볼 수 있다.
*/

const ReviewPage = () => {
  const navigate = useNavigate();
  const { selectedCells, lastBoardData, gameRecordData } = useSelector(
    (state: StoreType) => state.gameRecordedReducer,
  );

  return (
    <ReviewPageWrap>
      {selectedCells.length === 0 ? (
        <div>
          <NoReviewContent>기록된 게임이 없습니다 👀</NoReviewContent>
          <HomeButton onClick={() => navigate('/')}>홈으로 돌아가기</HomeButton>
        </div>
      ) : (
        <>
          <WinnerWrap>{gameRecordData[gameRecordData.length - 1].content}</WinnerWrap>
          <GameRecordDataWrap>
            {lastBoardData.map((row, idx) => (
              <BoardRowWrap key={idx}>
                {row.map((cell, colIdx) => (
                  <BoardColWrap key={colIdx} $color={cell.color}>
                    {selectedCells.some(cell => cell.row === idx && cell.col === colIdx)
                      ? cell.value
                      : ''}
                  </BoardColWrap>
                ))}
              </BoardRowWrap>
            ))}
            <HomeButton onClick={() => navigate('/')}>홈으로 돌아가기</HomeButton>
          </GameRecordDataWrap>

          <GameRecordDataList>
            {gameRecordData.map((item, idx) => (
              <li key={idx}>
                ✔️ {idx + 1}번 : {item.content}
              </li>
            ))}
          </GameRecordDataList>
        </>
      )}
    </ReviewPageWrap>
  );
};

export default ReviewPage;
