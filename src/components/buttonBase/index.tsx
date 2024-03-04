import { ButtonBaseWrap } from './style';

interface ButtonBaseProps {
  children: string;
  onClick: () => void;
}

const ButtonBase = ({ children, onClick }: ButtonBaseProps) => {
  return <ButtonBaseWrap onClick={onClick}>{children}</ButtonBaseWrap>;
};

export default ButtonBase;
