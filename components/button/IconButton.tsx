import styled from '@emotion/styled';
import { ReactNode, HTMLProps } from 'react';

const SvgButton = styled.button`
  background-color: #fff;
  border: 0px;
  padding: 0 23px;
`;

interface IconButtonProps {
  children: ReactNode;
}

export default function IconButton({ children }: IconButtonProps & HTMLProps<HTMLButtonElement>) {
  return <SvgButton>{children}</SvgButton>;
}
