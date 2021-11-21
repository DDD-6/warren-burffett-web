import { AxiosRequestConfig } from 'axios';

import { SignInDtoOut, SignUpDtoIn, Token } from '../common/type/user';
import { User } from '../entities';

import AxiosApi from './instance';

export class UserApi extends AxiosApi {
  constructor(advancedOptions?: AxiosRequestConfig) {
    super(advancedOptions);
  }

  async signIn(body: { email: string; password?: string }) {
    const response = await this.post<SignInDtoOut>('', body);

    return response.data;
  }

  async userInfo({ token }: { token: Token }): Promise<User> {
    const response = await this.get('user/me', {
      headers: {
        Authorization: `${token.grantType} ${token.accessToken}`,
      },
    });

    const { id, user_name, email, image, oauthtype } = response.data as any;
    return {
      email,
      id,
      name: user_name,
      image,
      oauthType: oauthtype,
    };
  }

  async signUp(body: SignUpDtoIn) {
    const response = await this.post<any>('', body);

    return response.data;
  }

  // response type 정해지면 제네릭 타입설정 필요
  async oauth({ socialType }: { socialType: 'naver' | 'kakao' | 'google' }) {
    const response = await this.post(`/oauth2/authorization/${socialType}`);

    return response.data;
  }

  async renewalToken({ refreshToken }: { refreshToken: string }) {
    const response = await this.post('', refreshToken);

    return response.data;
  }

  async findPassword({ email }: { email: string }) {
    const response = await this.post('', email);

    return response.data;
  }

  async resignUser(userId: number) {
    const response = await this.delete(`/user/${userId}`);

    return response.data;
  }
}
