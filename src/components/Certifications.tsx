import React, { useState } from 'react';
import { Award, ShieldCheck, BookOpen, Presentation, Trophy, ExternalLink } from 'lucide-react';
import { certificationItems } from '../data/portfolioData';

export const Certifications: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = [
    'All',
    'Professional Certifications',
    'Online Courses',
    'Workshops',
    'Hackathons & Competitions',
    'Awards & Achievements'
  ];

  const filteredItems =
    activeCategory === 'All'
      ? certificationItems
      : certificationItems.filter((item) => item.category === activeCategory);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Professional Certifications':
        return <ShieldCheck className="w-5 h-5 text-cyan-400" />;
      case 'Online Courses':
        return <BookOpen className="w-5 h-5 text-blue-400" />;
      case 'Workshops':
        return <Presentation className="w-5 h-5 text-purple-400" />;
      case 'Hackathons & Competitions':
        return <Trophy className="w-5 h-5 text-amber-400" />;
      default:
        return <Award className="w-5 h-5 text-emerald-400" />;
    }
  };

  return (
    <section id="achievements" className="py-20 relative bg-slate-900/40 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Award className="w-3.5 h-3.5" />
            <span>Credentials & Recognition</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Certifications & <span className="text-cyan-400">Achievements</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Structured cards for professional credentials, online coursework, technical workshops, hackathons, and academic honors.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3.5 py-2 rounded-xl text-xs font-semibold transition-all border ${
                activeCategory === cat
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((cert, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div className="space-y-4">
                
                {/* Header */}
                <div className="flex items-center justify-between">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getCategoryIcon(cert.category)}
                  </div>
                  <span className="px-2.5 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-cyan-400 border border-slate-800">
                    {cert.category}
                  </span>
                </div>

                {/* Name */}
                <h3 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors font-display">
                  {cert.name}
                </h3>

                {/* Organization & Year */}
                <div className="space-y-1 text-xs font-mono">
                  <div className="text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">Issuer:</span>
                    <span className="text-white font-semibold">{cert.issuingOrganization}</span>
                  </div>
                  <div className="text-slate-300 flex items-center justify-between">
                    <span className="text-slate-400">Year:</span>
                    <span className="text-cyan-400">{cert.year}</span>
                  </div>
                </div>

              </div>

              {/* Link Footer */}
              <div className="pt-4 mt-4 border-t border-slate-800/80 flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Credential:</span>
                <span className="inline-flex items-center gap-1 text-cyan-300 bg-slate-950 px-2.5 py-1 rounded border border-slate-800">
                  <ExternalLink className="w-3 h-3 text-cyan-400" />
                  {cert.credentialLink}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
