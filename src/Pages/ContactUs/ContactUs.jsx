import React, { useState } from 'react';
import Image from '../../assets/contact_img.png';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="min-h-screen bg-[#e9faf9] py-12 px-4 -mt-20">
      <div className="max-w-7xl mx-auto mt-28">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-blue-600 bg-clip-text text-transparent mb-4">
            CONTACT US
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Hey, contact our team. Have a question or need assistance? Our team
            is ready to help you tackle any challenge!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form Section */}
          <div className="bg-white rounded-3xl shadow-2xl p-8 lg:p-12 border border-teal-100">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                    placeholder="Enter your full name"
                    required
                  />
                  <div className="absolute right-3 top-3 text-teal-500">👤</div>
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email
                </label>
                <div className="relative">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                    placeholder="Enter your email address"
                    required
                  />
                  <div className="absolute right-3 top-3 text-teal-500">📧</div>
                </div>
              </div>

              {/* Subject Input */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <div className="relative">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 transition-all duration-300"
                    placeholder="What is this regarding?"
                    required
                  />
                  <div className="absolute right-3 top-3 text-teal-500">📝</div>
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="6"
                    className="w-full px-4 py-3 border border-teal-200 rounded-xl focus:ring-2 focus:ring-teal-500 focus:border-transparent bg-white text-gray-900 resize-none transition-all duration-300"
                    placeholder="Type your message here..."
                    required
                  ></textarea>
                  <div className="absolute right-3 top-3 text-teal-500">💬</div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-blue-500 hover:from-teal-600 hover:to-blue-600 text-white font-bold py-4 px-6 rounded-xl shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center gap-3"
              >
                <span>Send Message</span>
                <span className="text-xl">🚀</span>
              </button>
            </form>
          </div>

          {/* Contact Information Section */}
          <div className="bg-gradient-to-br from-teal-500 to-blue-500 rounded-3xl shadow-2xl p-8 lg:p-12 text-white border border-teal-400">
            <div className="h-full flex flex-col justify-center">
              <h2 className="text-3xl font-bold mb-6">CONTACT US</h2>
              <p className="text-teal-100 text-lg mb-8">
                Chat to our friendly team. We'd love to hear from you! Please
                get in touch.
              </p>

              {/* Contact Methods */}
              <div className="space-y-8">
                {/* Phone */}
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <span className="text-xl">📞</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Phone</h3>
                    <p className="text-teal-100 group-hover:text-white transition-colors duration-300">
                      +65 91306961
                    </p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <span className="text-xl">📧</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Email</h3>
                    <p className="text-teal-100 group-hover:text-white transition-colors duration-300">
                      support@taka.com
                    </p>
                  </div>
                </div>

                {/* Live Chat */}
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <span className="text-xl">💬</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Live Chat</h3>
                    <p className="text-teal-100 group-hover:text-white transition-colors duration-300">
                      Available 24/7
                    </p>
                  </div>
                </div>

                {/* Office Address */}
                <div className="flex items-start space-x-4 group cursor-pointer">
                  <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 border border-white/30">
                    <span className="text-xl">🏢</span>
                  </div>
                  <div>
                    <h3 className="font-semibold text-white mb-1">Office</h3>
                    <p className="text-teal-100 group-hover:text-white transition-colors duration-300">
                      Singapore, Central Business District
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <div className="mt-12 relative">
                <div className="absolute -top-4 -left-4 w-8 h-8 border-2 border-white/40 rounded-full animate-ping"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 border-2 border-white/40 rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Info Section */}
        <div className="text-center mt-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg inline-block border border-teal-100">
            <p className="text-gray-600 text-lg flex items-center justify-center gap-2">
              <span className="text-teal-500">💫</span>
              We typically respond within 2 hours during business hours
            </p>
          </div>
        </div>

        {/* Floating decorative elements */}
        <div className="absolute top-1/4 left-10 w-6 h-6 bg-teal-300 rounded-full opacity-60 animate-bounce"></div>
        <div className="absolute top-1/3 right-20 w-4 h-4 bg-blue-300 rounded-full opacity-50 animate-pulse"></div>
        <div className="absolute bottom-1/4 left-20 w-8 h-8 bg-teal-200 rounded-full opacity-40 animate-bounce delay-300"></div>

        {/* image section */}
        <div className="mt-5 md:mt-10">
          <img src={Image} alt="" />
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
