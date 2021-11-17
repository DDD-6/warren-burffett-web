import { PlainAPI } from './api.config';

import { SignUpValues } from '@components/SignUp';
import { SignInValues, SocialType } from '@components/SignIn';

export const signupAPI = (params: SignUpValues) => PlainAPI.post('/api/user', params);
export const loginAPI = (params: SignInValues) => PlainAPI.post('/api/user/login', params);

export const socialLoginAPI = (params: SocialType) => PlainAPI.post('/oauth2/authorization/' + params.socialType);
