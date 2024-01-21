import { useEffect, useState } from 'react';
import Home from '../components/Home';
import LoadingScreen from '../components/LoadingScreen';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

interface HomeProps {
  isLoaded: boolean;
}
function Index() {
  const [isLoading, setIsLoading] = useState(true);

  useIsomorphicLayoutEffect(() => {
    // Simular um carregamento
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Ajuste o tempo conforme necessário
  }, []);
  return <div>{isLoading ? <LoadingScreen /> : <Home />}</div>;
}

export default Index;
