/* eslint-disable no-unused-vars */
import { Cookies } from 'react-cookie';

const cookies = new Cookies();

type CookieSetOptions = {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | 'none' | 'lax' | 'strict';
  encode?: (value: string) => string;
};

export const setAccessToken = (accessToken: string, options?: CookieSetOptions) => {
  return cookies.set('accessToken', accessToken, options);
};

export const getAccessToken = () => {
  return cookies.get('accessToken');
};

export const setRefreshToken = (refreshToken: string, options?: CookieSetOptions) => {
  return cookies.set('refreshToken', refreshToken, options);
};

export const getRefreshToken = () => {
  return cookies.get('refreshToken');
};
