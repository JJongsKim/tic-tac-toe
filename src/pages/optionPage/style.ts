import { styled } from 'styled-components';

const OptionPageWrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  height: 100%;
`;

const OptionLabel = styled.label`
  margin: 8px;
  font-weight: bold;
  font-size: 0.8rem;
`;

const OptionSection = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  margin: 60px 0;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export { OptionPageWrap, OptionLabel, OptionSection };
