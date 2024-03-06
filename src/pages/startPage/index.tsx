import { useNavigate } from 'react-router-dom';
import ButtonBase from '../../components/buttonBase';

import { StartPageTitle, StartPageWrap } from './style';

/*
  👻 시작 페이지

  - 옵션 페이지로 이동
  - 기록된 게임 내용 조회 가능한 페이지로 이동
*/

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
