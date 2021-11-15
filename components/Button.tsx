import { css } from '@emotion/react';

type textColor = '#fff' | '#000' | '#0B0B0B';

type socialLogin = 'naver' | 'google' | 'kakao';

interface ButtonProps {
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
  backgroundColor,
  marginBottom = '0',
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

export const CircleButton = ({ borderRadius = '100%', sns = 'naver' }: ButtonProps) => {
  let backgroundImage = 'url(/google.png)';
  if (sns === 'naver') backgroundImage = 'url(/naver.png)';
  else if (sns === 'kakao') backgroundImage = 'url(/kakao.png)';

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
