import { useEffect, useState } from 'react';
import Home from '../components/Home';
import LoadingScreen from '../components/LoadingScreen';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useIsomorphicLayoutEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);
  return <div>{isLoading ? <LoadingScreen /> : <Home />}</div>;
}

export default Index;
