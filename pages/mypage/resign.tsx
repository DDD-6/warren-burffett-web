import { useRouter } from 'next/router';

import { P5, Button } from 'components';
import { useResignUser, useUser } from 'hooks/user';

export default function Resign() {
  const router = useRouter();
  const { data } = useUser();
  const { mutate } = useResignUser();

  return (
    <div style={{ maxWidth: 1024, margin: '0 auto', marginTop: '26vh', textAlign: 'center' }}>
      <div style={{ textAlign: 'center' }}>
        <P5>WESAVE</P5>
        <P5>회원탈퇴 하시겠습니까?</P5>
      </div>
      <div
        style={{ marginTop: '10.7606vh', width: '67.3rem', display: 'inline-flex', justifyContent: 'space-between' }}
      >
        <Button
          onClick={() => router.push('/mypage')}
          style={{ width: '26.4rem', height: '7.4rem' }}
          className="bg-primary-blue font-color-0"
          label="최소"
        />
        <Button
          onClick={() => mutate(data?.id!)}
          style={{ width: '26.4rem', height: '7.4rem' }}
          className="bg-40 font-color-0"
          label="탈퇴"
        />
      </div>
    </div>
  );
}
