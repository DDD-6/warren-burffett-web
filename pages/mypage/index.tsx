import Link from 'next/link';
import styled from '@emotion/styled';

import { P4, P7, HorizonDivider } from 'components';
import { useLayout } from 'hooks/layout';
import { useUser } from 'hooks/user';
import { removeLocalStorageItem } from 'common/utils';

const A = styled.a`
  padding: 14.5px 0;
  :nth-child(1) {
    padding-top: 29px;
  }
`;

export default function MyPage() {
  const { width } = useLayout();
  const { data } = useUser();
  // console.log('data', data);

  return (
    <div style={{ maxWidth: '120.4rem', margin: '0 auto', marginTop: '15.8vh' }}>
      <div style={{ border: 0 }}>
        <P4 style={{ padding: '3.9rem 0' }}>{data?.name}님</P4>
      </div>
      <HorizonDivider top={width > 768 ? 29 : 16} bottom={23} />
      <div style={{ marginLeft: 'auto', maxWidth: '87.6rem', borderBottom: '1.5px solid #e4e4e4' }}>
        <div>
          <b className="font-color-100 body2">{data?.email}</b>
        </div>
        <div style={{ margin: '29px 0' }}>
          <P7 className="font-color-60">이름:{data?.name}</P7>
        </div>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'end' }}>
        <Link passHref href="/salary">
          <A className="primary-blue body2">내 소득변경</A>
        </Link>
        <Link passHref href="/">
          <A
            onClick={() => {
              removeLocalStorageItem('token');
            }}
            className="primary-blue body2"
          >
            로그아웃
          </A>
        </Link>
        <Link passHref href="mypage/resign">
          <A className="primary-blue body2">회원탈퇴</A>
        </Link>
      </div>
    </div>
  );
}
