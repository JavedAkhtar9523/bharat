import React, { ReactNode } from 'react';
import Header from './Header';
import Navbar from './Navbar';
import BreakingNews from './BreakingNews';
import Footer from './Footer';
import QuickCategories from './QuickCategories';

interface LayoutProps {
  children: ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <Navbar />
      <BreakingNews />
      <QuickCategories />
      <main className="flex-grow bg-gray-50">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;