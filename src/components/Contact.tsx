

import React from 'react';
import { Instagram, Github, Linkedin, MessageSquare } from 'lucide-react';

const Contact = () => {
  const socialLinks = [
    { icon: Instagram, href: '#', color: 'text-pink-500' },
    { icon: Github, href: '#', color: 'text-gray-400' },
    { icon: Linkedin, href: '#', color: 'text-blue-500' },
  ];

  return (
    <section id="contact" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0">
            <form className="max-w-md mx-auto relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-sky-400 to-sky-600 rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
              <div className="relative bg-black rounded-lg p-6 space-y-4">
                <h2 className="text-3xl font-bold text-white mb-6">Get in Touch</h2>
                
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                />
                
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                />
                
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                />
                
                <textarea
                  placeholder="Message"
                  rows={4}
                  className="w-full p-3 bg-gray-900 text-white rounded-lg focus:ring-2 focus:ring-sky-400 outline-none"
                ></textarea>
                
                <button
                  type="submit"
                  className="w-full py-3 bg-sky-400 text-black rounded-lg font-semibold hover:bg-sky-300 transition-colors duration-300 animate-pulse"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          <div className="md:w-1/2 text-left">
            <div className="relative w-64 h-64 mx-auto mb-8">
              <div className="absolute inset-0 rounded-full border-2 border-sky-400 animate-spin-slow"></div>
              <img
                src="src\Images\me 2.jpg"
                alt="Contact"
                className="rounded-full w-full h-full object-cover"
              />
            </div>
            
            <div className="space-y-4 ml-[156px] text-left ">
              <h3 className="text-2xl font-bold text-white animate-bounce">
                Like my work?
              </h3>
              <p className="text-xl text-sky-400 animate-pulse">
                Wanna hire me...
              </p>
              
              <div className="flex justify-start space-x-6 mt-6">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`${social.color} hover:scale-110 transition-transform duration-300`}
                  >
                    <social.icon size={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
