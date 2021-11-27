import router from 'next/router';
import Image from 'next/image';
import { useQuery } from 'react-query';

import { getLocalStorageItem } from 'common/utils';
import { IconButton } from 'components';
import { Token } from 'common/type/user';

export default function LoginStatus() {
  const { data } = useQuery('login-status', () => getLocalStorageItem<Token>('token'));

  return (
    <>
      {data?.accessToken ? (
        <Image src="/user_login.svg" alt="menu" width={153} height={40} loading="eager" />
      ) : (
        <IconButton style={{ padding: 0 }} onClick={() => router.push('/signin')}>
          <Image src="/login.svg" alt="menu" width={73} height={26} loading="eager" />
        </IconButton>
      )}
    </>
  );
}
