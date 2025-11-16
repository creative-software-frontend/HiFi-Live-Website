import React from 'react';
import Logo1 from '../../assets/logo.png';

const TextSection = () => {
  return (
    <div className=" bg-gradient-to-br from-[#39C8C3] via-[#ABE9BA] to-[#187DAA] relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-10 w-20 h-20 bg-white/10 rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-20 w-16 h-16 bg-white/15 rounded-full animate-bounce delay-300"></div>
        <div className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-white/5 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 bg-white/20 rounded-full animate-pulse delay-700"></div>
      </div>

      <div className="relative z-10 h-screen flex items-center justify-center p-4">
        <div className="max-w-6xl w-full">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
            {/* Logo Section with Enhanced Styling */}
            <div className="flex-shrink-0 relative">
              <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-white/30 blur-xl rounded-full animate-pulse"></div>

                {/* Logo Container */}
                <div className="relative bg-white/20 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/30 transform hover:scale-105 transition-all duration-500">
                  <img
                    src={Logo1}
                    alt="HiFi Logo"
                    className="w-48 h-48 md:w-56 md:h-56 lg:w-64 lg:h-64 object-contain drop-shadow-2xl"
                  />
                </div>

                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce shadow-lg"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-pink-400 rounded-full animate-bounce delay-200 shadow-lg"></div>
              </div>
            </div>

            {/* Text Content with Enhanced Typography */}
            <div className="flex-1 text-center lg:text-left max-w-2xl">
              {/* Main Heading */}
              <div className="mb-8">
                <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-6 leading-tight">
                  HiFi -
                  <span className="block bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent">
                    Social, But Fun
                  </span>
                </h1>

                {/* Decorative Line */}
                <div className="w-24 h-1 bg-white/50 rounded-full mx-auto lg:mx-0 mb-6"></div>
              </div>

              {/* Description */}
              <div className="relative">
                <p className="text-xl md:text-2xl lg:text-3xl font-semibold text-white/90 leading-relaxed mb-8 drop-shadow-lg">
                  Turn chats into adventures! Share moments, laugh together, and
                  connect effortlessly – where every conversation comes alive.
                </p>

                {/* Highlight Background */}
                <div className="absolute -inset-4 bg-white/10 rounded-2xl blur-lg -z-10 transform scale-105"></div>
              </div>

              {/* Stats */}
              <div className="flex justify-center lg:justify-start gap-8 mt-12">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">10M+</div>
                  <div className="text-white/70 text-sm">Active Users</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">50+</div>
                  <div className="text-white/70 text-sm">Countries</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">99%</div>
                  <div className="text-white/70 text-sm">Satisfaction</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextSection;
