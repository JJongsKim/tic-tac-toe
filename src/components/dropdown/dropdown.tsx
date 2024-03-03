import { useState } from 'react';
import { useDispatch } from 'react-redux';
import dropdown from '../../assets/dropdown.svg';

import { setChangeGameSize, setChangeGameWinner } from '../../store/reducers/gameOptionReducer';
import {
  DropdownButtonImg,
  DropdownButtonWrap,
  DropdownDefaultItem,
  DropdownItem,
  DropdownList,
  DropdownWrap,
} from './style';

interface DropdownProps {
  selectOption?: string;
  dataName: string;
  data: Array<{
    [key: string]: string;
  }>;
}

const Dropdown = ({ selectOption, dataName, data }: DropdownProps) => {
  const dispatch = useDispatch();

  const [clicked, isClicked] = useState(false);
  const handleClickButton = () => {
    isClicked(!clicked);
  };

  const handleChangeValue = (dataName: string, value: string) => {
    switch (dataName) {
      case 'boardSize':
        dispatch(setChangeGameSize(value));
        break;
      case 'winnerConditions':
        dispatch(setChangeGameWinner(value));
        break;
      case 'userMark':
        break;
      case 'userMarkColor':
        break;
    }

    isClicked(false);
  };

  return (
    <DropdownWrap>
      <DropdownDefaultItem>{selectOption ? selectOption : 'ㅇㅇ'}</DropdownDefaultItem>
      <DropdownButtonWrap onClick={handleClickButton}>
        <DropdownButtonImg src={dropdown} alt="버튼" $clicked={clicked} />
      </DropdownButtonWrap>
      {clicked && (
        <DropdownList>
          {data.map(item => (
            <DropdownItem
              key={item.type}
              onClick={() => handleChangeValue(dataName, item.condition)}
            >
              {item.condition}
            </DropdownItem>
          ))}
        </DropdownList>
      )}
    </DropdownWrap>
  );
};

export default Dropdown;
