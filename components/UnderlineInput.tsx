import { css } from '@emotion/react';

type inputType = 'string' | 'email' | 'password';
type borderBottomColorType = '#000' | '#b9b9b9' | '#dbeb27' | '#fd4e4e';

interface InputProps {
  inputType?: inputType;
  placeholder: string;
  borderBottomColor?: borderBottomColorType;
}

const UnderlineInput = ({ inputType = 'string', placeholder, borderBottomColor = '#000', ...props }: InputProps) => {
  return (
    <input type={inputType} css={underlineInput} placeholder={placeholder} style={{ borderBottomColor }} {...props} />
  );
};

export const underlineInput = css`
  width: 37.6rem;
  height: 3.9rem;
  padding-bottom: 1.2rem;
  font-size: 2rem;
  line-height: 137%;
  border: none;
  border-bottom: 1.5px solid #000;
  color: #202020;
`;

export default UnderlineInput;
