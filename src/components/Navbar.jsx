'use client';
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="fixed z-10 w-full bg-black/70">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          <div className="flex items-center drop-shadow-2xl hover:drop-shadow-[0_0_4px_rgba(255,255,255,1)]">
            <a href="#home" className="text-2xl font-bold text-white font-audioWide">Texatech</a>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <ul className="flex space-x-6 text-white">
              <li><a href="/#home" className="hover:text-purple-400 transition-colors duration-300">Home</a></li>
              <li><a href="/#sponsors" className="hover:text-purple-400 transition-colors duration-300">Sponsors</a></li>
              <li><a href="/#events" className="hover:text-purple-400 transition-colors duration-300">Events</a></li>
              <li><a href="/#timeline" className="hover:text-purple-400 transition-colors duration-300">Timeline</a></li>
              <li><a href="/#about" className="hover:text-purple-400 transition-colors duration-300">About</a></li>
            </ul>
            <a href="mailto:entropy@gcetts.ac.in">
              <button className="border-2 border-purple-600 rounded-lg py-1 px-4 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">
                  Contact Us
              </button>
            </a>
          </div>

          <div className="md:hidden lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-purple-400 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-black/90 transition-all duration-300`}>
        <ul className="flex flex-col space-y-4 p-4 text-white">
          <li><a href="#home" className="block hover:text-purple-400 transition-colors duration-300" onClick={toggleMenu}>Home</a></li>
          <li><a href="#sponsors" className="block hover:text-purple-400 transition-colors duration-300" onClick={toggleMenu}>Sponsors</a></li>
          <li><a href="#events" className="block hover:text-purple-400 transition-colors duration-300" onClick={toggleMenu}>Events</a></li>
          <li><a href="#timeline" className="block hover:text-purple-400 transition-colors duration-300" onClick={toggleMenu}>Timeline</a></li>
          <li><a href="#about" className="block hover:text-purple-400 transition-colors duration-300" onClick={toggleMenu}>About</a></li>
        </ul>
        <div className="p-4">
          <button className="w-full border-2 border-purple-600 rounded-lg py-1 px-4 text-purple-600 hover:bg-purple-600 hover:text-white transition-all duration-300">Contact Us</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
