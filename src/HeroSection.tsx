import React, { useEffect, useState, useRef } from 'react';

const backgroundImages = [
  '/assets/Hirex-main-banner.jpg',
  '/assets/Hirex-main-banner2.jpg',
  '/assets/Hirex-main-banner3.jpg',
  '/assets/Hirex-main-banner4.jpg',
];

const HeroSection = ({ isVisible }: { isVisible: boolean }) => {
  const [current, setCurrent] = useState(0);
  const [sliding, setSliding] = useState(false);
  const timeoutRef = useRef<number | null>(null);

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setSliding(true);
      setTimeout(() => {
        setCurrent((prev) => (prev + 1) % backgroundImages.length);
        setSliding(false);
      }, 500);
    }, 2200);
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [current]);

  return (
    <section className="relative min-h-screen overflow-hidden">
      <nav className="fixed top-0 left-0 w-full z-20 bg-white/80 backdrop-blur-md shadow-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-14 sm:h-16">
          <div className="flex items-center">
            <span className="text-xl sm:text-2xl font-black text-red-600 tracking-tight">HIREX</span>
          </div>
          <div className="hidden md:flex space-x-8">
            <a href="#about" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">About</a>
            <a href="#companies" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Companies</a>
            <a href="#skills" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Skills</a>
            <a href="#students" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Students</a>
            <a href="#contact" className="text-gray-700 hover:text-red-600 font-semibold transition-colors">Contact</a>
          </div>
          <div className="md:hidden"></div>
        </div>
      </nav>

      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div
          className="w-full h-full flex transition-transform duration-500"
          style={{
            transform: `translateX(-${current * 100}vw)`,
            willChange: 'transform',
          }}
        >
          {backgroundImages.map((src, idx) => (
            <img
              key={src}
              src={src}
              alt="Hero background"
              className="w-full h-full object-cover flex-shrink-0"
              style={{ minWidth: '100vw', minHeight: '100vh' }}
            />
          ))}
        </div>
      </div>

      <div className="relative z-10 min-h-screen flex items-center justify-center px-2 sm:px-4 pt-20 sm:pt-24">
        <div className="max-w-4xl mx-auto w-full">
          <div className={`transform transition-all duration-1500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}`}>
            <div className="text-center mb-4 sm:mb-6">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 leading-tight tracking-tight drop-shadow-2xl animate-pulse hover:scale-105 transition-transform duration-500 cursor-default">
                <span className="inline-block bg-black rounded-xl sm:rounded-2xl px-3 sm:px-5 py-2 border border-black shadow-2xl text-red-600">
                  HIREX
                </span>{' '}
                <span className="text-white">2025</span>
              </h1>
              <div className="bg-white/95 backdrop-blur-sm rounded-xl px-3 py-4 inline-block border border-white/30 shadow-2xl hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <p className="text-base sm:text-lg md:text-xl text-gray-800 font-bold leading-tight">
                  India's Biggest Experiential Hiring Platform
                </p>
              </div>
            </div>

            <div className="text-center mb-6 sm:mb-10">
              <div className="bg-gray-900/90 backdrop-blur-sm rounded-xl px-3 py-4 inline-block max-w-2xl shadow-2xl border border-gray-700 hover:shadow-3xl hover:scale-105 transition-all duration-500">
                <p className="text-sm sm:text-base md:text-lg text-white font-medium leading-relaxed">
                  Where Engineering Talent Is Hired for What They Do
                  <br />
                  <span className="text-gray-300">— Not Just What They Know</span>
                </p>
              </div>
            </div>

            <div className="text-center">
              <button className="bg-red-600 hover:bg-red-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full text-base sm:text-lg font-bold transition-all duration-500 transform hover:scale-110 hover:shadow-2xl flex items-center mx-auto group shadow-xl hover:rotate-1 animate-bounce hover:animate-none">
                Join the Revolution
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
