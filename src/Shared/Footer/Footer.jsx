import React from 'react';
import { motion } from 'framer-motion';
import Logo from '../../assets/logo.png';
import { SiHuawei } from 'react-icons/si';
import { FaAppStore, FaGooglePlay } from 'react-icons/fa';

const cornerImages = [
  {
    img: 'https://img.freepik.com/free-photo/lovely-girl-face-smartphone-view_1157-3926.jpg?semt=ais_hybrid&w=740&q=80',
    top: '5%',
    left: '2%',
    rotate: '-8deg',
  },
  {
    img: 'https://www.handsomeboymodel.com/wp-content/uploads/2023/07/Handsome_boy_pic_of_Instagram.jpg',
    top: '55%',
    left: '2%',
    rotate: '6deg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ99AU4S1Y36Aj0QDxtlIQP4bwQH0R0w5k8zA&s',
    top: '3%',
    right: '3%',
    rotate: '8deg',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQf-UW-ehGLx8RFJywVNjn-wdYIBM1M-av1QQ&s',
    top: '55%',
    right: '3%',
    rotate: '-6deg',
  },
];

const Footer = () => {
  return (
    <div className="relative w-full min-h-[700px] bg-[#DFF7F4] overflow-hidden flex items-center justify-center rounded-t-[50px]">
      {/* Orbit Rings */}
      <div className="absolute w-[900px] h-[900px] border border-green-400 rounded-full opacity-50"></div>
      <div className="absolute w-[700px] h-[700px] border border-green-400 rounded-full opacity-40"></div>
      <div className="absolute w-[500px] h-[500px] border border-green-400 rounded-full opacity-30"></div>
      <div className="absolute w-[300px] h-[300px] border border-green-400 rounded-full opacity-20"></div>

      {/* Corner Photos */}
      {cornerImages.map((item, index) => (
        <img
          key={index}
          src={item.img}
          className="absolute rounded-2xl shadow-xl"
          style={{
            width: '220px',
            height: '260px',
            objectFit: 'cover',
            top: item.top,
            left: item.left,
            right: item.right,
            transform: `rotate(${item.rotate})`,
          }}
        />
      ))}

      {/* Center Text */}
      <div className="text-center z-20">
        <h1 className="text-4xl md:text-6xl font-bold text-black max-w-4xl mx-auto">
          <span className="text-green-600 flex items-center justify-center gap-3 ">
            Download Now
            <img className="h-14 mt-3" src={Logo} alt="" />
          </span>
          to get started. Download
        </h1>
        <p className="text-3xl mt-4 font-semibold">to get started.</p>

        {/* App Store Badges */}
        <div className="mt-8">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Google Play */}
            <a href="https://drive.google.com/file/d/14lGAOQtCKYsAfyufvi-0FKkYPAcjg0A1/view?usp=sharing">
              <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer max-w-xs">
                <FaGooglePlay className="w-8 h-8" />
                <div>
                  <p className="text-xs text-gray-300">Download on the</p>
                  <p className="text-lg font-semibold">Google Play</p>
                </div>
              </div>
            </a>

            {/* App Store */}
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer max-w-xs">
              <FaAppStore className="w-8 h-8" />
              <div>
                <p className="text-xs text-gray-300">Download on the</p>
                <p className="text-lg font-semibold">App Store</p>
              </div>
            </div>

            {/* AppGallery */}
            <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer max-w-xs">
              <SiHuawei className="w-8 h-8" />
              <div>
                <p className="text-xs text-gray-300">EXPLORE IT ON</p>
                <p className="text-lg font-semibold">AppGallery</p>
              </div>
            </div>
          </div>
        </div>

        <p className="mt-10 text-gray-700">© 2025 Taka All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
