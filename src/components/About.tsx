import React, { useState } from 'react';

const About = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const fullText = `As a Frontend Developer, I specialize in creating intuitive and responsive web applications 
    that deliver exceptional user experiences. My journey in web development has equipped me with 
    a deep understanding of modern frameworks and best practices. Beyond coding, my passion for 
    RC model design has taught me precision and attention to detail - skills that translate 
    perfectly into my development work. As a writer, I bring a unique perspective to technical 
    documentation and user interfaces, ensuring clarity and engagement in everything I create.`;

  return (
    <section id="about" className="min-h-screen bg-black py-20">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 relative">
          <div className="relative w-80 h-80 mx-auto">
            <div className="absolute inset-0 rounded-full bg-sky-400/20 animate-pulse"></div>
            <div className="absolute inset-4 rounded-full bg-sky-400/40 animate-pulse animation-delay-200"></div>
            <img
              src="src\Images\my pic 2.jpg"
              alt="About Vijit"
              className="rounded-full w-full h-full object-cover relative z-10 animate-float"
            />
          </div>
        </div>

        <div className="md:w-1/2 mt-8 md:mt-0 text-white">
          <h2 className="text-4xl font-bold mb-6">About Me</h2>
          <p className="text-gray-300 leading-relaxed">
            {isExpanded ? fullText : `${fullText.slice(0, 200)}...`}
          </p>
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="mt-4 px-6 py-2 bg-sky-400 text-black rounded-lg hover:bg-sky-300 transition-colors duration-300"
          >
            {isExpanded ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;