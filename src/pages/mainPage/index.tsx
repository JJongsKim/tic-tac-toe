import { useSelector } from 'react-redux';
import GameBoard from '../../components/gameBoard';
import { MainPageWrap, UserInfoWrap } from './style';

const MainPage = () => {
  const { gameSizeValue, firstAttackUser, user1Value, user2Value } = useSelector(
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
        user={firstAttackUser}
        user1Value={user1Value}
        user2Value={user2Value}
      />
    </MainPageWrap>
  );
};

export default MainPage;
