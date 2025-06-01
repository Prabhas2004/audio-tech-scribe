
import React from 'react';
import { Headphones, Menu } from 'lucide-react';

const Header = () => {
  return (
    <header className="fixed top-0 w-full bg-black/20 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="bg-gradient-to-r from-cyan-400 to-purple-400 p-2 rounded-xl">
              <Headphones className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-bold text-white">TechVoice</span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-white/80 hover:text-white transition-colors">About</a>
            <a href="#episodes" className="text-white/80 hover:text-white transition-colors">Episodes</a>
            <a href="#guests" className="text-white/80 hover:text-white transition-colors">Guests</a>
            <a href="#sponsors" className="text-white/80 hover:text-white transition-colors">Sponsors</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a>
          </nav>
          <Menu className="h-6 w-6 text-white md:hidden" />
        </div>
      </div>
    </header>
  );
};

export default Header;
