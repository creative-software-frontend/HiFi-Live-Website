import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Video1 from '../../assets/video1.mp4';
import Video2 from '../../assets/video2.mp4';
import Video3 from '../../assets/video3.mp4';
import Video4 from '../../assets/video4.mp4';
import Video5 from '../../assets/video5.mp4';
import {
  FaMicrophone,
  FaVideo,
  FaGift,
  FaUserFriends,
  FaGamepad,
  FaPlay,
} from 'react-icons/fa';

const videos = [
  {
    title: 'Voice Party',
    video: Video1,
    icon: <FaMicrophone className="text-lg" />,
    description:
      'Join hundreds of rooms for real-time voice chat with friends. Send emojis, gifts, and celebrate together!',
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-500',
    testimonial: {
      text: '"So addictive! Playing with friends and the in-game chat makes it super competitive and fun."',
      author: 'Esra',
      initial: 'E',
    },
  },
  {
    title: 'Live Stream',
    video: Video2,
    icon: <FaVideo className="text-lg" />,
    description:
      'Stream live to your friends or the world. Share your moments, events, or gameplay with ease.',
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-500',
    testimonial: {
      text: '"The streaming quality is amazing! My viewers love the smooth experience."',
      author: 'Alex',
      initial: 'A',
    },
  },
  {
    title: 'Gift Effects',
    video: Video3,
    icon: <FaGift className="text-lg" />,
    description:
      'Send fun gifts and effects during your sessions. Surprise your friends and make moments memorable!',
    color: 'from-pink-500 to-pink-600',
    bgColor: 'bg-pink-500',
    testimonial: {
      text: '"The gift effects are so creative! It makes every interaction special."',
      author: 'Maya',
      initial: 'M',
    },
  },
  {
    title: 'Meet',
    video: Video4,
    icon: <FaUserFriends className="text-lg" />,
    description:
      'Meet and connect with friends or new people. Enjoy group chats and collaborative activities.',
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-500',
    testimonial: {
      text: '"Perfect for hanging out with friends! The video quality is crystal clear."',
      author: 'Sam',
      initial: 'S',
    },
  },
  {
    title: 'Ludo Games',
    video: Video5,
    icon: <FaGamepad className="text-lg" />,
    description:
      'Play classic Ludo with friends or other players online. Fun, competitive, and entertaining!',
    color: 'from-yellow-500 to-yellow-600',
    bgColor: 'bg-yellow-500',
    testimonial: {
      text: '"Ludo games brought back childhood memories! Playing with friends is so much fun."',
      author: 'Ryan',
      initial: 'R',
    },
  },
];

const GameSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const current = videos[currentIndex];

  return (
    <div className="py-20 bg-gradient-to-br from-gray-50 to-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Amazing Features
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-600 max-w-2xl mx-auto"
          >
            Discover all the exciting ways to connect, play, and have fun with
            your friends
          </motion.p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {videos.map((video, index) => (
            <motion.button
              key={video.title}
              onClick={() => setCurrentIndex(index)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex items-center gap-3 px-6 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                currentIndex === index
                  ? `${video.bgColor} text-white shadow-lg scale-105`
                  : 'bg-white text-gray-700 shadow-md hover:shadow-lg'
              }`}
            >
              <span
                className={`${
                  currentIndex === index ? 'text-white' : video.bgColor
                }`}
              >
                {video.icon}
              </span>
              {video.title}
            </motion.button>
          ))}
        </div>

        {/* Content Area */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Video Section */}
          <motion.div
            key={`video-${currentIndex}`}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <video
                className="w-full h-[470px] object-cover"
                src={current.video}
                autoPlay
                muted
                loop
                playsInline
              />
              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60`}
              />

              {/* Play Icon Badge */}
              <div className="absolute top-4 left-4">
                <div
                  className={`flex items-center gap-2 ${current.bgColor} text-white px-4 py-2 rounded-full`}
                >
                  <FaPlay className="text-sm" />
                  <span className="font-semibold">Live Demo</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            key={`content-${currentIndex}`}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Title and Description */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className={`p-3 rounded-2xl ${current.bgColor} text-white`}
                >
                  {current.icon}
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                  {current.title}
                </h3>
              </div>
              <p className="text-lg text-gray-600 leading-relaxed">
                {current.description}
              </p>
            </div>

            {/* Features List */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                'Real-time Chat',
                'HD Quality',
                'Multi-platform',
                'Easy to Use',
              ].map((feature, index) => (
                <motion.div
                  key={feature}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm border border-gray-100"
                >
                  <div className={`w-2 h-2 rounded-full ${current.bgColor}`} />
                  <span className="text-gray-700 font-medium">{feature}</span>
                </motion.div>
              ))}
            </div>

            {/* Testimonial */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-2xl p-6 shadow-lg border-l-4 border-gray-300"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`flex-shrink-0 w-12 h-12 ${current.bgColor} rounded-full flex items-center justify-center text-white font-bold text-lg`}
                >
                  {current.testimonial.initial}
                </div>
                <div>
                  <p className="text-gray-700 italic text-lg leading-relaxed mb-3">
                    {current.testimonial.text}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-800 font-semibold">
                      {current.testimonial.author}
                    </span>
                    <div className="flex text-yellow-400">{'★'.repeat(5)}</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* CTA Button */}
            {/* <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className={`w-full py-4 ${current.bgColor} hover:opacity-90 text-white font-semibold rounded-2xl shadow-lg transition-all duration-300 transform hover:scale-105`}
            >
              Try {current.title} Now
            </motion.button> */}
          </motion.div>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-3 mt-12">
          {videos.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentIndex(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentIndex === index ? current.bgColor : 'bg-gray-300'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default GameSection;
