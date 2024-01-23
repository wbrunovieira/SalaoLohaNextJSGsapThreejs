import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { animateTransition } from '../utils/animateTransition';
import 'lightgallery/css/lightgallery.css';
import LightGallery from 'lightgallery/react';

import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

const PortfolioComp = () => {
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/TextPlugin').then((module) => {
        gsap.registerPlugin(module.TextPlugin);
      });
    }

    gsap.to('html', {
      duration: 2,
      backgroundImage: 'url(/svg/diamond-sunset.svg)',
      backgroundSize: 'cover',
      ease: 'power1.in',
      opacity: 1,
    });
    animateTransition(true);

    gsap.to('p', {
      top: '40px',
      ease: 'power4.inOut',
      duration: 1,
      stagger: {
        amount: 0.15,
      },
      delay: 3,
    });

    return () => {
      gsap.to('html', {
        duration: 1,
        backgroundImage: 'none',
        ease: 'power1.in',
      });
    };
  }, []);

  const renderImage = (src, idx) => (
    <a key={idx} href={src} data-sub-html={`<h4>Imagem ${idx + 1}</h4>`}>
      <Image width={400} height={300} src={src} alt={`Imagem ${idx + 1}`} />
    </a>
  );
  return (
    <>
      <div className='transitions'></div>
      <div className='h-full'>
        <main className='max-w-6xl mx-auto px-4 font-sans'>
          <LightGallery
            mode='lg-fade'
            speed={600}
            autoplay={true}
            autoplayControls={true}
            pause={5000}
            download={false}
            allowMediaOverlap={true}
            fullScreen
            showThumbnailWithPlayButton={true}
          >
            {[
              '/img/gallery/img1.jpg',
              '/img/gallery/img2.jpg',
              '/img/gallery/img3.jpg',
              '/img/gallery/img4.jpg',
              '/img/gallery/img5.jpg',
              '/img/gallery/img6.jpg',
              '/img/gallery/img7.jpg',
              '/img/gallery/img8.jpg',
              '/img/gallery/img9.jpg',
              <>
                <div className='h-full'>
                  <main className='max-w-6xl mx-auto px-4 font-sans z-20'></main>
                </div>
              </>,
            ].map((src, idx) => renderImage(src, idx))}
          </LightGallery>
        </main>
      </div>
    </>
  );
};

export default PortfolioComp;
