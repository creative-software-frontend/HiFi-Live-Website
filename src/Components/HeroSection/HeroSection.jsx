import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import TitleImage from '../../assets/titleImage.png';
import Phone from '../../assets/phone.png';
import MciIcon from '../../assets/icon_mic.png';
import VideoIcon from '../../assets/icon_video.png';
import GameIcon from '../../assets/icon_game.png';
import { FaGooglePlay, FaAppStore } from 'react-icons/fa';
import { SiHuawei } from 'react-icons/si';

const HeroSection = () => {
  // Scroll tracking
  const { scrollYProgress } = useScroll();

  // Text animation
  const textY = useTransform(scrollYProgress, [0, 0.5], [0, -200]); // move up
  const textOpacity = useTransform(scrollYProgress, [0, 0.3], [1, 0]); // fade out

  // Phone animation
  const phoneY = useTransform(scrollYProgress, [0.3, 1], [300, 0]); // move up into view
  const phoneOpacity = useTransform(scrollYProgress, [0.3, 0.6], [0, 1]); // fade in

  // Floating animation for icons
  const floatTransition = {
    repeat: Infinity,
    repeatType: 'mirror',
    duration: 2.5,
    ease: 'easeInOut',
  };

  return (
    <div className="relative min-h-[200vh] bg-gradient-to-br from-[#39C8C3] via-[#ABE9BA] to-[#187DAA] flex flex-col items-center justify-center overflow-hidden rounded-4xl -mt-20">
      {/* Text Section */}
      <motion.div
        style={{ y: textY, opacity: textOpacity }}
        className="fixed top-[30%] text-center z-20 w-full flex justify-center h-48"
      >
        <div className="flex gap-5 items-end ">
          {/* Left icon (floating) */}
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={floatTransition}
            className="flex items-end -mb-40"
          >
            <img className="h-28" src={MciIcon} alt="" />
          </motion.div>

          {/* Text */}
          <div className="ml-16 -mb-40">
            <h2 className="text-6xl md:text-8xl font-bold text-gray-700">
              Let's Party
            </h2>
            <div className="flex justify-center items-center gap-2">
              <img src={TitleImage} alt="" className="h-10 md:h-20" />
              <h2 className="text-6xl md:text-8xl font-bold text-gray-700">
                Together
              </h2>
            </div>
            <div className="text-xl mt-4">
              <p>
                Chat live with your favorite creators and celebrities on Taka!
              </p>

              {/* App Store Badges */}
              <div className="mt-8">
                <div className="flex flex-col md:flex-row gap-4">
                  {/* Google Play */}
                  <div className="bg-black text-white px-6 py-3 rounded-lg flex items-center gap-3 hover:bg-gray-800 transition-colors cursor-pointer max-w-xs">
                    <FaGooglePlay className="w-8 h-8" />
                    <div>
                      <p className="text-xs text-gray-300">Download on the</p>
                      <p className="text-lg font-semibold">Google Play</p>
                    </div>
                  </div>

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
            </div>
          </div>

          {/* Right icons (floating with delay) */}
          <div className="flex flex-col gap-28 ml-16 -mb-40">
            <motion.img
              className="h-20"
              src={VideoIcon}
              alt=""
              animate={{ y: [0, -25, 0] }}
              transition={{ ...floatTransition, delay: 0.3 }}
            />
            <motion.img
              className="h-20"
              src={GameIcon}
              alt=""
              animate={{ y: [0, -15, 0] }}
              transition={{ ...floatTransition, delay: 0.8 }}
            />
          </div>
        </div>
      </motion.div>

      {/* Phone Image Section with Enhanced Video Background */}
      <motion.div
        style={{
          y: phoneY,
          opacity: phoneOpacity,
        }}
        transition={{ type: 'spring', stiffness: 80, damping: 20 }}
        className="fixed bottom-0 left-1/2 -translate-x-1/2 h-[1000px] w-full z-10 mb-36 rounded-3xl shadow-2xl overflow-hidden flex items-center"
      >
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://cdn.dribbble.com/userupload/25383613/file/large-7573762a9916c35515e07edf77dda214.mp4"
            type="video/mp4"
          />
        </video>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/40 z-10" />

        <img
          src={Phone}
          alt="Phone"
          className="h-[700px] w-auto mx-auto relative z-20 drop-shadow-2xl mt-36"
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
