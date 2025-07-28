import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import BottomNav from '../components/BottomNav';
import logo from '../assets/images/logo.png'; // ✅ Import logo image

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
      
      {/* ✅ Header visible only on md and up */}
      <div className="hidden md:block">
        <Header />
      </div>

      {/* ✅ Mobile-only Logo at top */}
      <div className="md:hidden flex justify-center py-4 shadow-sm">
        <img src={logo} alt="WheelsOnRent Logo" className="h-8" />
      </div>

      <main className="flex-1 px-6 pb-24 pt-24 md:pt-[150px]">
        <Outlet />
      </main>

      {/* ✅ Bottom Nav only on mobile */}
      <div className="md:hidden">
        <BottomNav />
      </div>

      <Footer />
    </div>
  );
};

export default Layout;
