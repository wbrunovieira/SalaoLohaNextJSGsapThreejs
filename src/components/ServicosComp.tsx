import Image from 'next/image';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';
import { animateTransition } from '../utils/animateTransition';
import useBackgroundStore from '@/utils/useBackgroundStore';

const ServicosComp: React.FC = () => {
  const setBackground = useBackgroundStore((state) => state.setBackground);

  const container = useRef(null);
  const text3Ref = useRef(null);

  const cardData = [
    {
      title: 'Cabeleireiro',
      description:
        'Ir ao cabeleireiro é um ato de amor próprio. Nada como tirar um tempinho para cuidar da gente.',
      image: '/img/produto1.jpg',
      alt: 'Imagem 1',
    },
    {
      title: 'Manicure',
      description:
        'Qual é a importância da manicure? Unhas limpas e bem cuidadas são sinônimos de higiene e auto cuidado.',
      image: '/img/produto2.jpg',
      alt: 'Imagem 2',
    },
    {
      title: 'Terapia Capilar',
      description:
        'A terapia capilar é uma abordagem holística de cuidado com os cabelos.',
      image: '/img/produto3.jpg',
      alt: 'Imagem 3',
    },
    {
      title: 'Depilação',
      description:
        'Além de promover uma pele mais lisa e suave, essa prática realça a beleza e contribui para uma sensação de frescor e conforto.',
      image: '/img/produto4.jpg',
      alt: 'Imagem 4',
    },
  ];

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/TextPlugin').then((module) => {
        gsap.registerPlugin(module.TextPlugin);
      });
    }
    animateTransition(true);
    gsap.to('html', {
      duration: 2,
      delay: 1,
      backgroundImage: 'url(/svg/pattern-randomized.svg)',

      ease: 'power1.in',
      opacity: 0.9,
    });
    setBackground('url(/svg/pattern-randomized.svg)');
    let tl = gsap.timeline();

    tl.to(container.current, {
      opacity: 1,
      duration: 0.9,
    });
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

    tl.from('.card', {
      duration: 1,
      opacity: 1,
      y: 600,

      stagger: 0.2,
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
    return () => setBackground('url(/svg/abstract-timekeeper.svg)');
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

        <div className='cards-container flex'>
          {cardData.map((card, index) => (
            <div
              key={index}
              className='px-8 mb-4 card card-tilt bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72'
            >
              {/* <div className='card card-tilt bg-white shadow-lg rounded-lg overflow-hidden p-4 w-72'> */}
              <Image
                src={card.image}
                alt={card.alt}
                className='card-img w-full h-56'
                width={230}
                height={230}
              />
              <div className='card-body p-4'>
                <h2 className='card-title text-lg font-semibold'>
                  {card.title}
                </h2>
                <p className='card-text text-gray-600 text-sm'>
                  {card.description}
                </p>
              </div>
              {/* </div> */}
            </div>
          ))}
        </div>
      </main>
    </>
  );
};

export default ServicosComp;
