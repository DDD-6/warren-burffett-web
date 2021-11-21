import { css } from '@emotion/react';

const DivideLine = () => {
  return <div css={divideLine}></div>;
};

export const divideLine = css`
  width: 100%;
  height: 0;
  border-bottom: 1.5px solid #080808;

  @media (min-width: 768px) {
    width: 0;
    height: 100%;
    border-right: 1.5px solid #080808;
  }
`;

export default DivideLine;
