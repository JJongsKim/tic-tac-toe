import { useState } from 'react';
import { useDispatch } from 'react-redux';
import dropdown from '../../assets/dropdown.svg';

import {
  setChangeGameSize,
  setChangeGameWinner,
  setChangeUserMark,
  setChangeUserMarkColor,
} from '../../store/reducers/gameOptionReducer';
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
  userType?: string;
  dataName: string;
  data: Array<{
    [key: string]: string;
  }>;
}

const Dropdown = ({ selectOption, userType, dataName, data }: DropdownProps) => {
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
        if (userType !== undefined) {
          dispatch(setChangeUserMark({ user: userType, mark: value }));
        }
        break;

      case 'userMarkColor':
        if (userType !== undefined) {
          dispatch(setChangeUserMarkColor({ user: userType, markColor: value }));
        }
        break;
    }

    isClicked(false);
  };

  return (
    <DropdownWrap>
      <DropdownDefaultItem>{selectOption}</DropdownDefaultItem>
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
