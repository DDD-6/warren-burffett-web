import { useEffect, useState } from 'react';
import router from 'next/router';
import Image from 'next/image';

import { getLocalStorageItem } from 'common/utils';
import { IconButton } from 'components';

export default function LoginStatus() {
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    if (getLocalStorageItem('token')) {
      setIsLogin(true);
    }
  }, []);

  return (
    <>
      {isLogin ? (
        <Image src="/user_login.svg" alt="menu" width={153} height={40} loading="eager" />
      ) : (
        <IconButton style={{ padding: 0 }} onClick={() => router.push('/signin')}>
          <Image src="/login.svg" alt="menu" width={73} height={26} loading="eager" />
        </IconButton>
      )}
    </>
  );
}
