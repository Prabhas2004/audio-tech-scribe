
import React from 'react';
import { Play, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: "The Future of AI Ethics with Dr. Sarah Martinez",
      description: "Stanford researcher discusses responsible AI development, algorithmic bias, and the frameworks needed for ethical machine learning in healthcare and finance.",
      duration: "52 min",
      date: "Dec 15, 2024",
      guest: "Dr. Sarah Martinez"
    },
    {
      id: 2,
      title: "Building Quantum-Ready Infrastructure with Michael Thompson",
      description: "Former Google quantum engineer reveals how enterprises should prepare for quantum computing adoption and the cybersecurity implications for current encryption methods.",
      duration: "47 min",
      date: "Dec 8, 2024",
      guest: "Michael Thompson"
    },
    {
      id: 3,
      title: "Democratizing Fintech Innovation with Lisa Park",
      description: "Y Combinator alum shares insights on building inclusive financial products, navigating regulatory challenges, and creating accessible banking solutions for underserved communities.",
      duration: "41 min",
      date: "Dec 1, 2024",
      guest: "Lisa Park"
    }
  ];

  return (
    <section id="episodes" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Episodes</h2>
          <p className="text-xl text-white/80">Discover the conversations shaping tomorrow's technology</p>
        </div>
        
        <div className="max-w-4xl mx-auto space-y-6">
          {episodes.map((episode) => (
            <div key={episode.id} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/15 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">{episode.title}</h3>
                  <p className="text-white/80 mb-4">{episode.description}</p>
                  <div className="flex items-center space-x-6 text-sm text-white/60">
                    <div className="flex items-center">
                      <Clock className="w-4 h-4 mr-1" />
                      {episode.duration}
                    </div>
                    <div className="flex items-center">
                      <Calendar className="w-4 h-4 mr-1" />
                      {episode.date}
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 md:ml-6">
                  <Button className="bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                    <Play className="w-4 h-4 mr-2" />
                    Listen
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10">
            View All Episodes
          </Button>
        </div>
      </div>
    </section>
  );
};

export default EpisodesSection;
