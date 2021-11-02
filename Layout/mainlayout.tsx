import { ReactNode } from 'react';
import Image from 'next/image';
import router from 'next/router';

import { Header } from 'components/Header';
import { IconButton } from 'components/button';
import { useLayout } from 'hooks/layout';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { width } = useLayout();

  return (
    <>
      <Header>
        <div style={{ display: 'flex', justifyContent: 'space-between', flexBasis: '130rem' }}>
          <IconButton onClick={() => router.push('/')}>
            <Image
              src="/logo.svg"
              alt={undefined}
              width={width > 768 ? 152 : 112}
              height={width > 768 ? 23 : 17}
              loading="eager"
            />
          </IconButton>
          <IconButton>
            <Image
              src="/menu.svg"
              alt="menu"
              width={width > 768 ? 28 : 18}
              height={width > 768 ? 26 : 16}
              loading="eager"
            />
          </IconButton>
        </div>
      </Header>
      <main style={{ height: width > 768 ? 'calc(100vh - 72px)' : 'calc(100vh - 56px)' }}>{children}</main>
    </>
  );
}
