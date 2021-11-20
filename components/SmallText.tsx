import { css } from '@emotion/react';
import Link from 'next/link';

type spanColor = '#777777' | '#3281F7';

interface SmallTextProps {
  text: string;
  color?: spanColor;
  marginTop?: string;
  marginRight?: string;
  fontSize?: string;
  lineHeight?: string;
}

interface SmallAnchorProps {
  href: string;
}

export const SmallSpan = ({
  text,
  color = '#777777',
  marginTop = '0',
  marginRight,
  fontSize,
  lineHeight,
}: SmallTextProps) => {
  return (
    <span css={smallSpanDefault} style={{ color, marginTop, marginRight, fontSize, lineHeight }}>
      {text}
    </span>
  );
};

export const SmallAnchor = ({
  href,
  text,
  color = '#777777',
  fontSize,
  lineHeight,
  marginRight,
}: SmallTextProps & SmallAnchorProps) => {
  return (
    <Link href={href}>
      <a css={smallSpanDefault} style={{ color, fontSize, lineHeight, marginRight }}>
        {text}
      </a>
    </Link>
  );
};

const smallSpanDefault = css`
  display: block;
  font-size: 1.6rem;
  line-height: 1.2;
  letter-spacing: -0.25px;
`;
