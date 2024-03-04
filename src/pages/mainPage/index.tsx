import { useState } from 'react';
import { useSelector } from 'react-redux';
import { MainPageWrap, UserInfoWrap } from './style';

const MainPage = () => {
  const { gameSizeValue, gameWinnerValue, firstAttackUser, user1Value, user2Value } = useSelector(
    (state: StoreType) => state.gameOptionReducer,
  );

  const size = Number(gameSizeValue.split('')[0]);
  const [gameBoard, setGameBoard] = useState(Array.from(Array(size), () => Array(size).fill(0)));
  console.log(gameBoard);

  console.log('게임판 크기:::', size, '승리 조건:::', gameWinnerValue, '선공:::', firstAttackUser);
  console.log('첫 번째 플레이어:::', user1Value);
  console.log('두 번째 플레이어:::', user2Value);

  return (
    <MainPageWrap>
      <div style={{ display: 'flex' }}>
        <UserInfoWrap>
          <p>[첫 번째 유저]</p>
          <p>마크: {user1Value.mark}</p>
          <p>색상: {user1Value.markColor}</p>
          <p>무르기:</p>
        </UserInfoWrap>
        <UserInfoWrap>
          <p>[두 번째 유저]</p>
          <p>마크: {user2Value.mark}</p>
          <p>색상: {user2Value.markColor}</p>
          <p>무르기:</p>
        </UserInfoWrap>
      </div>
    </MainPageWrap>
  );
};

export default MainPage;
