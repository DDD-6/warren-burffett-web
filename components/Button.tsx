import { css } from '@emotion/react';

type textColor = '#fff' | '#000' | '#0B0B0B';

type socialLogin = 'naver' | 'google' | 'kakao';

interface ButtonProps {
  width?: string;
  height?: string;
  color?: textColor;
  backgroundColor?: string;
  marginBottom?: string;
  borderRadius?: string;
  label?: string;
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
export const Button = ({
  color = '#fff',
  marginBottom = '0',
  backgroundColor,
  borderRadius,
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
`;

export const circleButtonDefault = css`
  width: 6.4rem;
  height: 6.4rem;
  padding: 0;
  border-width: 0;
`;
