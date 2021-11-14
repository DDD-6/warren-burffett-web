import { css } from '@emotion/react';

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

export const mainImage = css`
  display: none;

  @media (min-width: 768px) {
    display: block;
    width: 76.044rem;
    height: 100vh;
    background-color: #000;
  }
`;
