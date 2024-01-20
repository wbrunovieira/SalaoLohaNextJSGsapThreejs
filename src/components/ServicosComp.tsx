import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

const ServicosComp: React.FC = () => {
  const container = useRef(null);
  const text3Ref = useRef(null);

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/TextPlugin').then((module) => {
        gsap.registerPlugin(module.TextPlugin);
      });
    }

    gsap.to('html', {
      duration: 2,
      backgroundImage: 'url(/svg/pattern-randomized.svg)',
      backgroundSize: 'cover',
      ease: 'power1.in',
      opacity: 1,
    });

    let tl = gsap.timeline();
    if (text3Ref.current) {
      tl.to(text3Ref.current, {
        text: ' Espaço de Beleza e Bem-estar Integral',
        ease: 'power1.in',
        duration: 1,
        delay: 0.5,
      });
    }
    tl.to('#text4', {
      text: 'Realce sua beleza natural com cuidados que vão da cabeça aos pés ',
      ease: 'power1.in',
      duration: 1.5,
    });

    tl.to(container.current, {
      opacity: 1,
      duration: 0.9,
    });

    tl.from('.card', {
      duration: 2,
      opacity: 1,
      y: 200,
      stagger: 1,
      ease: 'power1.in',
      onStart: () => {
        document.querySelectorAll('.card-img').forEach((img) => {
          gsap.set(img, {
            width: '100%',
            height: '15rem',
            objectFit: 'cover',
            opacity: 1,
          });
        });

        const cardWidth = '300px';
        document.querySelectorAll('.card').forEach((card) => {
          gsap.set(card, { width: cardWidth });

          card.addEventListener('mouseenter', () => {
            gsap.to(card, {
              duration: 0.5,
              rotationY: 15,
              rotationX: 15,
              ease: 'back',
            });
          });

          card.addEventListener('mouseleave', () => {
            gsap.to(card, {
              duration: 0.5,
              rotationY: 0,
              rotationX: 0,
              ease: 'back',
            });
          });
        });
      },
    });
  }, []);
  return (
    <>
      <main className='max-w-6xl mx-auto px-4 index-servicos mb-4'>
        <div className='flex flex-col px-4 mx-auto items-center '>
          <h3
            ref={text3Ref}
            className='font-regular custom-font-size mt-5'
          ></h3>

          <div className='flex justify-center items-center mb-6 divide-y-4'>
            <lord-icon
              className='icon'
              src='https://cdn.lordicon.com/bzrhdlij.json'
              trigger='hover'
            ></lord-icon>

            <p className='text-xl font-light' id='text4'></p>

            <lord-icon
              src='https://cdn.lordicon.com/lsghypdq.json'
              className='icon'
              trigger='hover'
              stroke='light'
              colors='primary:#121331,secondary:#e83a30'
            ></lord-icon>
          </div>
        </div>

        <div ref={container} className='cards-container flex opacity-0'>
          {/* Card 1 */}

          <div className='px-2 mb-4 z-20'>
            <div className='card card-tilt bg-white shadow-lg rounded-lg overflow-hidden p-4'>
              <Image
                src='/img/produto1.jpg'
                alt='Imagem 1'
                className='card-img w-full h-56 bg-cover'
                width={230}
                height={230}
              />
              <div className='card-body p-4'>
                <h2 className='card-title text-lg font-semibold'>
                  Cabeleireiro
                </h2>
                <p className='card-text text-gray-600 text-sm'>
                  Ir ao cabeleireiro é um ato de amor próprio. Nada como tirar
                  um tempinho para cuidar da gente.
                </p>
              </div>
            </div>
          </div>

          {/* Card 2 */}
          <div className='w-full md:w-1/3 px-2 mb-4 z-20'>
            <div className='card card-tilt bg-white shadow-lg rounded-lg overflow-hidden p-4'>
              <Image
                src='/img/produto2.jpg'
                alt='Imagem 2'
                className='card-img rounded-lg w-full h-56 bg-cover'
                width={230}
                height={230}
              />
              <div className='card-body p-4'>
                <h2 className='card-title text-lg font-semibold'>Manicure</h2>
                <p className='card-text text-gray-600 text-sm'>
                  Qual é a importância da manicure? Unhas limpas e bem cuidadas
                  são sinônimos de higiene e auto cuidado.
                </p>
              </div>
            </div>
          </div>

          {/* Card 3 */}
          <div className='w-full md:w-1/3 px-2 mb-4 bg-cover z-20'>
            <div className='card card-tilt bg-white shadow-lg rounded-lg overflow-hidden p-4'>
              <Image
                src='/img/produto3.jpg'
                alt='Imagem 3'
                className='card-img w-full h-56 object-cover'
                width={230}
                height={230}
              />
              <div className='card-body p-4'>
                <h2 className='card-title text-lg font-semibold'>
                  O que é terapia capilar
                </h2>
                <p className='card-text text-gray-600 text-sm'>
                  A terapia capilar é uma abordagem holística de cuidado com os
                  cabelos...
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ServicosComp;
