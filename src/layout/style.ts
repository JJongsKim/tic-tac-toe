import { styled } from 'styled-components';

const LayoutWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: #ccc;
`;

const ContentWrap = styled.main`
  background-color: white;

  @media (min-width: 769px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export { LayoutWrap, ContentWrap };
