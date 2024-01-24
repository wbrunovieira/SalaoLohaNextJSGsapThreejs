import React from 'react';
import Image from 'next/image';
import gsap from 'gsap';
import { animateTransition } from '../utils/animateTransition';
import 'lightgallery/css/lightgallery.css';
import LightGallery from 'lightgallery/react';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

const PortfolioGrid = () => {
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
  const cards = [
    { src: '/img/gallery/img1.jpg', title: 'Imagem 1' },
    { src: '/img/gallery/img2.jpg', title: 'Imagem 2' },
    { src: '/img/gallery/img3.jpg', title: 'Imagem 3' },
    { src: '/img/gallery/img4.jpg', title: 'Imagem 3' },

    { src: '/img/gallery/img5.jpg', title: 'Imagem 3' },
    { src: '/img/gallery/img6.jpg', title: 'Imagem 3' },
    { src: '/img/gallery/img7.jpg', title: 'Imagem 3' },
    { src: '/img/gallery/img8.jpg', title: 'Imagem 3' },
    { src: '/img/gallery/img9.jpg', title: 'Imagem 3' },
  ];
  const renderImage = (src, idx) => (
    <a key={idx} href={src} data-sub-html={`<h4>Imagem ${idx + 1}</h4>`}>
      <Image width={400} height={300} src={src} alt={`Imagem ${idx + 1}`} />
    </a>
  );

  return (
    <div className='container mx-auto p-4'>
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
        <div className='flex flex-wrap -mx-2'>
          {cards.map((card, idx) => (
            <div key={idx} className='px-2 w-full md:w-1/2 lg:w-1/3 mb-4'>
              <a href={card.src} data-sub-html={`<h4>${card.title}</h4>`}></a>
              <div className='bg-white shadow-lg rounded-lg overflow-hidden'>
                <Image
                  src={card.src}
                  alt={`Imagem ${idx + 1}`}
                  width={400}
                  height={300}
                  layout='responsive'
                />

                <a />
              </div>
            </div>
          ))}
        </div>
      </LightGallery>
    </div>
  );
};

export default PortfolioGrid;
