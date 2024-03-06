import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase';
import Dropdown from '../../components/dropdown';
import { setResetUndoCount } from '../../store/reducers/gameOptionReducer';
import { setResetRecordData } from '../../store/reducers/gameRecordedReducer';
import {
  boardSize,
  firstAttackUsers,
  userMark,
  userMarkColor,
  winnerConditions,
} from '../../utils/mock';
import { OptionLabel, OptionPageWrap, OptionSection } from './style';

/*
  👻 옵션 페이지
  게임의 옵션을 설정한 후, 시작할 수 있다.

  - 보드판 사이즈, 승리 조건 선택 가능
  - 1번 플레이어와 2번 플레이어가 각각 선택한 마크와 색상을 제외하기 위해 filterd 배열을 만들어 컴포넌트에 전달
  - 시작하기를 누르면 게임 메인 페이지로 이동
*/

const OptionPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { gameSizeValue, gameWinnerValue, firstAttackUser, user1Value, user2Value } = useSelector(
    (state: StoreType) => state.gameOptionReducer,
  );

  const filterdUserMark = userMark.filter(
    item => item.condition !== user1Value.mark && item.condition !== user2Value.mark,
  );
  const filteredUserMarkColor = userMarkColor.filter(
    item => item.condition !== user1Value.markColor && item.condition !== user2Value.markColor,
  );

  const handleStartGame = () => {
    if (Number(gameSizeValue.split('')[0]) >= Number(gameWinnerValue)) {
      dispatch(setResetRecordData());
      dispatch(setResetUndoCount());
      navigate('/main');
    } else {
      alert('게임판의 크기보다 같거나 작은 승리 조건을 골라주세요.');
    }
  };

  return (
    <OptionPageWrap>
      <OptionSection>
        <OptionLabel>게임판 크기</OptionLabel>
        <Dropdown selectOption={gameSizeValue} data={boardSize} dataName="boardSize" />
        <OptionLabel>승리 조건</OptionLabel>
        <Dropdown
          selectOption={gameWinnerValue}
          data={winnerConditions}
          dataName="winnerConditions"
        />
        <OptionLabel>선공</OptionLabel>
        <Dropdown
          selectOption={firstAttackUser}
          data={firstAttackUsers}
          dataName="firstAttackUsers"
        />
      </OptionSection>

      <OptionSection>
        <OptionLabel>첫 번째 유저</OptionLabel>
        <Dropdown
          userType="user1"
          selectOption={user1Value.mark}
          data={filterdUserMark}
          dataName="userMark"
        />
        <Dropdown
          userType="user1"
          selectOption={user1Value.markColor}
          data={filteredUserMarkColor}
          dataName="userMarkColor"
        />

        <OptionLabel>두 번째 유저</OptionLabel>
        <Dropdown
          userType="user2"
          selectOption={user2Value.mark}
          data={filterdUserMark}
          dataName="userMark"
        />
        <Dropdown
          userType="user2"
          selectOption={user2Value.markColor}
          data={filteredUserMarkColor}
          dataName="userMarkColor"
        />
      </OptionSection>

      <div style={{ marginTop: '50px' }} />
      <ButtonBase onClick={handleStartGame}>시작하기</ButtonBase>
    </OptionPageWrap>
  );
};

export default OptionPage;
