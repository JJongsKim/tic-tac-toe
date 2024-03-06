import { styled } from 'styled-components';
import { UndoButton } from '../../components/gameBoard/style';
import { OptionPageWrap } from '../optionPage/style';

const ReviewPageWrap = styled(OptionPageWrap)``;

const NoReviewContent = styled.p`
  font-weight: 700;
  font-size: 1.2rem;
`;

const GameRecordDataWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const HomeButton = styled(UndoButton)`
  width: 100%;
`;

const GameRecordDataList = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 30px;
  font-weight: 500;
  font-size: 0.9rem;

  li {
    margin-bottom: 12px;
  }
`;

export { ReviewPageWrap, NoReviewContent, HomeButton, GameRecordDataWrap, GameRecordDataList };
