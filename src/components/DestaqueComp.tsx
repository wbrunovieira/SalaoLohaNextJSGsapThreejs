import Image from 'next/image';
import React, { useState } from 'react';
import gsap from 'gsap';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

const DestaqueComp: React.FC = () => {
  const [specialBg, setSpecialBg] = useState(false);
  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/TextPlugin').then((module) => {
        gsap.registerPlugin(module.TextPlugin);
      });
    }

    gsap.to('html', {
      duration: 2,
      backgroundColor: 'white',
      backgroundSize: 'cover',
      ease: 'power1.in',
      opacity: 1,
    });

    gsap.to('.destaque', { duration: 0.5, opacity: 0.5 });
    gsap.to('.destaque', { duration: 0.5, opacity: 1 });
    setSpecialBg(!specialBg);

    let tl = gsap.timeline();
    tl.to('#text1', { text: ' Saúde é tudo', ease: 'power1.in', duration: 1 });
    tl.to('#text1', { text: ' ', ease: 'power1.in', delay: 1, duration: 1 });
  }, []);
  return (
    <>
      <main className='bg-special'>
        <main className='flex max-w-6xl mx-auto px-4 index-destaque destaque mb-10 font-sans w-full'>
          <div className='flex mb-6 flex-col sm:flex-row pr-4 bg-cor-primaria'>
            <div className='flex-1 justify-center items-center p-4'>
              <Image
                width={540}
                height={360}
                src='/img/about.jpg'
                alt='sala de esterilização'
                className='rounded-sm'
              />
              <p
                id='text1'
                className='mt-4 font-semibold text-sm text-cor-fundo font-sans'
              ></p>
            </div>

            <div className='flex-1 text-box'>
              <div className='flex justify-center items-center mb-6 mt-4'>
                <h3 className='text-destaque text-4xl font-semibold text-cor-fundo'>
                  O Poder da Esterilização
                </h3>
                <lord-icon
                  src='https://cdn.lordicon.com/dnfmiyuo.json'
                  trigger='hover'
                  stroke='light'
                  className='iconm z-20'
                  colors='primary:#121331,secondary:#f4a09c,tertiary:#ebe6ef,quaternary:#92140c'
                ></lord-icon>
              </div>
              <div className='flex justify-center items-center mb-6'>
                <span className='text-cor-primaria bg-cor-fundo p-2'>
                  Eliminando Microorganismos para um Ambiente Seguro
                </span>
              </div>
              <p className='text-cor-fundo p-4'>
                A esterilização é um método essencial que tem como objetivo
                eliminar todas as formas de vida microbiana, incluindo vírus,
                bactérias, fungos e outros organismos, que podem contaminar
                instrumentos, materiais e objetos. <br />
                <br /> Esse processo é fundamental, especialmente em ambientes
                médicos e laboratoriais, para garantir a segurança e higiene.
                Utilizando uma autoclave, um equipamento especializado, a
                esterilização é realizada de forma eficaz, assegurando que os
                materiais sejam seguros para uso sem riscos de contaminação.
              </p>
            </div>
          </div>
        </main>
      </main>
    </>
  );
};

export default DestaqueComp;
