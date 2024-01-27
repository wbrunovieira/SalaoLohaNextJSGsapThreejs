import Link from 'next/link';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className='mt-10 w-screen h-auto bg-slate-400 text-white p-1 font-sans tracking-wider'>
      <div className='p-2 text-[8px] flex  items-center  border-b-1 justify-between mx-auto container px-10'>
        <p className='border-b-1 pb-2'>
          Desenvolvido pela
          <Link href='https://www.wbdigitalsolutions.com' legacyBehavior>
            <a
              target='_blank'
              rel='noopener noreferrer'
              className='font-bold font-sans '
            >
              {' '}
              WB Digital Solutions
            </a>
          </Link>
        </p>
        <div>
          <p>Todos os direitos reservados &copy; {new Date().getFullYear()}</p>
          <p>Termos de Uso | Política de Privacidade</p>{' '}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
