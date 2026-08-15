import React, { useState } from 'react';
import { Mail, Send, CheckCircle2, MapPin } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { contactInfo } from '../data/portfolioData';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    // Simulate submission delay
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSubmitted(false), 6000);
    }, 800);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-900/50 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Mail className="w-3.5 h-3.5" />
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Contact <span className="text-cyan-400">Me</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Feel free to reach out regarding academic inquiries, project collaborations, software engineering opportunities, or PPD II evaluation feedback.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Contact Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-8 shadow-xl space-y-8">
              
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Let's Connect
                </h3>
                <p className="text-xs text-slate-400 mt-1 leading-relaxed">
                  I am eager to engage in software engineering discussions, cybersecurity research, and technology initiatives.
                </p>
              </div>

              {/* Direct Info Channels */}
              <div className="space-y-4">
                
                {/* Email Card */}
                <a
                  href={`mailto:${contactInfo.email}`}
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 group-hover:scale-105 transition-transform shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">Email Address</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate block group-hover:text-cyan-300 transition-colors">
                      {contactInfo.email}
                    </span>
                  </div>
                </a>

                {/* LinkedIn Card */}
                <a
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20 group-hover:scale-105 transition-transform shrink-0">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">LinkedIn Profile</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate block group-hover:text-cyan-300 transition-colors">
                      www.linkedin.com/in/gowthaman-atputhathevarajah
                    </span>
                  </div>
                </a>

                {/* GitHub Card */}
                <a
                  href={contactInfo.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-4 p-4 rounded-2xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 hover:bg-slate-950 transition-all group"
                >
                  <div className="p-3 rounded-xl bg-slate-800 text-slate-200 border border-slate-700 group-hover:scale-105 transition-transform shrink-0">
                    <GithubIcon className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div className="space-y-0.5 overflow-hidden">
                    <span className="text-[11px] font-mono uppercase text-slate-400 font-semibold block">GitHub Profile</span>
                    <span className="text-xs sm:text-sm font-medium text-white truncate block group-hover:text-cyan-300 transition-colors">
                      https://github.com/Gowthaman-GTM
                    </span>
                  </div>
                </a>

              </div>

              {/* Location Badge */}
              <div className="p-4 rounded-2xl bg-slate-950/60 border border-slate-800 flex items-center gap-3 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>Undergraduate Student • University of Kelaniya, Sri Lanka</span>
              </div>

            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-xl space-y-6">
              
              <div>
                <h3 className="text-xl font-bold text-white font-display">
                  Send a Direct Message
                </h3>
                <p className="text-xs text-slate-400 mt-1">
                  Fill in your contact details below and I will get back to you promptly.
                </p>
              </div>

              {isSubmitted && (
                <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/40 text-emerald-300 text-xs flex items-center gap-3 animate-fade-in">
                  <CheckCircle2 className="w-5 h-5 shrink-0 text-emerald-400" />
                  <div>
                    <span className="font-bold block text-white">Message Sent Successfully!</span>
                    Thank you for reaching out. I will respond to your message shortly.
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Your Full Name"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="your.email@example.com"
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Write your message or evaluation feedback here..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-950 border border-slate-800 text-white placeholder-slate-500 text-xs sm:text-sm focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-sans resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/20 hover:bg-cyan-400 hover:shadow-cyan-400/30 transition-all flex items-center justify-center gap-2 transform active:scale-[0.99] disabled:opacity-50"
                >
                  {isLoading ? (
                    <span>Sending Message...</span>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
