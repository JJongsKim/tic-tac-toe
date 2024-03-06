import { useSelector } from 'react-redux';
import GameBoard from '../../components/gameBoard';
import { MainPageWrap, UserInfoWrap } from './style';

/*
  👻 게임 메인 페이지
  선택한 옵션으로 게임을 시작한다.

  - 첫 번째 유저의 마크와 색상 정보
  - 두 번째 유저의 마크와 색상 정보
  - 게임 보드판
*/

const MainPage = () => {
  const { gameSizeValue, gameWinnerValue, firstAttackUser, user1Value, user2Value } = useSelector(
    (state: StoreType) => state.gameOptionReducer,
  );

  const size = Number(gameSizeValue.split('')[0]);

  return (
    <MainPageWrap>
      <div style={{ display: 'flex' }}>
        <UserInfoWrap>
          <p>[첫 번째 유저]</p>
          <p>마크: {user1Value.mark}</p>
          <p>색상: {user1Value.markColor}</p>
          <p>무르기: {user1Value.undoCount}</p>
        </UserInfoWrap>
        <UserInfoWrap>
          <p>[두 번째 유저]</p>
          <p>마크: {user2Value.mark}</p>
          <p>색상: {user2Value.markColor}</p>
          <p>무르기: {user2Value.undoCount}</p>
        </UserInfoWrap>
      </div>
      <GameBoard
        boardSize={size}
        winnerValue={gameWinnerValue}
        user={firstAttackUser}
        user1Value={user1Value}
        user2Value={user2Value}
      />
    </MainPageWrap>
  );
};

export default MainPage;
