import { css } from '@emotion/react';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

import Button from '../components/Button';
import SignInModal from '../components/SignInModal';

const Home: NextPage = () => {
  return <SignInModal />;
};

export default Home;
