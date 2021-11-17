import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import { CookiesProvider } from 'react-cookie';
import axios from 'axios';

axios.defaults.baseURL = 'http://3.37.71.132:8080';
axios.defaults.withCredentials = true;

const queryCLient = new QueryClient();

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <CookiesProvider>
      <QueryClientProvider client={queryCLient}>
        <Component {...pageProps} />
      </QueryClientProvider>
    </CookiesProvider>
  );
}
export default MyApp;
