import { css } from '@emotion/react';

interface BoldTitleProps {
  title: string;
}

const BoldTitle = ({ title }: BoldTitleProps) => {
  return <div css={boldTitleDefault}>{title}</div>;
};

const boldTitleDefault = css`
  // margin-top은 지울 예정
  margin-top: 16.7rem;
  margin-bottom: 5.8rem;
  font-size: 4.8rem;
  line-height: 1.5;
  color: #000;
`;

export default BoldTitle;
