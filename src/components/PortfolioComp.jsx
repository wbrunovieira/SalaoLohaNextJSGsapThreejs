import Image from 'next/image';
import React, { useEffect } from 'react';
import gsap from 'gsap';

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

    function randomBetween(min, max) {
      return Math.random() * (max - min) + min;
    }

    const positions = [
      { top: '40%', left: '40%' },
      { top: '0%', left: '30%' },
      { top: '0%', left: '60%' },
      { top: '16%', left: '15%' },
      { top: '16%', left: '40%' },
      { top: '16%', left: '90%' },
      { top: '32%', left: '50%' },
      { top: '32%', left: '75%' },
      { top: '48%', left: '0%' },
      { top: '64%', left: '30%' },
      { top: '64%', left: '50%' },
      { top: '64%', left: '90%' },
      { top: '80%', left: '20%' },
      { top: '80%', left: '70%' },
    ];

    const imgs = document.querySelectorAll('.img');

    gsap.set('.img', {
      top: '45%',
      left: '50%',
      transform: 'translate(-50%, -70%) scale(0)',
    });

    gsap.from('p', {
      y: 40,
      ease: 'power4.inOut',
      duration: 1,
      stagger: {
        amount: 0.15,
      },
      delay: 0.5,
    });

    gsap.to('.img', {
      scale: 1,
      width: '300px',
      height: '400px',
      stagger: 0.25,
      duration: 1,
      ease: 'power2.out',
      delay: 1,
      onComplete: scatterAndShrink,
    });

    gsap.to('p', {
      top: '40px',
      ease: 'power4.inOut',
      duration: 1,
      stagger: {
        amount: 0.15,
      },
      delay: 3,
    });

    function scatterAndShrink() {
      imgs.forEach((img, i) => {
        const originalPosition = JSON.parse(
          img.getAttribute('data-original-position')
        );
        const rotation = randomBetween(-10, 10);
        gsap.to(img, {
          top: originalPosition.top,
          left: originalPosition.left,
          transform: `rotate(${rotation}deg)`,
          width: '150px',
          height: '200px',
          ease: 'power2.out',
          duration: 0.75,
        });
      });
    }

    function applyBlurEffect() {
      const elementsToBlur = document.querySelectorAll(
        '.img:not([data-enlarged="true"])'
      );
      gsap.to(elementsToBlur, {
        filter: 'blur(20px)',
        duration: 0.75,
        ease: 'power2.out',
      });
    }

    function removeBlurEffect() {
      const elementsToBlur = document.querySelectorAll(
        '.img:not([data-enlarged="true"])'
      );
      gsap.to(elementsToBlur, {
        filter: 'blur(0px)',
        duration: 1,
        ease: 'power2.out',
      });
    }

    function toggleImageSize(event) {
      const img = event.currentTarget;
      const isEnlarged = img.getAttribute('data-enlarged') === 'true';
      const originalPosition = JSON.parse(
        img.getAttribute('data-original-position')
      );
      const viewportWidth = window.innerWidth;
      const viewportHeight = window.innerHeight;

      if (!isEnlarged) {
        const enlargedWidth = 500;
        const enlargedHeight = 600;
        const centeredLeft = (viewportWidth - enlargedWidth) / 2;
        const centeredTop = (viewportHeight - enlargedHeight) / 2;
        const topCorrection = -40;
        const correctedTop = centeredTop - topCorrection;

        gsap.to(img, {
          zIndex: 1000,
          top: correctedTop + 'px',
          left: centeredLeft + 'px',
          width: enlargedWidth + 'px',
          height: enlargedHeight + 'px',
          ease: 'power4.out',
          duration: 1,
        });
        img.setAttribute('data-enlarged', 'true');
        applyBlurEffect();
      } else {
        setTimeout(() => removeBlurEffect(), 100);

        gsap.to(img, {
          zIndex: 1,
          top: originalPosition.top,
          left: originalPosition.left,
          width: '175px',
          height: '100px',
          ease: 'power4.out',
          duration: 1,
        });
        img.setAttribute('data-enlarged', 'false');
      }
    }

    imgs.forEach((img, i) => {
      img.setAttribute('data-original-position', JSON.stringify(positions[i]));
      img.setAttribute('data-enlarged', 'false');
      img.addEventListener('click', toggleImageSize);
      const rotation = randomBetween(-10, 10);
      gsap.to(img, { rotation: rotation, duration: 0 });
    });
    return () => {
      gsap.to('html', {
        duration: 1,
        backgroundImage: 'none',
        ease: 'power1.in',
      });
    };
  }, []);
  return (
    <>
      <div className='h-full'>
        <main className='max-w-6xl mx-auto px-4 font-sans z-20'>
          <div className='flex mt-4 gap-3 font-sans text-3xl font-semibold'>
            <lord-icon
              src='https://cdn.lordicon.com/bmlkvhui.json'
              className='icon'
              trigger='hover'
              colors='primary:#121331,secondary:#3a3347,tertiary:#e83a30,quaternary:#ebe6ef,quinary:#e83a30,senary:#911710,septenary:#f24c00'
            ></lord-icon>

            <h3 className='text-white'>Galeria de Fotos</h3>
          </div>

          <div className='header'>
            <div className='text-white'>
              <p>conheça</p>
              <div className='text-revealer'></div>
            </div>
            <div className='text-white'>
              <p>um pouco mais o nosso espaço</p>
              <div className='text-revealer'></div>
            </div>
          </div>

          <div className='gallery relative h-screen mt-10 z-20'>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img1.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img2.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img3.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img4.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img5.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img6.jpg'
                alt=''
              />
            </div>
            <div className='img'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img7.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img8.jpg'
                alt=''
              />
            </div>
            <div className='img absolute'>
              <Image
                width={400}
                height={300}
                src='/img/gallery/img9.jpg'
                alt=''
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default PortfolioComp;
