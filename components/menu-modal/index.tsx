import Link from 'next/link';
import Image from 'next/image';
import classnames from 'classnames';
import styled from '@emotion/styled';
import Modal from 'react-modal';
import { useRouter } from 'next/router';

import { Header, IconButton } from 'components';

interface MenuProps {
  layoutWidth: number;
  isOpen: boolean;
  closeModal: () => void;
}

const customStyles = {
  content: {
    inset: 0,
    marginRight: '-50%',
    width: '100%',
    height: '100%',
    backgroundColor: '#080808',
    overflow: 'hidden',
  },
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: min(187px, 18.5%);
  align-items: center;
  height: 100%;
`;

Modal.setAppElement('body');

export default function Menu({ layoutWidth, isOpen, closeModal }: MenuProps) {
  const { pathname } = useRouter();
  const path = pathname.split('/')[1] || '/';
  const onCloseModal = () => {
    closeModal();
  };

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
        <Link href="/">
          <a
            className={classnames('heading1', path === '/' ? 'secondary-green' : 'font-color-0')}
            onClick={onCloseModal}
          >
            WESAVE
          </a>
        </Link>

        <Link href="/timer">
          <a
            className={classnames('heading1', path === 'timer' ? 'secondary-green' : 'font-color-0')}
            onClick={onCloseModal}
          >
            Working-Timer
          </a>
        </Link>
        <Link href="/challenge">
          <a
            className={classnames('heading1', path === 'challenge' ? 'secondary-green' : 'font-color-0')}
            onClick={onCloseModal}
          >
            Challenge
          </a>
        </Link>
        <Link href="/mypage">
          <a
            className={classnames('heading1', path === 'mypage' ? 'secondary-green' : 'font-color-0')}
            onClick={onCloseModal}
          >
            My Page
          </a>
        </Link>
      </Nav>
    </Modal>
  );
}
