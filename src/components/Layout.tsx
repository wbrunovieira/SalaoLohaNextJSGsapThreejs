import React, { ReactNode } from 'react';
// import Nav from './Nav';

type LayoutProps = {
  children: ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      {/* <Nav /> */}

      <div className=' '></div>
      <div className=''></div>
      <main>{children}</main>
    </>
  );
};

export default Layout;
