import React, { useState } from 'react';
import { Cpu, Code, Server, Database, Smartphone, Wrench, Shield, CheckCircle } from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

export const Skills: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const getCategoryIcon = (title: string) => {
    switch (title) {
      case 'Programming':
        return <Code className="w-5 h-5 text-cyan-400" />;
      case 'Web / Backend':
        return <Server className="w-5 h-5 text-blue-400" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-400" />;
      case 'Mobile':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Tools':
        return <Wrench className="w-5 h-5 text-amber-400" />;
      case 'Cybersecurity':
        return <Shield className="w-5 h-5 text-red-400" />;
      default:
        return <Cpu className="w-5 h-5 text-cyan-400" />;
    }
  };

  const categoriesList = ['All', ...skillCategories.map((c) => c.title)];

  const filteredCategories =
    selectedCategory === 'All'
      ? skillCategories
      : skillCategories.filter((c) => c.title === selectedCategory);

  return (
    <section id="skills" className="py-20 relative bg-slate-900/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <Cpu className="w-3.5 h-3.5" />
            <span>Technical Competencies</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            My <span className="text-cyan-400">Skills</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Categorized technical stack focused on core computer science concepts, web, mobile, database systems, and cybersecurity fundamentals.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categoriesList.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all duration-200 border ${
                selectedCategory === cat
                  ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-lg shadow-cyan-500/20'
                  : 'bg-slate-900/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Category Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((catGroup, idx) => (
            <div
              key={idx}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 pb-4 mb-4 border-b border-slate-800">
                  <div className="p-2.5 rounded-xl bg-slate-950 border border-slate-800 group-hover:border-cyan-500/30 transition-colors">
                    {getCategoryIcon(catGroup.title)}
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white font-display">
                      {catGroup.title}
                    </h3>
                    <span className="text-[11px] text-slate-400 font-mono">
                      {catGroup.skills.length} Technologies
                    </span>
                  </div>
                </div>

                {/* Skills Cards Grid */}
                <div className="grid grid-cols-1 gap-2.5">
                  {catGroup.skills.map((skill, sIdx) => (
                    <div
                      key={sIdx}
                      className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 flex items-center justify-between gap-3 hover:bg-slate-800/50 hover:border-slate-700 transition-all"
                    >
                      <div className="flex items-center gap-2.5 min-w-0 flex-1">
                        <CheckCircle className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                        <span className="text-xs font-semibold text-slate-200 truncate" title={skill.name}>
                          {skill.name}
                        </span>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-cyan-300 border border-slate-800 shrink-0 whitespace-nowrap">
                        {skill.level}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
