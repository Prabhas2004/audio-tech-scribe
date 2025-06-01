
import React from 'react';
import { Headphones, Twitter, Linkedin, Youtube, Rss } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-white/10">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <div className="bg-gradient-to-r from-cyan-400 to-purple-400 p-2 rounded-xl">
                <Headphones className="h-6 w-6 text-white" />
              </div>
              <span className="text-2xl font-bold text-white">TechTalks Telugu</span>
            </div>
            <p className="text-white/80 mb-4 max-w-md">
              Telugu Tech Conversations - తెలుగులో టెక్నాలజీ మరియు కెరీర్ గురించి నేర్చుకోండి
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Youtube className="w-5 h-5" />
              </a>
              <a href="#" className="text-white/60 hover:text-white transition-colors">
                <Rss className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#about" className="text-white/80 hover:text-white transition-colors">About</a></li>
              <li><a href="#episodes" className="text-white/80 hover:text-white transition-colors">Episodes</a></li>
              <li><a href="#guests" className="text-white/80 hover:text-white transition-colors">Guests</a></li>
              <li><a href="#contact" className="text-white/80 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-white font-semibold mb-4">Subscribe</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Apple Podcasts</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Spotify</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">Google Podcasts</a></li>
              <li><a href="#" className="text-white/80 hover:text-white transition-colors">RSS Feed</a></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-white/60 text-sm">© 2024 TechTalks Telugu. All rights reserved.</p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Privacy Policy</a>
              <a href="#" className="text-white/60 hover:text-white text-sm transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
