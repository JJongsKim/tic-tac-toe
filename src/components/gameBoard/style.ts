import { styled } from 'styled-components';

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

const BoardColWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 60px;
  height: 60px;
  margin: 2px;
  border-radius: 10px;
  background-color: #ccc;

  cursor: pointer;
`;

const UndoButton = styled.button`
  width: 100%;
  height: 30px;
  margin-top: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
`;

export { GameBoardWrap, BoardOptionWrap, BoardOption, BoardRowWrap, BoardColWrap, UndoButton };
