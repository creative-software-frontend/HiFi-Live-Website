import React from 'react';
import HeroImage from '../../assets/hero-img.webp';
import TitleImage from '../../assets/titleImage.png';

const HeroSection = () => {
  return (
    <div className="relative min-h-[calc(100vh-30px)] flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#D7FD7E] via-[#DCFF96] to-[#B4F368] -mt-15 mb-4 rounded-4xl">
      <div className="text-center">
        <h2 className="text-8xl font-bold text-gray-700 ">Let’s Party</h2>
        <div className="flex items-center gap-2">
          <span>
            <img src={TitleImage} alt="" />
          </span>
          <h2 className="text-8xl font-bold text-gray-700">Together</h2>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
