
import React from 'react';
import { Play, Clock, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';

const EpisodesSection = () => {
  const episodes = [
    {
      id: 1,
      title: "Kubernetes in Production with Ravi Kumar",
      description: "DevOps architect Ravi Kumar shares real-world Kubernetes deployment strategies, scaling challenges, and cost optimization techniques for enterprise environments in this comprehensive discussion.",
      duration: "45 min",
      date: "Dec 15, 2024",
      guest: "Ravi Kumar"
    },
    {
      id: 2,
      title: "Cloud Migration Success Stories with Priya Sharma",
      description: "Cloud consultant Priya Sharma reveals proven methodologies for seamless cloud migration, discusses common pitfalls to avoid, and shares client success stories from her consulting experience.",
      duration: "38 min",
      date: "Dec 8, 2024",
      guest: "Priya Sharma"
    },
    {
      id: 3,
      title: "Building Tech Leadership Skills with Anil Reddy",
      description: "Engineering manager Anil Reddy explores the transition from individual contributor to tech leader, sharing insights on team building, stakeholder management, and personal growth strategies.",
      duration: "42 min",
      date: "Dec 1, 2024",
      guest: "Anil Reddy"
    }
  ];

  return (
    <section id="episodes" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Latest Episodes</h2>
          <p className="text-xl text-white/80">తాజా ఎపిసోడ్లను వినండి మరియు నేర్చుకోండి</p>
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
