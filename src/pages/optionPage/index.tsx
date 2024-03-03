import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase/buttonBase';
import Dropdown from '../../components/dropdown/dropdown';
import { boardSize, userMark, userMarkColor, winnerConditions } from '../../utils/mock';
import { OptionLabel, OptionPageWrap, OptionSection } from './style';

const OptionPage = () => {
  const navigate = useNavigate();
  const optionData = useSelector((state: StoreType) => state.gameOptionReducer);

  return (
    <OptionPageWrap>
      <OptionSection>
        <OptionLabel>게임판 크기</OptionLabel>
        <Dropdown selectOption={optionData.gameSizeValue} data={boardSize} dataName="boardSize" />
        <OptionLabel>승리 조건</OptionLabel>
        <Dropdown
          selectOption={optionData.gameWinnerValue}
          data={winnerConditions}
          dataName="winnerConditions"
        />
      </OptionSection>

      <OptionSection>
        <OptionLabel>첫 번째 플레이어</OptionLabel>
        <Dropdown data={userMark} dataName="userMark" />
        <Dropdown data={userMarkColor} dataName="userMarkColor" />

        <OptionLabel>두 번째 플레이어</OptionLabel>
        <Dropdown data={userMark} dataName="userMark" />
        <Dropdown data={userMarkColor} dataName="userMarkColor" />
      </OptionSection>

      <div style={{ marginTop: '50px' }} />
      <ButtonBase onClick={() => navigate('/main')}>시작하기</ButtonBase>
    </OptionPageWrap>
  );
};

export default OptionPage;
