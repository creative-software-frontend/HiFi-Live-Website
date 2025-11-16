import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const navItems = [
  { label: 'Business', path: '/business' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Policy', path: '/policy' },
];

const rightItems = [
  { label: 'My Account', path: '/account', hideOnMobile: true },
];

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-4 py-3 sm:px-6 sm:py-4 max-w-6xl mx-auto sticky top-10 rounded-2xl bg-[#c2f5f3] backdrop-blur-md border border-white/30 z-30">
      {/* Left section */}
      <div className="flex items-center space-x-4 sm:space-x-8">
        <Link to={'/'}>
          <span className="text-base sm:text-lg font-semibold text-gray-800 whitespace-nowrap flex items-center justify-center gap-2">
            <img className="h-10 w-10" src={Logo} alt="" />
            <h2 className="font-bold">HI FI</h2>
          </span>
        </Link>

        {/* Navigation menu */}
        <div className="hidden sm:flex items-center space-x-4 sm:space-x-6">
          {navItems.map((item, index) => (
            <Link
              key={index}
              to={item.path}
              className="text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base font-semibold"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-4 sm:space-x-6">
        {rightItems.map((item, index) => (
          <Link
            key={index}
            to={item.path}
            className={`${
              item.hideOnMobile ? 'hidden sm:block' : ''
            } text-gray-600 hover:text-gray-900 transition-colors duration-200 text-sm sm:text-base font-semibold`}
          >
            {item.label}
          </Link>
        ))}

        {/* Download button */}
        <a
          href="https://drive.google.com/file/d/14lGAOQtCKYsAfyufvi-0FKkYPAcjg0A1/view?usp=sharing"
          className="bg-[#1d9fd6] text-white px-3 py-1.5 sm:px-4 sm:py-2 rounded-xl hover:bg-green-400 transition-colors duration-200 text-sm sm:text-base whitespace-nowrap font-semibold"
        >
          Download HiFi Live
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
