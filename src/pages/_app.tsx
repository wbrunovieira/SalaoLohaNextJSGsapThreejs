import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/global.css';
import Layout from '../components/Layout';

import { AppProps } from 'next/app';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();

  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
