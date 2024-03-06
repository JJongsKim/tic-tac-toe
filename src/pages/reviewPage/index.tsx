import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { BoardColWrap, BoardRowWrap, WinnerWrap } from '../../components/gameBoard/style';
import {
  GameRecordDataList,
  GameRecordDataWrap,
  HomeButton,
  MarkOrder,
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

  const selectedMark: { row: number; col: number; order: number }[] = []; // 마크가 몇 번째로 클릭되었는지 담을 배열

  // gameRecordData의 content가 긴 문자열로 되어 있어 [row, col] 값을 구해야 함
  const handleGetCell = (content: string) => {
    const startIndex = content.indexOf('['),
      endIndex = content.indexOf(']');
    const coords = content
      .substring(startIndex + 1, endIndex)
      .split(',')
      .map(coord => Number(coord.trim()));

    return { row: coords[0], col: coords[1] };
  };

  gameRecordData.forEach((item, index) => {
    const { type, content } = item;

    if (type === 'click') {
      const coords = handleGetCell(content);
      selectedMark.push({ row: coords.row, col: coords.col, order: index + 1 });
    } else if (type === 'undo') {
      // 무르기를 한 경우 해당 셀은 배열에서 제거하기
      const coords = handleGetCell(content);
      const removeCell = selectedMark.findIndex(
        cell => cell.row === coords.row && cell.col === coords.col,
      );
      if (removeCell !== -1) {
        selectedMark.splice(removeCell, 1);
      }
    }
  });

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
                    {selectedCells.some(cell => cell.row === idx && cell.col === colIdx) ? (
                      <>
                        {cell.value}
                        <MarkOrder>
                          {
                            selectedMark.find(mark => idx === mark.row && colIdx === mark.col)
                              ?.order
                          }
                        </MarkOrder>
                      </>
                    ) : (
                      ''
                    )}
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
