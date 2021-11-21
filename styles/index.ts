import { css } from '@emotion/react';

export const mainLayout = css`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const rowJustifyCenter = css`
  display: flex;
  justify-content: center;
`;

export const rowJustifyFlexEnd = css`
  display: flex;
  justify-content: flex-end;
  width: 100%;
`;

export const rowJustifySpaceBetween = css`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const rowJustifySpaceAround = css`
  display: flex;
  justify-content: space-around;
  width: 100%;
`;
