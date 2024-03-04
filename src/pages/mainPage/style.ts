import { styled } from 'styled-components';
import { OptionPageWrap } from '../optionPage/style';

const MainPageWrap = styled(OptionPageWrap)``;

const UserInfoWrap = styled.div`
  margin: 0 30px;
  font-size: 0.9rem;

  p {
    padding: 5px 0;
  }
  p:nth-child(1) {
    margin: 20px 0;
    font-weight: bold;
  }
`;

export { MainPageWrap, UserInfoWrap };
