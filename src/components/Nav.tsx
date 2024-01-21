import Image from 'next/image';
import React, { useState, useRef } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Nav: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const router = useRouter();

  const isActive = (pathname: string) => {
    return router.pathname === pathname;
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className='bg-white shadow-lg relative'>
      <div className='max-w-6xl mx-auto px-4'>
        <div className='flex justify-between'>
          <div className='md:hidden flex items-center'>
            <button
              id='menu-button'
              className='outline-none mobile-menu-button z-20'
              onClick={toggleMenu}
            >
              <svg
                className='w-6 h-6 text-gray-500 hover:text-red'
                fill='none'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
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

          <div
            className={`md:flex items-center space-x-1 z-20 menu ${
              isMenuOpen ? 'responsive' : ''
            }`}
          >
            <Link href='/' legacyBehavior>
              <a className='py-4 px-2 text-gray-500 font-sans font-semibold link'>
                Início
              </a>
            </Link>

            <Link href='/servicos' legacyBehavior>
              <a className='py-4 px-2 text-gray-500 font-sans font-semibold link'>
                Serviços
              </a>
            </Link>

            <Link href='/destaque' legacyBehavior>
              <a className='py-4 px-2 text-gray-500 font-sans font-semibold link'>
                Destaque
              </a>
            </Link>

            <Link href='/portfolio' legacyBehavior>
              <a className='py-4 px-2 text-gray-500 font-sans font-semibold link'>
                Portfólio
              </a>
            </Link>
            <Link href='/contato' legacyBehavior>
              <a className='py-4 px-2 text-gray-500 font-sans font-semibold link'>
                Contato
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* <style jsx>{`
        .responsive {
          display: flex;
          flex-direction: column;
          width: 100%;
          position: absolute;
          top: 80px;
          left: 0;
          background-color: #fff;
          box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
        }

        @media screen and (max-width: 768px) {
          .menu {
            display: none;
          }

          .responsive {
            display: block;
          }

          .responsive a {
            display: block;
            text-align: left;
            padding: 10px 20px;
            color: red;
          }
        }
      `}</style> */}
    </nav>
  );
};

export default Nav;
