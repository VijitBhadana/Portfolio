import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import './styles/global.css';

function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="app">
      <Preloader isLoading={isLoading} />
      {!isLoading && (
        <>
          <Navbar />
          <Home />
          <About />
          <Skills />
          <Contact />
        </>
      )}
    </div>
  );
}

export default App