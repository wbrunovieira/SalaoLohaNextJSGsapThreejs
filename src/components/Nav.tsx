import Image from 'next/image';
import React from 'react';

import Link from 'next/link';
import { useRouter } from 'next/router';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';

const Nav: React.FC = () => {
  const router = useRouter();

  const isActive = (pathname: string) => {
    console.log('Rota Atual:', router.pathname, 'Rota Verificada:', pathname);
    return router.pathname === pathname;
  };

  const homeLinkRef = useRef<HTMLAnchorElement>(null);
  const servicosLinkRef = useRef<HTMLAnchorElement>(null);
  const contatoLinkRef = useRef<HTMLAnchorElement>(null);
  const destaqueLinkRef = useRef<HTMLAnchorElement>(null);
  const portfolioLinkRef = useRef<HTMLAnchorElement>(null);

  const { contextSafe } = useGSAP({});

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
              <Link href='/' legacyBehavior>
                <a className='flex items-center py-4 px-2'>
                  <Image
                    src='/svg/logo-salao-loha-agrupado-nav.svg'
                    alt='Logotipo Salão Loha'
                    className=' mr-2'
                    width={100}
                    height={50}
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
              </Link>
            </div>
          </div>

          <div className='hidden md:flex items-center space-x-1 z-20 menu'>
            <Link href='/' legacyBehavior>
              <a
                ref={homeLinkRef}
                className={`py-4 px-2 text-gray-500 font-sans font-semibold link ${
                  isActive('/')
                    ? 'border-b-2 border-cor-primaria-light'
                    : 'border-b-2 border-transparent'
                }`}
              >
                Início
              </a>
            </Link>

            <Link href='/servicos' legacyBehavior>
              <a
                ref={servicosLinkRef}
                className={`py-4 px-2 text-gray-500 font-sans font-semibold link ${
                  isActive('/servicos')
                    ? 'border-b-2 border-cor-primaria-light'
                    : 'border-b-2 border-transparent'
                }`}
              >
                Serviços
              </a>
            </Link>

            <Link href='/destaque' legacyBehavior>
              <a
                ref={destaqueLinkRef}
                className={`py-4 px-2 text-gray-500 font-sans font-semibold link ${
                  isActive('/destaque')
                    ? 'border-b-2 border-cor-primaria-light'
                    : 'border-b-2 border-transparent'
                }`}
              >
                Destaque
              </a>
            </Link>

            <Link href='/portfolio' legacyBehavior>
              <a
                ref={portfolioLinkRef}
                className={`py-4 px-2 text-gray-500 font-sans font-semibold link ${
                  isActive('/portfolio')
                    ? 'border-b-2 border-cor-primaria-light'
                    : 'border-b-2 border-transparent'
                }`}
              >
                Portfólio
              </a>
            </Link>
            <Link href='/contato' legacyBehavior>
              <a
                ref={contatoLinkRef}
                className={`py-4 px-2 text-gray-500 font-sans font-semibold link ${
                  isActive('/contato')
                    ? 'border-b-2 border-cor-primaria-light'
                    : 'border-b-2 border-transparent'
                }`}
              >
                Contato
              </a>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
