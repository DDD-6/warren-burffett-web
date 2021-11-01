import { css } from '@emotion/react';

type grey = '#f8f8f8';
type blue = '#278EEB';
type yellow = '#FFE812';
type green = '#00C73C';

type buttonBackgroundColor = grey | blue | yellow | green | '#202020';
type textColor = '#fff' | '#000' | '#0B0B0B';

type socialLogin = 'naver' | 'google' | 'kakao';

interface ButtonProps {
  color?: textColor;
  backgroundColor?: buttonBackgroundColor;
  marginBottom?: string;
  borderRadius?: string;
  label?: string;
  type?: 'button' | 'submit';

  /** sns login */
  sns?: socialLogin;

  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  color = '#fff',
  backgroundColor = '#202020',
  marginBottom = '0',
  borderRadius = '10rem',
  label,
  type,
  ...props
}: ButtonProps) => {
  return (
    <button
      type={type || 'button'}
      css={buttonDefault}
      style={{ color, backgroundColor, marginBottom, borderRadius }}
      {...props}
    >
      {label}
    </button>
  );
};

export const CircleButton = ({ borderRadius = '100%', sns = 'naver' }: ButtonProps) => {
  const backgroundImage = 'url(../public/google.png)';
  return (
    <button
      css={circleButtonDefault}
      style={{
        background: `${backgroundImage} no-repeat center center / cover`,
        borderRadius,
      }}
      onClick={() => {
        console.log(sns);
      }}
    ></button>
  );
};

export const buttonDefault = css`
  width: 19.9rem;
  height: 6.2rem;
  padding: 0;
  font-size: 2rem;
  line-height: 137%;
  border: none;
  @media (min-width: 768px) {
    width: 38.238rem;
  }
`;

export const circleButtonDefault = css`
  width: 6.4rem;
  height: 6.4rem;
  padding: 0;
`;
