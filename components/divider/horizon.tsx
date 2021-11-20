import { css } from '@emotion/react';

const horizonCss = (top: number, bottom?: number) => css`
  width: 100%;
  height: 1.5px;
  margin: ${top}px 0 ${bottom ?? 0}px 0;
  border: 0;
`;

interface HorizonDividerProps {
  top: number;
  bottom?: number;
}

export default function HorizonDivider({ top, bottom }: HorizonDividerProps) {
  return <div css={horizonCss(top, bottom)} className="bg-60" />;
}
