import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase/buttonBase';
import Dropdown from '../../components/dropdown/dropdown';
import { boardSize, userMark, userMarkColor, winnerConditions } from '../../utils/mock';
import { OptionLabel, OptionPageWrap, OptionSection } from './style';

const OptionPage = () => {
  const navigate = useNavigate();
  const { gameSizeValue, gameWinnerValue, user1Value, user2Value } = useSelector(
    (state: StoreType) => state.gameOptionReducer,
  );

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
      </OptionSection>

      <OptionSection>
        <OptionLabel>첫 번째 플레이어</OptionLabel>
        <Dropdown
          userType="user1"
          selectOption={user1Value.mark}
          data={userMark}
          dataName="userMark"
        />
        <Dropdown
          userType="user1"
          selectOption={user1Value.markColor}
          data={userMarkColor}
          dataName="userMarkColor"
        />

        <OptionLabel>두 번째 플레이어</OptionLabel>
        <Dropdown
          userType="user2"
          selectOption={user2Value.mark}
          data={userMark}
          dataName="userMark"
        />
        <Dropdown
          userType="user2"
          selectOption={user2Value.markColor}
          data={userMarkColor}
          dataName="userMarkColor"
        />
      </OptionSection>

      <div style={{ marginTop: '50px' }} />
      <ButtonBase onClick={() => navigate('/main')}>시작하기</ButtonBase>
    </OptionPageWrap>
  );
};

export default OptionPage;
