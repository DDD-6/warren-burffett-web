import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import { css, Global } from '@emotion/react';

import { backgroundColor } from '../styles/background-color';
import { brandColor } from '../styles/brand-color';

import MainLayout from 'Layout/mainlayout';

const queryCLient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
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
  );
}
export default MyApp;
