
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
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">మాతో కనెక్ట్ అవ్వండి</h2>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-12">
            <h3 className="text-2xl font-bold text-white mb-4">మీ అభిప్రాయాలు మాకు విలువైనవి!</h3>
            <p className="text-lg text-white/90 leading-relaxed mb-6">
              TechTalks Telugu కమ్యూనిటీలో మీరు కూడా భాగం అవ్వండి! మీకు ఏవైనా ప్రశ్నలు, సూచనలు లేదా 
              ఎపిసోడ్ ఐడియాలు ఉంటే మాతో షేర్ చేయండి. మీ ఫీడ్‌బ్యాక్ మాకు మెరుగైన కంటెంట్ క్రియేట్ చేయడంలో 
              సహాయపడుతుంది.
            </p>
            <p className="text-white/80">
              గెస్ట్ సూచనలు, కెరీర్ గైడెన్స్, లేదా కేవలం హలో చెప్పాలని అనిపిస్తే కూడా మాకు మెసేజ్ పంపండి. 
              మా Telugu tech కమ్యూనిటీలో మీరు స్వాగతం!
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
                  <h3 className="text-xl font-semibold text-white">General Inquiries</h3>
                  <p className="text-white/80">hello@techtalksteugu.com</p>
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
                  <p className="text-white/80">guests@techtalksteugu.com</p>
                </div>
              </div>
            </div>
            
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <div className="flex items-center mb-4">
                <div className="bg-gradient-to-r from-green-400 to-cyan-500 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                  <Coffee className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-white">Collaborations</h3>
                  <p className="text-white/80">partners@techtalksteugu.com</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 border border-white/20">
            <h3 className="text-2xl font-bold text-white mb-6">మాకు మెసేజ్ పంపండి</h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Input 
                  placeholder="మీ పేరు" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
                <Input 
                  type="email" 
                  placeholder="మీ ఇమెయిల్" 
                  className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
                />
              </div>
              <Input 
                placeholder="విషయం" 
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Textarea 
                placeholder="మీ మెసేజ్..." 
                rows={6}
                className="bg-white/10 border-white/20 text-white placeholder:text-white/60"
              />
              <Button className="w-full bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 text-white">
                <Send className="w-4 h-4 mr-2" />
                మెసేజ్ పంపండి
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
