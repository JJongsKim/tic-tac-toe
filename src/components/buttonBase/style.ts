import { styled } from 'styled-components';

const ButtonBaseWrap = styled.button`
  border-radius: 10px;
  border: 2px solid #ccc;
  margin: 12px 0;

  @media (min-width: 769px) {
    width: 20%;
    height: 50px;
  }
  @media (max-width: 768px) {
    width: 30%;
    height: 40px;
  }
`;

export { ButtonBaseWrap };
