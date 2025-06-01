
import React from 'react';
import { Sparkles, Target, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

const SponsorsSection = () => {
  return (
    <section id="sponsors" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Partner With TechTalks Telugu</h2>
          
          <div className="bg-gradient-to-r from-cyan-500/20 to-purple-500/20 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">Connect Your Brand with Telugu Tech Community</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Join leading technology companies in reaching our highly engaged audience of Telugu-speaking 
              tech professionals, DevOps engineers, and cloud specialists. Our listeners are decision-makers, 
              early adopters, and influencers who drive technological innovation in their organizations. 
              Partner with us to showcase your products and services to this dedicated community.
            </p>
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3">
              <Sparkles className="w-5 h-5 mr-2" />
              Become a Sponsor
            </Button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Niche Audience</h4>
              <p className="text-white/80 text-sm">80% DevOps & Cloud professionals</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Loyal Listeners</h4>
              <p className="text-white/80 text-sm">Average 38-minute engagement</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="bg-gradient-to-r from-green-400 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Growing Community</h4>
              <p className="text-white/80 text-sm">25% monthly growth rate</p>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center">
              <div className="bg-gradient-to-r from-orange-400 to-red-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Quality Content</h4>
              <p className="text-white/80 text-sm">Educational & professional focus</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SponsorsSection;
