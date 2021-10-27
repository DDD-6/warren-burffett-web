import { AxiosRequestConfig } from 'axios';

import { SignInDtoOut, SignUpDtoIn } from '../common/type/user';

import AxiosApi from './instance';

export class UserApi extends AxiosApi {
  constructor(advancedOptions?: AxiosRequestConfig) {
    super(advancedOptions);
  }

  async signIn(body: { email: string; password: string }) {
    const response = await this.post<SignInDtoOut>('', body);

    return response.data;
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
}
