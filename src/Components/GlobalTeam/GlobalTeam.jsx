import React from 'react';
import Icon_Future from '../../assets/icon_feature.png';
import FutureImage from '../../assets/featureInfo1.png';

const GlobalTeam = () => {
  return (
    <div className="max-w-7xl mx-auto py-20 px-4">
      <div className="text-center mb-16">
        <span className="bg-green-200 px-4 py-2 rounded-xl text-green-500 font-medium">
          FEATURE
        </span>
        <h2 className="text-4xl md:text-6xl font-semibold text-center mt-4">
          Join Taka Global Team - <br />
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

      {/* Main Card */}
      <div className="flex flex-col lg:flex-row gap-8 items-center">
        {/* Left Side - Content */}
        <div className="flex-1 bg-white rounded-2xl shadow-lg p-8">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6">
            Grow Together with Taka's Referral Program!
          </h3>

          <p className="text-lg text-gray-600 mb-6 font-medium">
            Big earnings await! Join taka - become agency or host.
          </p>

          {/* Checklist Items */}
          <div className="space-y-4 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-transparent rounded-sm"></div>
              </div>
              <span className="text-gray-700">Earn From Every Follower</span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-green-500 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
              </div>
              <span className="text-gray-700">
                Global Reach: 190+ Countries
              </span>
            </div>

            <div className="flex items-center gap-3">
              <div className="w-6 h-6 border-2 border-gray-300 rounded flex items-center justify-center">
                <div className="w-3 h-3 bg-transparent rounded-sm"></div>
              </div>
              <span className="text-gray-700">Fast & Direct Growth</span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <div className="w-6 h-6 border-2 border-green-500 rounded flex items-center justify-center">
              <div className="w-3 h-3 bg-green-500 rounded-sm"></div>
            </div>
            <span className="text-gray-700">Global Reach: 190+ Countries</span>
          </div>

          {/* Divider */}
          <div className="border-t border-gray-200 my-6"></div>

          {/* View Plan Button */}
          <div className="text-center mb-6">
            <button className="text-purple-600 font-semibold text-lg hover:text-purple-700 transition-colors">
              View Plan →
            </button>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="flex-1">
          <img
            src={FutureImage}
            alt="Taka Referral Program"
            className="w-full h-auto rounded-2xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default GlobalTeam;
