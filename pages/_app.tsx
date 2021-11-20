import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { css, Global } from '@emotion/react';
import Head from 'next/head';
import axios from 'axios';

import { backgroundColor } from '../styles/background-color';
import { brandColor } from '../styles/brand-color';

import MainLayout from 'Layout/mainlayout';

axios.defaults.baseURL = 'http://3.37.71.132:8080';
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
          <MainLayout>
            <Component {...pageProps} />
          </MainLayout>
        </QueryClientProvider>
      </CookiesProvider>
    </>
  );
}
export default MyApp;
