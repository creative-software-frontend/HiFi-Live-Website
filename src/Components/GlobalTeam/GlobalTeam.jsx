import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

import Icon_Future from '../../assets/icon_feature.png';
import FutureImage from '../../assets/featureInfo1.png';
import FutureImage1 from '../../assets/featureInfo2.png';

const GlobalTeam = () => {
  // detect when the second card reaches viewport (trigger the overlay)
  const [refSecond, inViewSecond] = useInView({
    threshold: 0.25, // যখন 25% দেখা যাবে তখন ট্রিগার হবে — প্রয়োজনমতো পরিবর্তন করো
    triggerOnce: false,
  });

  // detect when whole section is in view (optional)
  const [refSection] = useInView({ threshold: 0 });

  return (
    <div ref={refSection} className="max-w-7xl mx-auto py-20 px-4 space-y-20">
      {/* Header */}
      <div className="text-center mb-8">
        <span className="bg-green-200 px-4 py-2 rounded-xl text-green-500 font-medium">
          FEATURE
        </span>
        <h2 className="text-4xl md:text-6xl font-semibold text-center mt-4">
          Join HiFi Global Team - <br />
          <span className="flex justify-center gap-4 items-center pt-4">
            <img
              className="h-12 md:h-14"
              src={Icon_Future}
              alt="Feature Icon"
            />
            Let's Build Something Big
          </span>
        </h2>
      </div>

      {/* SECTION with sticky-first and second overlay */}
      <div className="relative">
        {/* Space above so scrolling feels natural */}
        <div className="h-8" />

        {/* ===== First Card (sticky) =====
            - sticky top so it stays visible until second card covers it */}
        <motion.div
          className="bg-gray-50 rounded-2xl shadow-lg p-8"
          style={{ position: 'sticky', top: '5rem', zIndex: 20 }} // top adjust করলে overlay height পরিবর্তন হবে
          animate={{
            // যখন second card view এ এলে first কার্ড ধীরে মিশবে (opacity 0 ও scale)
            opacity: inViewSecond ? 0 : 1,
            scale: inViewSecond ? 0.98 : 1,
            transformOrigin: 'center top',
          }}
          transition={{ duration: 0.45 }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Grow Together with HiFi's Referral Program!
              </h3>

              <p className="text-lg text-gray-600 mb-6 font-medium">
                Big earnings await! Join HiFi - become agency or host.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  <span className="text-gray-700">
                    Earn From Every Follower
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded bg-green-500"></div>
                  <span className="text-gray-700">
                    Global Reach: 190+ Countries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  <span className="text-gray-700">Fast & Direct Growth</span>
                </div>
              </div>

              <button className="text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors">
                View Plan →
              </button>
            </div>

            <div className="flex-1">
              <img
                src={FutureImage}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </motion.div>

        {/* Tall spacer so page scrolls and second card can come up */}
        <div className="h-40" />

        {/* ===== Second Card (normal flow) =====
            - when 'inViewSecond' true, animate it upward to overlay (negative translateY)
            - give it a higher z-index so it sits on top */}
        <motion.div
          ref={refSecond}
          className="bg-gray-50 rounded-2xl shadow-lg p-8"
          style={{ zIndex: 30 }}
          animate={
            inViewSecond
              ? {
                  y: '-6.5rem', // নিচ থেকে উপরে উঠবে — adjust this value to perfectly cover the sticky card
                  boxShadow: '0 30px 60px rgba(2,6,23,0.25)',
                }
              : { y: 0 }
          }
          transition={{ duration: 0.55, ease: 'easeOut' }}
        >
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src={FutureImage1}
                className="w-full h-auto rounded-2xl shadow-lg"
              />
            </div>

            <div className="flex-1">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
                Have questions or need assistance?
              </h3>

              <p className="text-lg text-gray-600 mb-6 font-medium">
                Our team is ready to help you tackle all challenges!
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  <span className="text-gray-700">
                    Earn From Every Follower
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-green-500 rounded bg-green-500"></div>
                  <span className="text-gray-700">
                    Global Reach: 190+ Countries
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 border-2 border-gray-300 rounded"></div>
                  <span className="text-gray-700">Fast & Direct Growth</span>
                </div>
              </div>

              <button className="text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors">
                View Plan →
              </button>
            </div>
          </div>
        </motion.div>

        {/* extra space below so user can continue scrolling */}
        <div className="h-96" />
      </div>
    </div>
  );
};

export default GlobalTeam;
