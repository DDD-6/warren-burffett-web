import { NextPage } from 'next';

import SignIn from '@components/SignIn';
import MainImage from '@components/MainImage';

const SignInPage: NextPage = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SignIn />
      <MainImage />
    </div>
  );
};

export default SignInPage;
