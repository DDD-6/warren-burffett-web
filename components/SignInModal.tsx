import { css } from '@emotion/react';
import Button from './Button';

const SignInModal = () => {
  return (
    <div css={centerLayout}>
      <Button label="카카오" color="#0B0B0B" backgroundColor="#FFE812" />
      <Button label="네이버" backgroundColor="#00C73C" />
      <Button label="구글" color="#000" backgroundColor="#f8f8f8" />
    </div>
  );
};

export const centerLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  // 나중에 지우기
  margin-top: 10px;
  button {
    margin-bottom: 10px;
  }
`;

export default SignInModal;
