import React from 'react';
import { ArrowUp, Mail, Terminal } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, contactInfo } from '../data/portfolioData';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer className="bg-[#060911] border-t border-slate-800/80 py-12 relative text-slate-400 text-xs font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800/60">
          
          {/* Left Column: Brand & Title */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-1">
            <div className="flex items-center gap-2 font-bold text-white text-base font-display">
              <Terminal className="w-4 h-4 text-cyan-400" />
              <span>{personalInfo.name}</span>
            </div>
            <p className="text-cyan-400/90 font-mono text-xs">
              {personalInfo.title}
            </p>
            <p className="text-slate-400 text-[11px]">
              {personalInfo.university}
            </p>
          </div>

          {/* Center Column: Social Links */}
          <div className="flex items-center gap-4 text-slate-300 font-mono text-xs">
            <a
              href={contactInfo.gitHub}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <GithubIcon className="w-4 h-4 text-cyan-400" />
              <span>GitHub</span>
            </a>
            <span className="text-slate-400">•</span>
            <a
              href={contactInfo.linkedIn}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <LinkedinIcon className="w-4 h-4 text-blue-400" />
              <span>LinkedIn</span>
            </a>
            <span className="text-slate-400">•</span>
            <a
              href={`mailto:${contactInfo.email}`}
              className="flex items-center gap-1.5 hover:text-cyan-400 transition-colors"
            >
              <Mail className="w-4 h-4 text-emerald-400" />
              <span>Email</span>
            </a>
          </div>

          {/* Right Column: Scroll to top */}
          <button
            onClick={scrollToTop}
            className="p-3 rounded-2xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all group"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
          </button>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left gap-2 text-[11px] text-slate-400 font-mono">
          <div>
            © 2026 {personalInfo.name}. All rights reserved.
          </div>
        </div>

      </div>
    </footer>
  );
};
