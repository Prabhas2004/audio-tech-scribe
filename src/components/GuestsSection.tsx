
import React from 'react';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';

const GuestsSection = () => {
  const guests = [
    {
      name: "Ravi Kumar",
      title: "DevOps Architect, TCS",
      bio: "Senior DevOps architect with 12+ years experience designing scalable infrastructure. Kubernetes expert who has led digital transformation initiatives for Fortune 500 companies across multiple industries.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Priya Sharma",
      title: "Cloud Solutions Consultant, Independent",
      bio: "AWS certified cloud consultant specializing in enterprise migrations. Former Microsoft Azure evangelist with 10+ years helping organizations optimize their cloud adoption strategies and reduce operational costs.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Anil Reddy",
      title: "Engineering Manager, Flipkart",
      bio: "Engineering leader managing distributed teams of 50+ developers. Expert in building high-performance engineering cultures, mentoring junior developers, and scaling technology organizations in fast-growing startups.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    }
  ];

  return (
    <section id="guests" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Featured Guests</h2>
          <p className="text-xl text-white/80">మా పాడ్‌కాస్ట్‌లో వచ్చిన ప్రముఖ వ్యక్తులను కలుసుకోండి</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {guests.map((guest, index) => (
            <div key={index} className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300">
              <div className="w-24 h-24 bg-gradient-to-r from-cyan-400 to-purple-400 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl font-bold text-white">{guest.name.split(' ').map(n => n[0]).join('')}</span>
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{guest.name}</h3>
              <p className="text-cyan-400 font-medium mb-3">{guest.title}</p>
              <p className="text-white/80 text-sm leading-relaxed mb-4">{guest.bio}</p>
              <div className="flex justify-center space-x-3">
                <a href={guest.links.linkedin} className="text-white/60 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href={guest.links.twitter} className="text-white/60 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href={guest.links.website} className="text-white/60 hover:text-white transition-colors">
                  <ExternalLink className="w-5 h-5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GuestsSection;
