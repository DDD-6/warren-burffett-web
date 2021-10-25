import { css } from '@emotion/react';

type inputType = 'string' | 'email' | 'password';

interface InputProps {
  inputType?: inputType;
  placeholder: string;
}

const Input = ({ inputType, placeholder, ...props }: InputProps) => {
  return <input type={inputType} css={inputDefault} placeholder={placeholder} {...props} />;
};

const inputDefault = css`
  width: 38.4rem;
  height: 6.1rem;
  font-size: 2.4rem;
  text-align: center;
  border: 2px solid #eae9ea;
  border-radius: 12px;
`;

export default Input;
