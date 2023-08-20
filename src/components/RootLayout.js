import React from 'react';
import { Outlet } from 'react-router';
import Header from './Header';
import Footer from './Footer';

export const RootLayout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer className="absolute bottom-0 w-full" />
    </div>
  );
};
