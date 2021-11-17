import { NextPage } from 'next';

import SignUp from '@components/SignUp';
import MainImage from '@components/MainImage';
import DivideLine from '@components/DivideLine';
import { mainLayout } from '@styles/index';

const SignUpPage: NextPage = () => {
  return (
    <div css={mainLayout}>
      <SignUp />
      <DivideLine />
      <MainImage imageUrl="" />
    </div>
  );
};

export default SignUpPage;
