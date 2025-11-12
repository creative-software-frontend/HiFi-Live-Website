import React from 'react';
import Logo from '../../assets/logo.png';

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 max-w-6xl mx-auto sticky top-10 rounded-2xl bg-[#c2f5f3] backdrop-blur-md border border-white/30 z-30">
      {/* Left section */}
      <div className="flex items-center space-x-4 sm:space-x-8">
        <span className="text-base sm:text-lg font-semibold text-gray-800 whitespace-nowrap flex items-center justify-center gap-2">
          <img className="h-10 w-10" src={Logo} alt="" />{' '}
          <h2 className="font-bold">HI FI</h2>
        </span>
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
          >
            Business
          </a>
          <a
            href="#contact"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
          >
            Contact Us
          </a>
          <a
            href="#policy"
            className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
          >
            Policy
          </a>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        <a
          href="#account"
          className="hidden sm:block text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base"
        >
          My Account
        </a>
        <a
          href="#download"
          className="bg-[#1d9fd6] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl hover:bg-green-400 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap"
        >
          Download Taka
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
