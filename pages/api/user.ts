import { PlainAPI } from './api.config';

import { SignUpValues } from '@components/SignUp';

export const signupAPI = (params: SignUpValues) => PlainAPI.post('/signup', { user: params });
