import { ReactNode, useState } from 'react';
import Image from 'next/image';
import router from 'next/router';

import { Header, IconButton, MenuModal, LoginStatus } from 'components';
import { useLayout } from 'hooks/layout';

interface MainLayoutProps {
  children: ReactNode;
}

export default function MainLayout({ children }: MainLayoutProps) {
  const { width } = useLayout();
  const [toggle, setToggle] = useState(false);

  const closeModal = () => {
    setToggle(false);
  };

  return (
    <>
      <Header>
        <span>
          <IconButton onClick={() => router.push('/')}>
            <Image
              src="/logo.svg"
              alt={undefined}
              width={width > 768 ? 152 : 112}
              height={width > 768 ? 23 : 17}
              loading="eager"
            />
          </IconButton>
        </span>
        <span style={{ display: 'flex' }}>
          <LoginStatus />
          <IconButton onClick={() => setToggle(true)}>
            <Image
              src="/menu.svg"
              alt="menu"
              width={width > 768 ? 28 : 18}
              height={width > 768 ? 26 : 16}
              loading="eager"
            />
          </IconButton>
        </span>
      </Header>
      <main style={{ height: width > 768 ? 'calc(100vh - 72px)' : 'calc(100vh - 56px)' }}>{children}</main>
      <MenuModal closeModal={closeModal} isOpen={toggle} layoutWidth={width} />
    </>
  );
}
