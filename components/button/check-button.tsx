import { ButtonHTMLAttributes } from 'react';
import { css } from '@emotion/react';

import IconButton from './icon-button';

const checkCss = ({ backgroundColor }: { backgroundColor: string }) => css`
  position: relative;
  display: inline-block;
  width: 9rem;
  height: 8rem;
  ::before {
    position: absolute;
    left: 15px;
    top: 50%;
    height: 50%;
    width: 1rem;
    background-color: ${backgroundColor};
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }

  ::after {
    position: absolute;
    left: 16px;
    bottom: 0;
    height: 1rem;
    width: 100%;
    background-color: ${backgroundColor};
    content: '';
    transform: translateX(10px) rotate(-45deg);
    transform-origin: left bottom;
  }
`;

interface CheckButtonProps {
  isChecked: boolean;
}

export default function CheckButton({
  isChecked,
  ...props
}: CheckButtonProps & ButtonHTMLAttributes<HTMLButtonElement>) {
  return (
    <IconButton {...props}>
      <span css={checkCss({ backgroundColor: isChecked ? '#3281f7' : '#f3f3f3' })} />
    </IconButton>
  );
}
