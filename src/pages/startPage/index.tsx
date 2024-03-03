import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase/buttonBase';

import { StartPageTitle, StartPageWrap } from './style';

const StartPage = () => {
  const naviagate = useNavigate();

  return (
    <StartPageWrap>
      <StartPageTitle>🎮 Tic! Tac! Toe! 🎮</StartPageTitle>
      <ButtonBase onClick={() => naviagate('/option')}>게임 시작</ButtonBase>
      <ButtonBase onClick={() => naviagate('/review')}>기록된 게임</ButtonBase>
    </StartPageWrap>
  );
};

export default StartPage;
