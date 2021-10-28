import { css } from '@emotion/react';

type spanColor = '#969696' | '#ff9233';

interface SmallSpanProps {
  text: string;
  color?: spanColor;
  marginTop?: string;
}

const SmallSpan = ({ text, color = '#969696', marginTop = '0' }: SmallSpanProps) => {
  return (
    <span css={smallSpanDefault} style={{ color, marginTop }}>
      {text}
    </span>
  );
};

const smallSpanDefault = css`
  display: block;
  font-size: 1.4rem;
  line-height: 137%;
`;

export default SmallSpan;
