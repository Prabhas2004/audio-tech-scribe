
import React from 'react';
import { ExternalLink, Linkedin, Twitter } from 'lucide-react';

const GuestsSection = () => {
  const guests = [
    {
      name: "Dr. Sarah Martinez",
      title: "AI Ethics Researcher, Stanford University",
      bio: "Leading researcher in responsible AI development with 15+ years in machine learning ethics. Published 50+ papers on algorithmic fairness and serves on WHO's AI advisory board.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Michael Thompson",
      title: "Quantum Computing Pioneer, Ex-Google",
      bio: "Former Principal Engineer at Google Quantum AI with 12+ years advancing quantum algorithms. Holds 25+ patents and co-founded quantum startup QbitTech, now valued at $500M.",
      image: "/placeholder.svg",
      links: {
        linkedin: "#",
        twitter: "#",
        website: "#"
      }
    },
    {
      name: "Lisa Park",
      title: "Fintech Founder & CEO, PayForward",
      bio: "Y Combinator alum who built PayForward into a $2B fintech serving 10M+ users. Former Goldman Sachs VP championing financial inclusion through innovative banking solutions.",
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
          <p className="text-xl text-white/80">Meet the innovators and thought leaders we've had the privilege to interview</p>
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
