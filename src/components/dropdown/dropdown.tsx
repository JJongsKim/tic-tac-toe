import { useState } from 'react';
import dropdown from '../../assets/dropdown.svg';

import {
  DropdownButtonImg,
  DropdownButtonWrap,
  DropdownDefaultItem,
  DropdownItem,
  DropdownList,
  DropdownWrap,
} from './style';

interface DropdownProps {
  defaultData: string;
  data: Array<{
    [key: string]: number | string;
  }>;
}

const Dropdown = ({ defaultData, data }: DropdownProps) => {
  const [clicked, isClicked] = useState(false);
  const handleClickButton = () => {
    isClicked(!clicked);
  };

  return (
    <DropdownWrap>
      <DropdownDefaultItem>{defaultData}</DropdownDefaultItem>
      <DropdownButtonWrap onClick={handleClickButton}>
        <DropdownButtonImg src={dropdown} alt="버튼" $clicked={clicked} />
      </DropdownButtonWrap>
      {clicked && (
        <DropdownList>
          {data.map(item => (
            <DropdownItem key={item.type}>{item.condition}</DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
