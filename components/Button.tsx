import { css } from '@emotion/react';
import React from 'react';

type grey = '#f8f8f8';
type blue = '#278EEB';
type yellow = '#FFE812';
type green = '#00C73C';
type buttonBackgroundColor = grey | blue | yellow | green;

type textColor = '#fff' | '#000' | '#0B0B0B';

interface ButtonProps {
  rounded?: boolean;
  color?: textColor;
  /**
   * What background color to use
   */
  backgroundColor?: buttonBackgroundColor;
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction
 */
const Button = ({
  rounded = true,
  color = '#fff',
  backgroundColor = '#278EEB',
  label,
  ...props
}: ButtonProps) => {
  const round = rounded ? buttonRound : null;
  return (
    <button
      type="button"
      css={[buttonDefault, round]}
      style={{ color, backgroundColor }}
      {...props}
    >
      {label}
    </button>
  );
};

export const buttonDefault = css`
  width: 19.9rem;
  height: 6.2rem;
  padding: 0;
  font-weight: 700;
  font-size: 2.4rem;
  line-height: 2.1;
  letter-spacing: -0.05em;
  border: none;

  @media (min-width: 768px) {
    width: 38.238rem;
  }
`;

export const buttonRound = css`
  border-radius: 10rem;
`;

export default Button;
