import React from 'react';
import { Download, Briefcase } from 'lucide-react';

const Home = () => {
  return (
    <section id="home" className="min-h-screen bg-black pt-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2 text-white space-y-6">
          <h1 className="text-5xl font-bold mb-4">
            Hi, I'm <span className="text-sky-400">Vijit Bhadana</span>
          </h1>
          <div className="space-y-4">
            <p className="text-lg text-gray-300 leading-relaxed">
              A passionate Frontend Developer who brings creativity to life through code.
              Beyond the digital realm, I'm an RC Model Designer, crafting intricate
              flying machines that bridge engineering and artistry. As a writer,
              I weave words to share stories and insights, making technology more
              accessible and engaging for everyone.
            </p>
            <div className="flex space-x-4 pt-6">
              <button className="px-6 py-3 bg-sky-500 text-white rounded-lg flex items-center space-x-2 hover:bg-sky-600 transition-all duration-300 animate-pulse">
                <Briefcase size={20} />
                <span>Hire Me</span>
              </button>
              <button className="px-6 py-3 border-2 border-sky-400 text-sky-400 rounded-lg flex items-center space-x-2 hover:bg-sky-400 hover:text-black transition-all duration-300">
                <Download size={20} />
                <span>Download CV</span>
              </button>
            </div>
          </div>
        </div>
        
        <div className="md:w-1/2 mt-8 md:mt-0 relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-sky-400/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-sky-400/40 animate-pulse animation-delay-200"></div>
            <img
              src="src\Images\mypic - Copy.jpg"
              alt="Vijit Bhadana"
              className="rounded-full w-full h-full object-cover relative z-10 animate-float"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;