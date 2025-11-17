import React from 'react';
import BackgroundImage from '../../assets/business_header_image2.png';
import businessInfo1 from '../../assets/businessInfo1.png';
import businessInfo2 from '../../assets/businessInfo2.png';

const Business = () => {
  const features = [
    {
      icon: '💰',
      title: 'Easy Income',
      description:
        'Just play HIFI and you can get income. Whether you invite friends or chat on the mic, you can gain friendship and income.',
      gradient: 'from-green-400 to-blue-500',
    },
    {
      icon: '🌎',
      title: 'Global Reach',
      description:
        'Access to more than 190+ countries. Meet friends from thousands of miles away and in foreign countries here.',
      gradient: 'from-purple-400 to-pink-500',
    },
    {
      icon: '🚀',
      title: 'Fast & Direct Growth',
      description:
        'Join HIFI now and you can enjoy the dividends of rapid growth; missing out will be a huge loss for you.',
      gradient: 'from-orange-400 to-red-500',
    },
  ];
  return (
    <section className="bg-gradient-to-b from-green-200 to-white -mt-20 md:pt-72">
      {/* <div className="relative h-[60vh] w-full bg-cover bg-center flex items-center justify-center px-4 md:px-6 rounded-2xl mx-auto">
      
      </div> */}

      <section className="max-w-7xl mx-auto md:-mt-50 md:py-20">
        <div className=" pt-32 pb-20 md:pb-32 md:pt-4 text-center">
          <span className="text-base md:text-lg font-normal bg-green-300 py-1 px-3 md:px-4 rounded-xl">
            Business
          </span>
          <h2 className="text-2xl md:text-4xl lg:text-5xl font-bold text-black drop-shadow-lg text-center">
            <br />
            Grow Together with HIFI’s Referral Program!
          </h2>
        </div>
        {/* card one */}
        <div className="bg-[#F4F6F8] rounded-2xl shadow-lg p-8">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src={businessInfo1}
                className="h-80 md:h-96 w-full  rounded-2xl shadow-lg"
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
        </div>
        {/* card two */}
        <div className="bg-[#F4F6F8] rounded-2xl shadow-lg p-8 mt-3">
          <div className="flex flex-col lg:flex-row gap-8 items-center">
            <div className="flex-1">
              <img
                src={businessInfo2}
                className="h-96 w-full  rounded-2xl shadow-lg"
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
        </div>

        {/* card section */}
        <div className="py-16 ">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Section Header */}
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
                Why Choose HIFI?
              </h2>
              <p className="text-xl text-gray-800  max-w-3xl mx-auto">
                Discover the amazing features that make HIFI the perfect
                platform for socializing and earning
              </p>
            </div>

            {/* Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="relative group">
                  {/* Animated Background Orbit */}
                  <div className="absolute -inset-4 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl blur-lg group-hover:blur-xl">
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${feature.gradient} rounded-3xl animate-pulse`}
                    ></div>
                  </div>

                  {/* Main Card */}
                  <div className="relative bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-xl border border-gray-100 dark:border-gray-700 group-hover:scale-105 transition-all duration-300 h-full">
                    {/* Icon Container with Orbit Animation */}
                    <div className="relative mb-6">
                      <div className="absolute -top-4 -left-4 w-20 h-20 border-2 border-gray-200 dark:border-gray-600 rounded-full animate-spin-slow opacity-60"></div>
                      <div className="absolute -top-2 -left-2 w-16 h-16 border border-gray-300 dark:border-gray-500 rounded-full animate-spin-medium opacity-40"></div>
                      <div
                        className={`w-12 h-12 bg-gradient-to-r ${feature.gradient} rounded-2xl flex items-center justify-center text-2xl shadow-lg transform group-hover:scale-110 transition-transform duration-300 relative z-10`}
                      >
                        {feature.icon}
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Floating Particles */}
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="flex space-x-1">
                        {[...Array(3)].map((_, i) => (
                          <div
                            key={i}
                            className={`w-2 h-2 bg-gradient-to-r ${feature.gradient} rounded-full animate-bounce`}
                            style={{ animationDelay: `${i * 0.2}s` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Corner Accents */}
                  <div
                    className={`absolute top-0 right-0 w-8 h-8 border-t-4 border-r-4 border-transparent bg-gradient-to-bl ${feature.gradient} rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                  <div
                    className={`absolute bottom-0 left-0 w-8 h-8 border-b-4 border-l-4 border-transparent bg-gradient-to-tr ${feature.gradient} rounded-bl-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                  ></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default Business;
