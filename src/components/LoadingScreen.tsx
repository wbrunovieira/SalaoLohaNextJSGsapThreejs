import React from 'react';
import { gsap } from 'gsap';
import { useIsomorphicLayoutEffect } from '@/helpers/useIsomorphicEffect';
import Image from 'next/image';

const LoadingScreen: React.FC = () => {
  useIsomorphicLayoutEffect(() => {
    const tl = gsap.timeline();
    tl.to(
      '.bar-loading',
      {
        duration: 1,
        '--bar-width': '100%',
        ease: 'bounce.out',
      },
      '-=1'
    );
    tl.to('.logo', {
      duration: 2,
      opacity: 1,
      scale: 1,
      ease: 'bounce.out',
    });

    tl.to('.screen-loading', {
      duration: 2,
      opacity: 1,
      display: 'none',
    });
  }, []);
  return (
    <div className='loading-screen fixed inset-0 bg-gray-100 flex justify-center items-center'>
      <div className='bar-loading z-20 mt-5'></div>
      <section className='screen-loading'>
        <Image
          className='logo mt-5'
          width={400}
          height={300}
          src='svg/logo-salao-loha-agrupado.svg'
          alt='logo'
        />
      </section>
      {/* Adicione mais elementos e estilos conforme necessário */}
    </div>
  );
};

export default LoadingScreen;
