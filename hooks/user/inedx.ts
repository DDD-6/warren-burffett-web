import { useMutation } from 'react-query';

import { UserApi } from '../../adapter/user';
import { SignInDtoIn, SignUpDtoIn } from '../../common/type/user';

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
