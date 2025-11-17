import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/logo.png';

const navItems = [
  { label: 'Business', path: '/business' },
  { label: 'Contact Us', path: '/contact' },
  { label: 'Policy', path: '/policy' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showVerifyModal, setShowVerifyModal] = useState(false);

  return (
    <>
      <nav className="px-4 py-3 sm:px-6 sm:py-4 max-w-6xl mx-auto sticky top-0 md:top-10 md:rounded-2xl bg-[#c2f5f3] backdrop-blur-md border border-white/30 z-50">
        <div className="flex items-center justify-between">
          <Link to="/">
            <span className="text-base sm:text-lg font-semibold text-gray-800 flex items-center gap-2">
              <img className="h-10 w-10" src={Logo} alt="" />
              <h2 className="font-bold">HI FI</h2>
            </span>
          </Link>

          <div className="hidden sm:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                className="text-gray-600 hover:text-gray-900 transition text-base font-semibold"
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden sm:flex items-center space-x-6">
            <button
              onClick={() => setShowModal(true)}
              className="text-gray-600 hover:text-gray-900 transition text-base font-semibold"
            >
              My Account
            </button>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/14lGAOQtCKYsAfyufvi-0FKkYPAcjg0A1/view?usp=sharing"
              className="bg-[#1d9fd6] text-white px-4 py-2 rounded-xl hover:bg-green-400 transition font-semibold"
            >
              Download HiFi Live
            </a>
          </div>

          <button
            className="sm:hidden text-gray-700 text-3xl"
            onClick={() => setOpen(!open)}
          >
            {open ? '✖' : '☰'}
          </button>
        </div>

        {open && (
          <div className="sm:hidden mt-4 flex flex-col space-y-4 pb-4">
            {navItems.map((item, index) => (
              <Link
                key={index}
                to={item.path}
                onClick={() => setOpen(false)}
                className="text-gray-700 font-semibold text-base hover:text-gray-900"
              >
                {item.label}
              </Link>
            ))}

            <button
              onClick={() => {
                setShowModal(true);
                setOpen(false);
              }}
              className="text-gray-700 font-semibold text-base hover:text-gray-900"
            >
              My Account
            </button>

            <a
              target="_blank"
              href="https://drive.google.com/file/d/14lGAOQtCKYsAfyufvi-0FKkYPAcjg0A1/view?usp=sharing"
              className="bg-[#1d9fd6] text-white px-4 py-2 rounded-xl hover:bg-green-400 transition font-semibold text-center"
            >
              Download HiFi Live
            </a>
          </div>
        )}
      </nav>

      {/* ========================== */}
      {/*     FIRST CONFIRM MODAL    */}
      {/* ========================== */}
      {showModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-md transform transition-all duration-300 scale-95 animate-scaleIn">
            {/* Warning Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-red-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Delete Account?
            </h2>
            <p className="text-gray-600 text-center mb-6">
              This action cannot be undone
            </p>

            {/* Warning Points */}
            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Account-related information will be permanently deleted
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  After deletion, it cannot be recovered
                </span>
              </div>

              <div className="flex items-start gap-3 p-3 bg-red-50 rounded-lg">
                <svg
                  className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span className="text-sm text-gray-700">
                  Your rank, balance & equity will be cleared
                </span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="space-y-3">
              <button
                onClick={() => {
                  setShowModal(false);
                  setShowVerifyModal(true);
                }}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl"
              >
                Continue to Verify
              </button>

              <button
                onClick={() => setShowModal(false)}
                className="w-full bg-gray-100 text-gray-700 font-medium py-3.5 px-4 rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ========================== */}
      {/*     SECOND VERIFY MODAL    */}
      {/* ========================== */}
      {showVerifyModal && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-md z-[999] flex items-center justify-center p-4 animate-fadeIn">
          <div className="bg-white rounded-3xl shadow-2xl p-8 w-full max-w-2xl transform transition-all duration-300 scale-95 animate-scaleIn">
            {/* Security Icon */}
            <div className="flex justify-center mb-4">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center">
                <svg
                  className="w-8 h-8 text-blue-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </div>
            </div>

            <h2 className="text-2xl font-bold text-gray-900 text-center mb-2">
              Verify Your Identity
            </h2>
            <p className="text-gray-600 text-center mb-6">
              Enter your credentials to confirm account deletion
            </p>

            <div className="space-y-5">
              {/* Account ID Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Account ID
                </label>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Enter your Account ID"
                    className="w-full border-2 border-gray-200 px-4 py-3.5 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
              </div>

              {/* Password Input */}
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-gray-700">
                  Password
                </label>
                <div className="relative">
                  <input
                    type="password"
                    placeholder="Enter your password"
                    className="w-full border-2 border-gray-200 px-4 py-3.5 rounded-xl focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
                  />
                  <svg
                    className="w-5 h-5 text-gray-400 absolute right-3 top-1/2 transform -translate-y-1/2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                    />
                  </svg>
                </div>
              </div>

              {/* Final Warning */}
              <div className="bg-red-50 border border-red-200 rounded-xl p-4">
                <div className="flex items-center gap-2">
                  <svg
                    className="w-4 h-4 text-red-500 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z"
                    />
                  </svg>
                  <span className="text-sm font-medium text-red-700">
                    This action is permanent and cannot be undone
                  </span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3">
                <button className="w-full bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold py-3.5 px-4 rounded-xl hover:from-red-600 hover:to-red-700 transition-all duration-200 transform hover:scale-[1.02] active:scale-[0.98] shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                    />
                  </svg>
                  Delete Account Permanently
                </button>

                <button
                  onClick={() => setShowVerifyModal(false)}
                  className="w-full bg-gray-100 text-gray-700 font-medium py-3.5 px-4 rounded-xl hover:bg-gray-200 transition-all duration-200 border border-gray-200"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
