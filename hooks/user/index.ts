import { useMutation, useQuery } from 'react-query';

import { UserApi } from '../../adapter/user';
import { SignInDtoIn, SignUpDtoIn, Token } from '../../common/type/user';
import { removeLocalStorageItem, getLocalStorageItem } from '../../common/utils';

export const loginKey = 'user/login';

const loginService = async (param: SignInDtoIn) => {
  const userService = new UserApi();

  return await userService.signIn(param);
};

export const useLogin = () => useMutation(loginKey, (param: SignInDtoIn) => loginService(param));

export const signUpKey = 'user/signUp';

const signUpService = async (param: SignUpDtoIn) => {
  const userService = new UserApi();

  return await userService.signUp(param);
};

export const useSignUp = () => useMutation(loginKey, (param: SignUpDtoIn) => signUpService(param));

export const findPasswordKey = 'user/find-password';

const findPasswordService = async (email: string) => {
  const userService = new UserApi();

  return await userService.findPassword({ email });
};

export const useFindPassword = () => useMutation(loginKey, (email: string) => findPasswordService(email));

export const logoutKey = 'user/logout';

export const useLogout = () => useMutation(logoutKey, async () => removeLocalStorageItem('token'));

export const resignUserKey = 'user/resign';
const resignUserService = async (userId: number) => {
  const userService = new UserApi();
  const token = getLocalStorageItem<Token>('token');
  if (!token) {
    throw new Error('토큰이 존재하지 않습니다.');
  }

  return await userService.resignUser(userId, { token });
};

export const useResignUser = () =>
  useMutation(resignUserKey, (userId: number) => resignUserService(userId), {
    onSuccess: () => {
      removeLocalStorageItem('token');
    },
  });

const getUserService = async (token: Token) => {
  const userService = new UserApi();
  console.log(userService);
  return userService.userInfo({ token });
};

export const userKey = 'user/user';
export const useUser = () =>
  useQuery('getUserInfo', () => {
    const token = getLocalStorageItem<Token>('token');
    if (!token) {
      throw new Error('토큰이 존재하지 않습니다.');
    }

    return getUserService(token);
  });
