import type { NextPage } from 'next';

import SignUp from '@components/SignUp';
import SignIn from '@components/SignIn';
import PasswordReset from '@components/PasswordReset';

const Home: NextPage = () => {
  return <PasswordReset />;
};

export default Home;
