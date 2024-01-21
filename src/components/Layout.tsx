import React, { ReactNode } from 'react';
import Nav from './Nav';
import Whatsapp from './Whatsapp';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Nav />
      <Whatsapp />
      <div className='transitions'></div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
