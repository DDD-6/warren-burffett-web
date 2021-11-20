import { css } from '@emotion/react';

interface MainImageProps {
  imageUrl: string;
}

const MainImage = ({ imageUrl }: MainImageProps) => {
  return <div css={mainImage} style={{ background: `${imageUrl} no-repeat center center / cover` }}></div>;
};

export const mainImage = css`
  width: 100%;
  height: 49.7rem;
  background-color: yellow;

  @media (min-width: 768px) {
    display: block;
    width: 76.044rem;
    height: 100vh;
  }
`;

export default MainImage;
