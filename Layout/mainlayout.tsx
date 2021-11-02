import { ReactNode } from 'react';
import Image from 'next/image';
import router from 'next/router';

import { Header } from '../components/Header';

import { IconButton } from '@components/button';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexBasis: '130rem' }}>
          <IconButton onClick={() => router.push('/')}>
            <Image src="/logo.svg" alt={undefined} width="152" height="23rem" loading="eager" />
          </IconButton>
          <IconButton>
            <Image src="/menu.svg" alt="menu" width="28rem" height="23rem" loading="eager" />
          </IconButton>
        </div>
      </Header>
      {children}
    </>
  );
}
