import React from 'react';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';
import Logo from '../../assets/logo.png';

const cornerImages = [
  {
    img: 'https://img.freepik.com/free-photo/lovely-girl-face-smartphone-view_1157-3926.jpg?semt=ais_hybrid&w=740&q=80',
    top: '8%',
    left: '3%',
    rotate: '-6deg',
  },
  {
    img: 'https://www.handsomeboymodel.com/wp-content/uploads/2023/07/Handsome_boy_pic_of_Instagram.jpg',
    top: '60%',
    left: '3%',
    rotate: '5deg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99AU4S1Y36Aj0QDxtlIQP4bwQH0R0w5k8zA&s',
    top: '8%',
    right: '3%',
    rotate: '8deg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-UW-ehGLx8RFJywVNjn-wdYIBM1M-av1QQ&s',
    top: '60%',
    right: '3%',
    rotate: '-5deg',
  },
];

const Footer = () => {
  return (
    <div className="relative w-full bg-[#DFF7F4] overflow-hidden flex items-center justify-center rounded-t-[40px] pt-20 pb-24 md:pb-32 min-h-[700px]">
      {/* Orbit Rings */}
      <div className="absolute w-[90vw] max-w-[800px] aspect-square border border-green-400 rounded-full opacity-40"></div>
      <div className="absolute w-[70vw] max-w-[600px] aspect-square border border-green-400 rounded-full opacity-30"></div>
      <div className="absolute w-[50vw] max-w-[400px] aspect-square border border-green-400 rounded-full opacity-20"></div>

      {/* Corner Images (desktop only) */}
      {cornerImages.map((item, index) => (
        <img
          key={index}
          src={item.img}
          className="absolute rounded-xl shadow-lg hidden lg:block"
          style={{
            width: '170px',
            height: '210px',
            objectFit: 'cover',
            top: item.top,
            left: item.left,
            right: item.right,
            transform: `rotate(${item.rotate})`,
          }}
        />
      ))}

      {/* Main Content */}
      <div className="text-center w-full max-w-3xl px-6 z-20">
        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold text-black leading-tight">
          <span className="text-green-600 flex items-center justify-center gap-2">
            Download Now <img className="h-10 md:h-14" src={Logo} alt="" />
          </span>
          to get started.
        </h1>

        {/* Subtitle */}
        <p className="text-lg md:text-2xl mt-3 font-semibold">
          Start using HiFi today!
        </p>

        {/* Download Buttons */}
        <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 w-full">
          {/* Google Play */}
          <a
            href="#"
            className="bg-black text-white px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-gray-800 transition w-full"
          >
            <FaGooglePlay className="w-7 h-7" />
            <div className="text-left leading-tight">
              <p className="text-xs text-gray-300">Download on the</p>
              <p className="text-lg font-semibold">Google Play</p>
            </div>
          </a>

          {/* App Store */}
          <div className="bg-black text-white px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-gray-800 transition w-full">
            <FaAppStore className="w-7 h-7" />
            <div className="text-left leading-tight">
              <p className="text-xs text-gray-300">Download on the</p>
              <p className="text-lg font-semibold">App Store</p>
            </div>
          </div>

          {/* AppGallery */}
          <div className="bg-black text-white px-6 py-4 rounded-xl flex items-center gap-4 hover:bg-gray-800 transition w-full">
            <SiHuawei className="w-7 h-7" />
            <div className="text-left leading-tight">
              <p className="text-xs text-gray-300">EXPLORE IT ON</p>
              <p className="text-lg font-semibold">AppGallery</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <p className="mt-12 text-gray-700">© 2025 HIFI All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
