import React, { useState } from 'react';
import { Briefcase, Code, UserCheck, Heart, Crown, Activity } from 'lucide-react';
import { experienceCategories } from '../data/portfolioData';

export const Experience: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('Academic Projects');

  const getTabIcon = (type: string) => {
    switch (type) {
      case 'Academic Projects':
        return <Code className="w-4 h-4" />;
      case 'Freelance Work':
        return <Briefcase className="w-4 h-4" />;
      case 'Volunteer Work':
        return <Heart className="w-4 h-4" />;
      case 'Leadership Experience':
        return <Crown className="w-4 h-4" />;
      case 'University Activities':
        return <Activity className="w-4 h-4" />;
      default:
        return <UserCheck className="w-4 h-4" />;
    }
  };

  const selectedCategory = experienceCategories.find((cat) => cat.type === activeTab) || experienceCategories[0];

  return (
    <section id="experience" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Briefcase className="w-3.5 h-3.5" />
            <span>Practical Background</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Experience & <span className="text-cyan-400">Activities</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Authentic records of academic projects, freelance initiatives, volunteer service, leadership roles, and university engagements.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {experienceCategories.map((cat) => {
            const isActive = activeTab === cat.type;
            return (
              <button
                key={cat.type}
                onClick={() => setActiveTab(cat.type)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold transition-all duration-200 border ${
                  isActive
                    ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                    : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
                }`}
              >
                {getTabIcon(cat.type)}
                <span>{cat.type}</span>
              </button>
            );
          })}
        </div>

        {/* Active Tab Items */}
        <div className="max-w-4xl mx-auto space-y-6">
          {selectedCategory.items.map((item, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl space-y-4 hover:border-cyan-500/40 transition-all duration-300"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-cyan-950 text-[10px] font-mono text-cyan-300 border border-cyan-800">
                      {selectedCategory.type}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold text-white font-display mt-1">
                    {item.title}
                  </h3>
                  <p className="text-xs font-mono text-cyan-400">
                    {item.organizationOrRole}
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400 bg-slate-950 px-3 py-1 rounded-lg border border-slate-800 self-start sm:self-auto">
                  {item.period}
                </span>
              </div>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                {item.description}
              </p>

              {item.highlights && item.highlights.length > 0 && (
                <div className="pt-2 space-y-2">
                  <span className="text-xs uppercase tracking-wider font-semibold text-slate-400">
                    Key Highlights:
                  </span>
                  <div className="space-y-1.5 pl-2">
                    {item.highlights.map((hl, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-slate-300">
                        <span className="text-cyan-400 font-bold">•</span>
                        <span>{hl}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
