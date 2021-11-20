import Link from 'next/link';
import styled from '@emotion/styled';

import { P4, P7, HorizonDivider } from 'components';
import { useLayout } from 'hooks/layout';

const A = styled.a`
  padding: 14.5px 0;
  :nth-child(1) {
    padding-top: 29px;
  }
`;

export default function MyPage() {
  const { width } = useLayout();

  return (
    <div style={{ maxWidth: '120.4rem', margin: '0 auto', marginTop: '15.8vh' }}>
      <div style={{ border: 0 }}>
        <P4 style={{ padding: '3.9rem 0' }}>위세이브님</P4>
      </div>
      <HorizonDivider top={width > 768 ? 29 : 16} bottom={23} />
      <div style={{ marginLeft: 'auto', maxWidth: '87.6rem', borderBottom: '1.5px solid #e4e4e4' }}>
        <div>
          <b className="font-color-100 body2">이메일</b>
        </div>
        <div style={{ margin: '29px 0' }}>
          <P7 className="font-color-60">이름:</P7>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        <Link passHref href="/salary">
          <A className="primary-blue body2">내 소득변경</A>
        </Link>
        <Link passHref href="/">
          <A className="primary-blue body2">로그아웃</A>
        </Link>
        <Link passHref href="mypage/resign">
          <A className="primary-blue body2">회원탈퇴</A>
        </Link>
      </div>
    </div>
  );
}
