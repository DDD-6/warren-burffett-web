import { css } from '@emotion/react';
import { ReactNode, HTMLProps } from 'react';

// type grey = '#f8f8f8';
// type blue = '#278EEB';
// type yellow = '#FFE812';
// type green = '#00C73C';

// type buttonBackgroundColor = grey | blue | yellow | green | '#202020';
type textColor = '#fff' | '#000' | '#0B0B0B';

type socialLogin = 'naver' | 'google' | 'kakao';

interface ButtonProps {
  width?: string;
  height?: string;
  color?: textColor;
  backgroundColor?: string;
  marginBottom?: string;
  borderRadius?: string;
  label?: ReactNode;
  type?: 'button' | 'submit';

  /** can submit */
  canSubmit?: boolean;

  /** sns login */
  sns?: socialLogin;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
/*
export const buttonDefault = css`
  width: 19.9rem;
  height: 6.2rem;
  padding: 0;
  font-size: 2rem;
  line-height: 137%;
  border: none;
  margin-bottom: 0;
  border-radius: 10rem;
  background-color: '#202020';
  color: '#fff';
  @media (min-width: 768px) {
    width: 38.238rem;
  }
`;
*/

export const Button = ({
  color = '#fff',
  marginBottom = '0',
  backgroundColor,
  borderRadius,
  label,
  type,
  disabled,
  ...props
}: ButtonProps & HTMLProps<HTMLButtonElement>) => {
  return (
    <button
      {...props}
      type={type || 'button'}
      css={buttonDefault}
      style={{ color, backgroundColor, marginBottom, borderRadius, ...props.style }}
    >
      {label}
    </button>
  );
};

export const CircleButton = ({
  borderRadius = '100%',
  width,
  height,
  backgroundColor,
  marginBottom,
  sns,
  type,
  onClick,
}: ButtonProps) => {
  let backgroundImage = '';
  if (sns === 'naver') backgroundImage = 'url(/naver.png)';
  else if (sns === 'kakao') backgroundImage = 'url(/kakao.png)';
  else if (sns === 'google') backgroundImage = 'url(/google.png)';

  return (
    <button
      type={type}
      css={circleButtonDefault}
      style={{
        background: `${backgroundImage} no-repeat center center / cover`,
        width,
        height,
        borderRadius,
        backgroundColor,
        marginBottom,
      }}
      onClick={onClick}
    ></button>
  );
};

export const buttonDefault = css`
  width: 100%;
  height: 7.4rem;
  padding: 0;
  font-size: 2rem;
  line-height: 1.2;
  border: none;
  border-radius: 40.5px;

  &:hover {
    background-color: #63b1ff;
  }
`;

export const circleButtonDefault = css`
  width: 6.4rem;
  height: 6.4rem;
  padding: 0;
  border-width: 0;
`;
