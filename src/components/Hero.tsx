import React from 'react';

const Hero: React.FC = () => {
  return (
    <>
      <div data-barba='wrapper'>
        <a
          href='https://wa.me/+5511942124242'
          className='whatsapp-float'
          target='_blank'
        >
          <div className='whatsapp-message-box d-none d-md-flex '>
            <lord-icon
              src='https://cdn.lordicon.com/kiynvdns.json'
              trigger='hover'
              stroke='light'
              colors='primary:#121331,secondary:#f28ba8,tertiary:#ffc738,quaternary:#30e849,quinary:#ebe6ef'
              className='z-20 icon-zap'
            ></lord-icon>
            <div className='whatsapp-text'>
              <p className=''>Oi !</p>
              <p className=''>Podemos te ajudar? </p>
            </div>
          </div>
          <i className='fab fa-whatsapp whatsapp-icon'></i>
        </a>

        <main
          data-barba='container'
          data-barba-namespace='home'
          className='flex flex-col md:flex-row max-w-6xl mx-auto px-4 altura-ajustada index'
        >
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
                      stroke-width='13'
                    />
                  </svg>
                </div>

                <div id='cursor'></div>

                <div className='ml-9 mt-1 font-semibold button-container'>
                  <button
                    // onClick="window.open('https://wa.me/5511942124242', '_blank')"
                    className='rounded-lg pl-12 botao hover-link cursor-pointer z-20'
                    area-label='Agende Agora'
                    cursor-type='button'
                  >
                    <span area-hidden>
                      <span>
                        Agende<span>Agende</span>{' '}
                      </span>
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
