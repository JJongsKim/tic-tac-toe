import { styled } from 'styled-components';
import getColorByMarkColor from '../../utils/getColorByMarkColor';

const GameBoardWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 30px;
`;

const BoardOptionWrap = styled.div`
  display: flex;
  justify-content: space-evenly;
  width: 50%;
  margin-bottom: 12px;
`;

const BoardOption = styled.div`
  font-size: 0.9rem;
  span {
    font-weight: bold;
  }
`;

const BoardRowWrap = styled.div`
  display: flex;
`;

const BoardColWrap = styled.button<{
  $color: string;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  margin: 2px;
  font-weight: bold;
  border-radius: 10px;
  color: white;
  background-color: ${props => getColorByMarkColor(props.$color)};
`;

const UndoButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export { GameBoardWrap, BoardOptionWrap, BoardOption, BoardRowWrap, BoardColWrap, UndoButton };
