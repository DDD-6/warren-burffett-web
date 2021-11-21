import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

import { configs } from '../config';

const { API_PROTOCOL, API_URL } = configs;
export default class AxiosAPI {
  constructor(advancedOptions?: AxiosRequestConfig) {
    this.session = axios.create({
      baseURL: `${API_PROTOCOL}://${API_URL}/api`,
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
