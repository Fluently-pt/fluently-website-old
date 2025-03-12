import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-6xl">
      <div className={`transition-all duration-300 rounded-[2rem] ${
        isScrolled 
          ? 'bg-white/95 shadow-lg backdrop-blur-lg border border-brand-200' 
          : 'bg-white/95 backdrop-blur-lg border border-brand-200/50'
      } py-4 px-8`}>
        <div className="flex justify-between items-center">
          <Logo className="h-12 w-auto" color="text-brand-500" />
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="font-semibold text-brand-500 hover:text-brand-600">
              Features
            </a>
            <a href="#pricing" className="font-semibold text-brand-500 hover:text-brand-600">
              Pricing
            </a>
            <a href="#about" className="font-semibold text-brand-500 hover:text-brand-600">
              About
            </a>
          </nav>
          <div className="flex items-center space-x-4">
            <button className="font-semibold text-brand-500 hover:text-brand-600">
              Log in
            </button>
            <button className="px-5 py-2.5 rounded-lg bg-brand-500 text-white font-semibold hover:bg-brand-600 transition-colors shadow-lg hover:shadow-xl hover:shadow-brand-300/20 transform hover:-translate-y-0.5 transition-all duration-200">
              Try for Free
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}