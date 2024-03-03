import { styled } from 'styled-components';

const StartPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const StartPageTitle = styled.p`
  font-weight: bold;
  font-size: 1.5rem;
  margin: 30px 0;
`;

export { StartPageWrap, StartPageTitle };
