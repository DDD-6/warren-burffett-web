import { useRouter } from 'next/router';
import { css } from '@emotion/react';

import { Button, CircleButton } from './button';

import { loginLayout, loginPanel } from '@styles/user';

interface CompleteNoticeProps {
  firstLine: string;
  secondLine: string;
}

const CompleteNotice = ({ firstLine, secondLine }: CompleteNoticeProps) => {
  const router = useRouter();

  return (
    <div css={loginLayout}>
      <div css={loginPanel}>
        <CircleButton type="button" width="7rem" height="7rem" backgroundColor="#3281F7" marginBottom="3.2rem" />
        <div css={welcomeText}>
          <span>{firstLine}</span>
          <span>{secondLine}</span>
        </div>
        <Button label="로그인" type="button" backgroundColor="#3281f7" onClick={() => router.push('/signin')} />
      </div>
    </div>
  );
};

export const welcomeText = css`
  display: flex;
  flex-direction: column;
  margin-bottom: 4.8rem;

  span {
    font-size: 2.4rem;
    line-height: 1.2;
    letter-spacing: -0.25px;
    color: #080808;
  }

  @media (min-width: 768px) {
    span {
      font-size: 3.6rem;
      line-height: 1.3;
    }
  }
`;

export default CompleteNotice;
