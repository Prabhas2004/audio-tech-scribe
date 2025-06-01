
import React from 'react';
import { Play, Download, Rss } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="pt-32 pb-20 px-6">
      <div className="container mx-auto text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Telugu Tech
            <span className="bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent"> Conversations</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto leading-relaxed">
            తెలుగులో టెక్నాలజీ మరియు కెరీర్ గురించి నేర్చుకోండి
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button size="lg" className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white px-8 py-3">
              <Play className="w-5 h-5 mr-2" />
              Listen Now
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10 px-8 py-3">
              <Download className="w-5 h-5 mr-2" />
              Subscribe
            </Button>
            <Button variant="ghost" size="lg" className="text-white/80 hover:text-white hover:bg-white/10">
              <Rss className="w-5 h-5 mr-2" />
              RSS Feed
            </Button>
          </div>
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
              <div>
                <div className="text-3xl font-bold text-cyan-400">50+</div>
                <div className="text-white/80">Episodes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-400">25K+</div>
                <div className="text-white/80">Listeners</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-pink-400">30+</div>
                <div className="text-white/80">Industry Experts</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
