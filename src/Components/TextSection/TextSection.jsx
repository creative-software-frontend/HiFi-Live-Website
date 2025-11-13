import React from 'react';
import Logo1 from '../../assets/1logo.png';

const TextSection = () => {
  return (
    <div className="h-screen py-10 bg-gradient-to-br from-[#39C8C3] via-[#ABE9BA] to-[#187DAA] flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <div className="flex flex-col  items-center justify-between gap-8 md:gap-12">
          {/* Logo Section - Simple image display */}
          <div className="flex-shrink-0">
            <img
              src={Logo1}
              alt="HiFi Logo "
              className="w-32 h-32 md:w-40 md:h-40 object-contain rotate-6"
            />
          </div>

          {/* Text Content */}
          <div className="flex-1 text-center ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 mb-4">
              HiFi - Social, But Fun
            </h1>
            <p className="text-3xl font-bold text-gray-600 mb-8 leading-relaxed">
              Turn chats into adventures! Share moments, laugh together, and
              connect effortlessly – where every conversation comes alive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
