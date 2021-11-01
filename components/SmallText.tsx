import { css } from '@emotion/react';
import Link from 'next/link';

type spanColor = '#969696' | '#ff9233';

interface SmallTextProps {
  text: string;
  color?: spanColor;
  marginTop?: string;
  fontSize?: string;
  lineHeight?: string;
}

interface SmallAnchorProps {
  href: string;
}

export const SmallSpan = ({
  text,
  color = '#969696',
  marginTop = '0',
  fontSize = '1.4rem',
  lineHeight = '137%',
}: SmallTextProps) => {
  return (
    <span css={smallSpanDefault} style={{ color, marginTop, fontSize, lineHeight }}>
      {text}
    </span>
  );
};

export const SmallAnchor = ({
  href,
  text,
  color = '#969696',
  fontSize = '1.6rem',
  lineHeight = '137%',
}: SmallTextProps & SmallAnchorProps) => {
  return (
    <Link href={href}>
      <a style={{ color, fontSize, lineHeight }}>{text}</a>
    </Link>
  );
};

const smallSpanDefault = css`
  display: block;
`;
