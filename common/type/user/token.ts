export type Token = {
  grantType: 'Bearer';
  accessToken: string;
  refreshToken: string;
  accessTokenExpiresIn: number;
};
