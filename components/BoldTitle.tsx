import { css } from '@emotion/react';

interface BoldTitleProps {
  title: string;
}

const BoldTitle = ({ title }: BoldTitleProps) => {
  return <div css={boldTitleDefault}>{title}</div>;
};

const boldTitleDefault = css`
  margin-bottom: 5.8rem;
  font-size: 4.8rem;
  line-height: 1.5;
  color: #000;
`;

export default BoldTitle;
