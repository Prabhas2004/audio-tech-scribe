
import React from 'react';
import { Mic, Users, Lightbulb } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">About TechTalks Telugu</h2>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              TechTalks Telugu is your gateway to understanding technology in our native language. Hosted by Vijay Pynam, 
              a passionate Lead DevOps Engineer with extensive experience in cloud computing and automation, this podcast 
              bridges the gap between complex tech concepts and Telugu-speaking professionals.
            </p>
            <p className="text-lg text-white/90 leading-relaxed">
              Every episode features candid conversations with industry experts, entrepreneurs, and thought leaders who 
              share their insights on DevOps practices, cloud technologies, career advancement strategies, and personal 
              development. Our mission is to empower Telugu tech enthusiasts with knowledge, inspiration, and practical 
              guidance for their professional journey.
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mic className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Native Language Learning</h3>
            <p className="text-white/80">Complex tech concepts explained in Telugu for better understanding</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Industry Experts</h3>
            <p className="text-white/80">Exclusive conversations with DevOps leaders and cloud specialists</p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
            <div className="bg-gradient-to-r from-green-400 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lightbulb className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Career Growth</h3>
            <p className="text-white/80">Practical advice for advancing your tech career and personal development</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
