import { NextPage } from 'next';

import SignUp from '@components/SignUp';
import MainImage from '@components/MainImage';

const SignUpPage: NextPage = () => {
  return (
    <div style={{ display: 'flex', width: '100%' }}>
      <SignUp />
      <MainImage imageUrl />
    </div>
  );
};

export default SignUpPage;
