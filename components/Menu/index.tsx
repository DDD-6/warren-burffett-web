import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import { useEffect, useState } from 'react';

import { P1, Header, IconButton } from 'components';

interface MenuProps {
  layoutWidth: number;
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '100vw',
    height: '100vh',
    backgroundColor: '#080808',
    overflow: 'hidden',
  },
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: 18.7rem;
  align-items: center;
  height: 100%;
`;

Modal.setAppElement('body');

export default function Menu({ layoutWidth, isOpen, closeModal }: MenuProps) {
  const [path, setPath] = useState<string | undefined>();
  const onCloseModal = () => {
    closeModal();
    setPath('/');
  };

  useEffect(() => {
    setPath(window.location.pathname.split('/')[1] || '/');
  }, []);

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnEsc style={customStyles}>
      <Header style={{ borderBottom: 0, maxWidth: '130rem', justifyContent: 'flex-end' }}>
        <IconButton className="bg-100" onClick={() => closeModal()}>
          <Image
            src="/menuclose.svg"
            alt="menu close"
            loading="lazy"
            width={layoutWidth > 768 ? 28 : 18}
            height={layoutWidth > 768 ? 26 : 16}
          />
        </IconButton>
      </Header>
      <Nav>
        <P1 className={classnames('white-font', { 'secondary-green': path === '/' })}>
          <Link href="/">
            <a onClick={onCloseModal}>WESAVE</a>
          </Link>
        </P1>
        <P1 className={classnames('white-font', { 'secondary-green': path === 'working-timer' })}>
          <Link href="/working-timer">
            <a onClick={onCloseModal}>Working-Timer</a>
          </Link>
        </P1>
        <P1 className={classnames('white-font', { 'secondary-green': path === 'challenge' })}>
          <Link href="/challenge">
            <a onClick={onCloseModal}>Challenge</a>
          </Link>
        </P1>
        <P1 className={classnames('white-font', { 'secondary-green': path === 'mypage' })}>
          <Link href="/mypage">
            <a onClick={onCloseModal}>My Page</a>
          </Link>
        </P1>
      </Nav>
    </Modal>
  );
}
