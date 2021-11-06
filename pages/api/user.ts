import { PlainAPI } from './api.config';

import { SignUpValues } from '@components/SignUp';
import { SignInValues } from '@components/SignIn';

// export const signupAPI = (params: SignUpValues) => PlainAPI.post('/api/user', { user: params });
export const signupAPI = (params: SignUpValues) => PlainAPI.post('/api/user', params);
export const loginAPI = (params: SignInValues) => PlainAPI.post('/oauth2/authorization/LOCAL', params);

// /oauth2/authorization/ + socialType
