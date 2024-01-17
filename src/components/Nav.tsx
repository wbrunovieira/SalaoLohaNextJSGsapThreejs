import React from 'react';

const Nav: React.FC = () => {
  return (
    <nav className='bg-white shadow-lg relative '>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='md:hidden flex items-center'>
            <button
              id='menu-button'
              className='outline-none mobile-menu-button z-20'
            >
              <svg
                className='w-6 h-6 text-gray-500 hover:text-green-500'
                x-show='!showMenu'
                fill='none'
                stroke-linecap='round'
                stroke-linejoin='round'
                stroke-width='2'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path d='M4 6h16M4 12h16M4 18h16'></path>
              </svg>
            </button>
          </div>

          <div className='flex space-x-7'>
            <div>
              <a href='#' className='flex items-center py-4 px-2'>
                <img
                  src='svg/logo-salao-loha-agrupado-nav.svg'
                  alt='Logotipo Salão Loha'
                  className=' mr-2'
                />
                <div className='flex flex-col'>
                  <span className='font-semibold text-gray-600 font-sans text-lg/4'>
                    Salão Loha
                  </span>
                  <span className='font-semibold text-gray-500 font-sans text-sm'>
                    Estética e Beleza
                  </span>
                </div>
              </a>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-1 z-20 menu'>
            <a
              href='/index.html'
              data-barba='link'
              className='py-4 px-2 text-gray-500 font-sans font-semibold border-b-2  duration-100 ease-in-out hover:border-cor-primaria-light hover:transform hover:scale-105'
            >
              Início
            </a>
            <a
              href='/src/pages/servicos.html'
              data-barba='link'
              className='py-4 px-2 text-gray-500 font-sans font-semibold border-b-2 border-transparent hover:border-cor-primaria-light hover:transform scale-110 duration-1000 ease-in-out'
            >
              Serviços
            </a>
            <a
              href='/src/pages/destaque.html'
              data-barba='link'
              className='py-4 px-2 text-gray-500 font-sans font-semibold border-b-2 border-transparent hover:border-cor-primaria-light hover:transform hover:scale-105 duration-1000 ease-in-out'
            >
              Destaque
            </a>
            <a
              href='/src/pages/portfolio.html'
              data-barba='link'
              className='py-4 px-2 text-gray-500 font-sans font-semibold border-b-2 border-transparent hover:border-cor-primaria-light hover:transform hover:scale-105 duration-1000 ease-in-out'
            >
              Portfólio
            </a>
            <a
              href='/src/pages/contato.html'
              data-barba='link'
              className='py-4 px-2 text-gray-500 font-sans font-semibold border-b-2 border-transparent hover:border-cor-primaria-light hover:transform hover:scale-105 duration-1000 ease-in-out'
            >
              Contato
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
