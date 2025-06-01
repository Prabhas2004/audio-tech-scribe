
import React from 'react';
import { Mail, MessageCircle, Coffee, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">Let's Connect</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">We'd Love to Hear From You!</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              Have a groundbreaking story to share? Know an innovator we should interview? Want to discuss a 
              potential collaboration? We're always excited to connect with fellow tech enthusiasts, entrepreneurs, 
              and anyone passionate about the future of technology.
            </p>
            <p className="text-white/80">
              Drop us a line—whether it's feedback, guest suggestions, or just to say hello. 
              Every message helps us create better content for our amazing community!
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-cyan-400 to-blue-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Mail className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Email Us</h3>
                  <p className="text-white/80">hello@techvoice.show</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-purple-400 to-pink-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Guest Suggestions</h3>
                  <p className="text-white/80">guests@techvoice.show</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Sponsorships</h3>
                  <p className="text-white/80">sponsors@techvoice.show</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">Send us a message</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="Your Name" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  type="email" 
                  placeholder="Your Email" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Input 
                placeholder="Subject" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Textarea 
                placeholder="Your message..." 
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                <Send className="w-4 h-4 mr-2" />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
