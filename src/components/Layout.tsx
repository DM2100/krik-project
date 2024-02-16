import React, { ReactNode } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';
import { LowerHeader } from './LowerHeader';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div>
      <Header />
      <LowerHeader />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
