import React, { useState } from 'react';

const Policy = () => {
  const [activeSection, setActiveSection] = useState('terms');

  const policies = {
    terms: {
      title: 'Terms of Service',
      content: `
        By accessing and using this website, you confirm that you have carefully read, understood, and agreed to the following terms and conditions ("Terms"). Please ensure that you fully comprehend these Terms before proceeding, as your use of the website is governed by them.

        These Terms constitute a legally binding agreement ("Agreement") between you, the user ("you," "your," or "user"), and TAKA INNOVATIONS ("Company"). Each of you and the Company may be referred to individually as a "Party" and collectively as the "Parties."

        If you do not agree with any part of these Terms, you must immediately cease accessing and using the website and any services provided under these Terms. By accepting these Terms, you enter into a binding Agreement with TAKA INNOVATIONS regarding your use of the website and/or subscription to the available services.

        TAKA INNOVATIONS owns and operates the website and application known as "Taka," which are referenced herein. Through this platform, the Company provides users with a simple and reliable way to connect with friends nearby or around the world. The services enable users to send free text, voice, video, photo messages, and stickers to their contacts. Designed to be an enjoyable and engaging experience, the Commonwealth's motivations, preferences, and friendly environment for all users is wise.
      `,
    },
    privacy: {
      title: 'Privacy Policy',
      content: `
        Our Privacy Policy outlines how we collect, use, and protect your personal information. Your privacy and security are our priorities.

        We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This may include your name, email address, phone number, and any other information you choose to provide.

        We use the information we collect to:
        - Provide, maintain, and improve our services
        - Send you technical notices and support messages
        - Respond to your comments and questions
        - Develop new services and features
        - Protect the rights and property of TAKA INNOVATIONS and others

        We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
      `,
    },
    child: {
      title: 'Child Safety Policy',
      content: `
        The safety of our younger users is of utmost importance to TAKA INNOVATIONS. We are committed to creating a safe and secure environment for users of all ages.

        Our platform includes several safety features:
        - Age verification systems
        - Content moderation and filtering
        - Reporting mechanisms for inappropriate content
        - Parental control options
        - Educational resources about online safety

        We do not knowingly collect personal information from children under 13 without parental consent. If we learn we have collected personal information from a child under 13 without verification of parental consent, we will delete that information promptly.

        Parents and guardians can contact us to review, update, or delete any personal information we may have collected about their child.
      `,
    },
  };

  return (
    <div className="min-h-screen bg-[#e9faf9] py-12 px-4 -mt-30">
      <div className="max-w-6xl mx-auto mt-40">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-6">
            # POLICY
          </h1>
          <div className="bg-white rounded-2xl p-8 shadow-xl border border-teal-100">
            <h2 className="text-3xl font-bold text-gray-800 mb-4">
              Our Privacy Policy
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed">
              Our Privacy Policy outlines how we collect, use, and protect your
              personal information. Your privacy and security are our
              priorities.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-xl p-6 sticky top-6 border border-teal-100">
              <h3 className="text-xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-teal-600">📋</span>
                Policies
              </h3>
              <nav className="space-y-3">
                {[
                  { id: 'terms', label: 'Terms of Service', icon: '📜' },
                  { id: 'privacy', label: 'Privacy Policy', icon: '🔒' },
                  { id: 'child', label: 'Child Safety Policy', icon: '👶' },
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setActiveSection(item.id)}
                    className={`w-full text-left px-4 py-3 rounded-xl transition-all duration-300 flex items-center gap-3 ${
                      activeSection === item.id
                        ? 'bg-gradient-to-r from-teal-500 to-blue-500 text-white shadow-lg transform scale-105'
                        : 'text-gray-600 hover:bg-teal-50 border border-transparent hover:border-teal-200'
                    }`}
                  >
                    <span className="text-lg">{item.icon}</span>
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </nav>

              {/* Decorative Element */}
              <div className="mt-8 p-4 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                <p className="text-sm text-teal-700 text-center">
                  💡 Please read all policies carefully before using our
                  services
                </p>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-teal-100">
              {/* Section Header */}
              <div className="flex items-center gap-4 mb-8 pb-6 border-b border-teal-200">
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-blue-500 rounded-xl flex items-center justify-center text-white text-xl shadow-lg">
                  {activeSection === 'terms' && '📜'}
                  {activeSection === 'privacy' && '🔒'}
                  {activeSection === 'child' && '👶'}
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-gray-800">
                    {policies[activeSection].title}
                  </h2>
                  <div className="flex items-center gap-2 mt-2">
                    <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
                    <p className="text-teal-600 text-sm font-medium">
                      Last updated: December 2024
                    </p>
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 leading-relaxed space-y-6">
                  {policies[activeSection].content
                    .split('\n\n')
                    .map((paragraph, index) => (
                      <p key={index} className="text-lg leading-8">
                        {paragraph}
                      </p>
                    ))}
                </div>

                {/* Additional Info */}
                <div className="mt-8 p-6 bg-gradient-to-r from-teal-50 to-blue-50 rounded-xl border border-teal-200">
                  <h4 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
                    <span className="text-teal-600">ℹ️</span>
                    Important Notice
                  </h4>
                  <p className="text-gray-600">
                    These policies are legally binding. By using Taka services,
                    you acknowledge that you have read, understood, and agree to
                    be bound by these terms. We recommend reviewing these
                    policies regularly as they may be updated.
                  </p>
                </div>

                {/* Contact Information */}
                <div className="mt-8 flex flex-wrap gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-teal-50 rounded-lg border border-teal-200">
                    <span className="text-teal-600">📧</span>
                    <span className="text-sm text-teal-700">
                      legal@taka.com
                    </span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 rounded-lg border border-blue-200">
                    <span className="text-blue-600">🌐</span>
                    <span className="text-sm text-blue-700">
                      www.taka.com/legal
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <button className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 group text-left hover:border-teal-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-teal-400 to-blue-500 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    📥
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">
                      Download Policy PDF
                    </h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Save a copy for your records
                    </p>
                  </div>
                </div>
              </button>

              <button className="bg-white rounded-xl p-6 shadow-lg border border-teal-100 hover:shadow-xl transition-all duration-300 group text-left hover:border-teal-300">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-red-400 rounded-lg flex items-center justify-center text-white text-xl group-hover:scale-110 transition-transform duration-300 shadow-md">
                    ❓
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-800">Need Help?</h3>
                    <p className="text-gray-600 text-sm mt-1">
                      Contact our legal team
                    </p>
                  </div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Policy;
