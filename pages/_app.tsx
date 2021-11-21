import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import axios from 'axios';

import { backgroundColor } from '../styles/background-color';
import { brandColor } from '../styles/brand-color';
import { fontSize } from '../styles/font-size';

import { configs } from 'config';
import MainLayout from 'layout/mainlayout';

const { API_PROTOCOL, API_URL } = configs;

axios.defaults.baseURL = `${API_PROTOCOL}://${API_URL}`;
axios.defaults.withCredentials = true;

const queryCLient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <CookiesProvider>
        <QueryClientProvider client={queryCLient}>
          <Global
            styles={css`
              ${brandColor}
            `}
          />
          <Global
            styles={css`
              ${backgroundColor}
            `}
          />
          <Global
            styles={css`
              ${fontSize}
            `}
          />
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
}
export default MyApp;
