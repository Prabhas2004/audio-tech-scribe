
import React from 'react';
import { Mic, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About TechVoice</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              TechVoice is your gateway to the minds shaping our digital future. Hosted by Alex Chen, a veteran tech journalist 
              and former Silicon Valley insider, this podcast dives deep into the innovations, challenges, and breakthrough 
              moments that define our rapidly evolving tech landscape.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Every week, we bring you candid conversations with founders, engineers, researchers, and visionaries who are 
              building tomorrow's technology today. From AI breakthroughs to startup stories, from cybersecurity insights 
              to the future of work—we explore the human stories behind the code.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Deep Conversations</h3>
            <p className="text-white/80">Unscripted, authentic discussions that go beyond the surface</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Industry Leaders</h3>
            <p className="text-white/80">Exclusive access to the innovators driving technological change</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-green-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Future Insights</h3>
            <p className="text-white/80">Explore emerging trends and technologies before they become mainstream</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
