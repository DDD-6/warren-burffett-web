import { css } from '@emotion/react';
import Image from 'next/image';

interface MainImageProps {
  imageUrl: string;
  backgroundColor?: string;
}

const MainImage = ({ imageUrl, backgroundColor }: MainImageProps) => {
  let backgroundImage = '';
  if (imageUrl === 'signup') backgroundImage = '/bg-signup.png';
  else if (imageUrl === 'signin') backgroundImage = '/bg-login.png';
  else if (imageUrl === 'reset-password') backgroundImage = '/bg-password-reset.png';

  return (
    <div css={mainImage} style={{ backgroundColor }}>
      <Image src={backgroundImage} className="image" layout="fill" />
    </div>
  );
};

export const mainImage = css`
  width: 100%;
  height: 49.7rem;
  position: relative;

  @media (min-width: 768px) {
    display: block;
    width: 76.044rem;
    height: 100vh;
  }

  .image {
    width: 100%;
    height: 100%;
    position: relative !important;
  }
`;

export default MainImage;
