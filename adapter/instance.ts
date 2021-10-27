import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { serverProtocol, serverURL } from '../common/constants/index';

export default class AxiosAPI {
  constructor(advancedOptions?: AxiosRequestConfig) {
    this.session = axios.create({
      baseURL: `${serverProtocol}://${serverURL}`,
      withCredentials: true,
      ...advancedOptions,
    });
  }

  async get<T>(route: string, config?: AxiosRequestConfig) {
    return this.session.get<T>(route, config);
  }

  async post<T>(route: string, body?: unknown, config?: AxiosRequestConfig) {
    return this.session.post<T>(route, body, config);
  }

  async put<T>(route: string, body?: unknown, config?: AxiosRequestConfig) {
    return this.session.put<T>(route, body, config);
  }

  async delete<T>(route: string, config?: AxiosRequestConfig) {
    return this.session.delete<T>(route, config);
  }

  private session: AxiosInstance;
}
