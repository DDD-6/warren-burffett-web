import { css } from '@emotion/react';
import { ReactNode, ButtonHTMLAttributes } from 'react';

const iconButtonCss = css`
  background-color: #fff;
  border: 0px;
  padding: 0 23px;
`;

interface IconButtonProps {
  children: ReactNode;
}

export default function IconButton(props: IconButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <button css={iconButtonCss} {...props}>
      {props.children}
    </button>
  );
}
