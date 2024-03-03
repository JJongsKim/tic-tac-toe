import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase/buttonBase';
import Dropdown from '../../components/dropdown/dropdown';
import { boardSize, userMark, userMarkColor, winnerConditions } from '../../utils/mock';
import { OptionLabel, OptionPageWrap, OptionSection } from './style';

const OptionPage = () => {
  const navigate = useNavigate();

  return (
    <OptionPageWrap>
      <OptionSection>
        <OptionLabel>게임판 크기</OptionLabel>
        <Dropdown defaultData={boardSize[0].condition} data={boardSize} />
        <OptionLabel>승리 조건</OptionLabel>
        <Dropdown defaultData={winnerConditions[0].condition} data={winnerConditions} />
      </OptionSection>

      <OptionSection>
        <OptionLabel>첫 번째 플레이어</OptionLabel>
        <Dropdown defaultData={userMark[0].condition} data={userMark} />
        <Dropdown defaultData={userMarkColor[0].condition} data={userMarkColor} />
        <OptionLabel>두 번째 플레이어</OptionLabel>
        <Dropdown defaultData={userMark[1].condition} data={userMark} />
        <Dropdown defaultData={userMarkColor[1].condition} data={userMarkColor} />
      </OptionSection>

      <div style={{ marginTop: '50px' }} />
      <ButtonBase onClick={() => navigate('/main')}>게임 시작</ButtonBase>
    </OptionPageWrap>
  );
};

export default OptionPage;
