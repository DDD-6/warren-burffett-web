import Link from 'next/link';
import Image from 'next/image';
import styled from '@emotion/styled';
import Modal from 'react-modal';

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
    padding: 0,
  },
};

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding-top: min(18.7rem, 17.4148vh);
  align-items: center;
  height: 100%;
`;

const A = styled.a`
  color: #fff;
  &:hover {
    color: #bcfb4f;
  }
`;

Modal.setAppElement('body');

export default function Menu({ layoutWidth, isOpen, closeModal }: MenuProps) {
  const onCloseModal = () => {
    closeModal();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={closeModal} shouldCloseOnEsc style={customStyles}>
      <Header style={{ borderBottom: 0, justifyContent: 'flex-end' }}>
        <IconButton style={{ paddingRight: 17 }} className="bg-100" onClick={() => closeModal()}>
          <Image
            src="/menuclose.svg"
            alt="menu close"
            loading="lazy"
            width={layoutWidth > 768 ? 40 : 18}
            height={layoutWidth > 768 ? 26 : 16}
            objectFit="cover"
          />
        </IconButton>
      </Header>
      <Nav>
        <Link passHref href="/">
          <A className="heading1" onClick={onCloseModal}>
            WESAVE
          </A>
        </Link>

        <Link passHref href="/timer">
          <A className="heading1" onClick={onCloseModal}>
            Working-Timer
          </A>
        </Link>
        <Link passHref href="/challenge">
          <A className="heading1" onClick={onCloseModal}>
            Challenge
          </A>
        </Link>
        <Link passHref href="/mypage">
          <A className="heading1" onClick={onCloseModal}>
            My Page
          </A>
        </Link>
      </Nav>
    </Modal>
  );
}
