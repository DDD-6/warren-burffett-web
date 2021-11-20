import { css } from '@emotion/react';

interface BoldTitleProps {
  title: string;
}

const BoldTitle = ({ title }: BoldTitleProps) => {
  return <div css={boldTitleDefault}>{title}</div>;
};

const boldTitleDefault = css`
  margin-bottom: 4.8rem;
  font-size: 3.6rem;
  line-height: 1.3;
  letter-spacing: -0.25px;
  color: #000;

  @media (min-width: 768px) {
    font-size: 4.8rem;
    line-height: 1.2;
  }
`;

export default BoldTitle;
