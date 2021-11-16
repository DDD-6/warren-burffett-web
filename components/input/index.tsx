import { css } from '@emotion/react';
import { InputHTMLAttributes, ClassAttributes } from 'react';

const ClearInputCss = css`
  border: 0;
  font-size: 9.6rem;
  text-align: center;

  ::placeholder,
  ::-ms-input-placeholder {
    color: #f3f3f3;
    text-align: center;
    font-size: 9.6rem;
  }
`;

export function ClearInput(props: ClassAttributes<HTMLInputElement> & InputHTMLAttributes<HTMLInputElement>) {
  return <input css={ClearInputCss} {...props} />;
}
