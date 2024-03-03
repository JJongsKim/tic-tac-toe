import { styled } from 'styled-components';

const DropdownWrap = styled.div`
  position: relative;
  display: flex;
  align-items: center;

  width: 14%;
  height: 27px;
  padding: 0 6px;
  border: 1px solid #ccc;
  background-color: white;

  @media (max-width: 768px) {
    width: 20%;
    padding: 0 4px;
  }

  z-index: 2;
`;

const DropdownButtonWrap = styled.div`
  position: absolute;
  right: 6px;
  cursor: pointer;
`;

const DropdownButtonImg = styled.img<{
  $clicked?: boolean;
}>`
  width: 14px;
  height: 8px;
  transform: ${props => props.$clicked && `rotate(180deg)`};

  @media (max-width: 768px) {
    width: 12px;
    height: 10px;
  }
`;

const DropdownList = styled.ul`
  position: absolute;
  top: 25px;
  left: -1px;
  border: 1px solid #ccc;
  width: 102.5%;
  padding: 0 6px;
  background-color: white;

  overflow-y: auto;
  z-index: 5;

  @media (max-width: 768px) {
    width: 101.5%;
    padding: 0 4px;
  }
`;

const DropdownItem = styled.li`
  margin: 10px 0;
  font-weight: 600;
  font-size: 0.8rem;

  cursor: pointer;
`;

const DropdownDefaultItem = styled.p`
  font-weight: 600;
  font-size: 0.8rem;
`;

export {
  DropdownWrap,
  DropdownButtonWrap,
  DropdownButtonImg,
  DropdownList,
  DropdownItem,
  DropdownDefaultItem,
};
