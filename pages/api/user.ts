import { PlainAPI } from './api.config';

import { SignUpValues } from '@components/SignUp';
import { SignInValues, SocialType } from '@components/SignIn';
import { Email } from '@components/CheckEmail';
import { UpdatePassword } from '@components/NewPassword';

export const signupAPI = (params: SignUpValues) => PlainAPI.post('/api/user', params);
export const loginAPI = (params: SignInValues) => PlainAPI.post('/api/user/login', params);

export const socialLoginAPI = (params: SocialType) => PlainAPI.post('/oauth2/authorization/' + params.socialType);

export const verifyEmailAPI = (params: Email) => PlainAPI.post(`/api/user/password/verify?email=${params.email}`);

export const updatePasswordAPI = (params: UpdatePassword) => PlainAPI.post('/api/user/password', params);
