import { useState } from 'react';

import { Outlet, useLocation } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  const location = useLocation();
  //const [isCartModalOpen, setIsCartModalOpen] = useState(false);
  const pathname = location.pathname.split('/');
  const isCheckout = pathname.includes('checkout');
  return (
    <>
      <div id="layout">

        {!isCheckout && (
          <Header/>
        )}
        <main>
          <Outlet />
        </main>
        {!isCheckout && <Footer />}
      </div>
    </>
  );
};

export default Layout;
