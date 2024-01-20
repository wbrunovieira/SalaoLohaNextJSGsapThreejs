import { useRef, useEffect } from 'react';
import gsap from 'gsap';

import { TextPlugin } from 'gsap/TextPlugin';
import { useIsomorphicLayoutEffect } from '../helpers/useIsomorphicEffect';

const Hero: React.FC = () => {
  const container = useRef();

  useIsomorphicLayoutEffect(() => {
    if (typeof window !== 'undefined') {
      import('gsap/TextPlugin').then((module) => {
        gsap.registerPlugin(module.TextPlugin);
      });
    }

    if (typeof window !== 'undefined') {
      gsap.to('html', {
        duration: 2,
        backgroundColor: '#fff',
        backgroundSize: 'cover',
        ease: 'power1.in',
        opacity: 1,
      });
      var length = 0;

      var path = document.querySelector('#borda-hero') as SVGPathElement;
      if (path) {
        var length = path.getTotalLength();
      }

      path.style.strokeDasharray = length.toString();
      path.style.strokeDashoffset = length.toString();

      gsap.to(path.style, {
        delay: 1,
        strokeDashoffset: 0,
        duration: 2,
        ease: 'back.inOut',
      });

      let tl = gsap.timeline();

      tl.to('.imagem-reveal', {
        clipPath: 'inset(0 0 0 0)',
        duration: 1,
        ease: 'elastic.out(1,0.3)',
      });
      tl.to('#text3', {
        text: ' Espaço de Beleza e Bem-estar Integral',
        ease: 'power1.in',
        duration: 1,
      });
      tl.to('#text5', {
        text: 'Aqui no Salão Loha oferecemos uma experiência acolhedora  com serviços  personalizados de beleza por profissionais qualificados e atualizados com as últimas tendências.',
        ease: 'power4.in',
        duration: 2,
      });
      tl.to('#text4', { text: 'Salão Loha ', ease: 'power1.in', duration: 1 });
      tl.to('#text1', {
        text: 'Atendimento personalizado ',
        ease: 'power1.in',
        duration: 1,
      });
      tl.to('#text2', {
        text: 'Beleza atualizada ',
        ease: 'power1.in',
        duration: 1,
      }).to('#text6', { text: 'Te esperamos', ease: 'power1.in', duration: 2 });

      tl.to('#text6', { text: '', ease: 'reverse', duration: 2 }, '+=2');
      tl.to('.hover-link', { scale: 1.1, ease: 'power1.in', duration: 0.5 });
      tl.to('.hover-link', { scale: 1, ease: 'power1.in', duration: 1 });
      tl.to(
        '#coracao',
        {
          scale: 1.2,
          skewX: 12,
          skewY: 12,
          rotateX: 10,
          rotateY: 10,
          translateZ: 20,
          boxShadow: '10px 10px 20px rgba(0, 0, 0, 0.5)',
          ease: 'power1.in',
          duration: 1,
        },
        '-=1.5'
      ).to('#coracao', {
        scale: 1,
        skewX: 0,
        skewY: 0,
        rotateX: 0,
        rotateY: 0,
        translateZ: 0,
        boxShadow: 'none',
        ease: 'power1.in',
        duration: 1,
      });
    }
  }, []);

  return (
    <>
      <div>
        <main className='flex flex-col md:flex-row max-w-6xl mx-auto px-4 altura-ajustada index'>
          <div className='flex flex-1 flex-col p-4 bg-cor-primaria'>
            <div className=' text-box relative flex flex-col justify-end items-end text-white font-sans'>
              <div className='text-align-left mt-10 overflow-visible'>
                <h2 className='text-xl pl-10 font-semibold text-white mt- opacity-0 '>
                  Atendimento personalizado
                </h2>
                <h2
                  className='text-xl pl-10 font-semibold text-white mt-3'
                  id='text1'
                ></h2>
                <h2
                  className='text-xl pl-10 font-semibold text-white mt-0'
                  id='text2'
                ></h2>
                <h1
                  className='text-7xl pl-10 font-light mt-4 text-nowrap z-10 '
                  id='text4'
                ></h1>
                <h2 className='text-xl pl-10 mt-0 text-white' id='text3'></h2>

                <h6
                  className='text-sm pl-10 mb-4 max-w-md mt-1'
                  id='text5'
                ></h6>

                <h6
                  className='text-sm pl-10 mb-4 max-w-md mt-1 opacity-0'
                  id=''
                ></h6>
                <h2
                  className='text-sm pl-10 mt-0 font-semibold text-cor-primaria max-w-xs bg-cor-fundo'
                  id='text6'
                ></h2>

                <div className='absolute top-0 left-0 z-0'>
                  <svg
                    width='450'
                    height='400'
                    viewBox='0 0 569 816'
                    fill='none'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      id='borda-hero'
                      d='M562 76.1293V7H7V809H561V739.871'
                      stroke='white'
                      strokeWidth='13'
                    />
                  </svg>
                </div>

                <div id='cursor'></div>

                <div className='ml-9 mt-1 font-semibold button-container'>
                  <button
                    onClick={() =>
                      window.open('https://wa.me/5511942124242', '_blank')
                    }
                    className='rounded-lg pl-12 botao hover-link cursor-pointer z-20 bg-cor-fundo text-cor-primaria-light'
                    area-label='Agende  Agora'
                    cursor-type='button'
                  >
                    <span aria-hidden='true'>
                      <span>
                        Agende<span>Agende</span>{' '}
                      </span>
                      &nbsp;
                      <span>
                        agora<span>agora</span>{' '}
                      </span>
                    </span>
                  </button>
                </div>

                <div className='mt-4 z-10 coracao-box'>
                  <lord-icon
                    src='https://cdn.lordicon.com/igciyimj.json'
                    trigger='morph'
                    state='morph-glitter'
                    id='coracao'
                    className='z-20 icon-coracao'
                  ></lord-icon>
                </div>
              </div>
            </div>
          </div>

          <div className='coluna-imagem imagem-reveal md:flex-1 p4'></div>
        </main>
      </div>
    </>
  );
};

export default Hero;
