import { useRouter } from 'next/router';
import { useEffect } from 'react';
import '../styles/global.css';
import Layout from '../components/Layout';
import { animateTransition } from '../utils/animateTransition';

import { AppProps } from 'next/app';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  useIsomorphicLayoutEffect(() => {
    const handleRouteChangeStart = () => {
      animateTransition(true);
    };

    const handleRouteChangeComplete = () => {
      animateTransition(false);
    };

    router.events.on('routeChangeStart', handleRouteChangeStart);
    router.events.on('routeChangeComplete', handleRouteChangeComplete);

    return () => {
      router.events.off('routeChangeStart', handleRouteChangeStart);
      router.events.off('routeChangeComplete', handleRouteChangeComplete);
    };
  }, [router.events]);
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
