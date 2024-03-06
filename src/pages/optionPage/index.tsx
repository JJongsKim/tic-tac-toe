import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase';
import Dropdown from '../../components/dropdown';
import { setResetRecordData } from '../../store/reducers/gameRecordedReducer';
import {
  boardSize,
  firstAttackUsers,
  userMark,
  userMarkColor,
  winnerConditions,
} from '../../utils/mock';
import { OptionLabel, OptionPageWrap, OptionSection } from './style';

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
    dispatch(setResetRecordData());
    navigate('/main');
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
