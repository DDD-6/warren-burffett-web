import axios from 'axios';

import { configs } from '@config';

const { API_URL, API_PROTOCOL } = configs;

const headerConfig = {
  baseURL: `${API_PROTOCOL}://${API_URL}`,
  headers: {
    'Content-Type': 'application/json',
  },
};

const PlainAPI = axios.create(headerConfig);
const API = axios.create(headerConfig);

export { API, API_URL, PlainAPI };
