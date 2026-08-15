import React from 'react';
import { GraduationCap, Calendar, BookOpen, Trophy, Users, School } from 'lucide-react';
import { educationItems } from '../data/portfolioData';

export const Education: React.FC = () => {
  return (
    <section id="education" className="py-20 relative bg-slate-900/50 border-t border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Education & <span className="text-cyan-400">Qualifications</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Formal degree studies at University of Kelaniya and secondary education foundation.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative max-w-4xl mx-auto">
          
          {/* Central Vertical Timeline Line */}
          <div className="hidden sm:block absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500/50 to-slate-800" />

          <div className="space-y-10">
            {educationItems.map((edu, idx) => (
              <div key={idx} className="relative flex flex-col sm:flex-row items-start gap-6 group">
                
                {/* Timeline Dot Icon */}
                <div className="hidden sm:flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border-2 border-cyan-500 text-cyan-400 shadow-xl shadow-cyan-500/20 shrink-0 z-10 group-hover:scale-105 transition-transform">
                  {edu.isUniversity ? <GraduationCap className="w-8 h-8" /> : <School className="w-8 h-8 text-blue-400" />}
                </div>

                {/* Content Card */}
                <div className="flex-1 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 shadow-xl hover:border-cyan-500/40 transition-all duration-300">
                  
                  {/* Top Header */}
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 border-b border-slate-800">
                    <div>
                      <div className="flex items-center gap-2">
                        <span className="text-xs font-mono text-cyan-400 font-semibold uppercase tracking-wider">
                          {edu.isUniversity ? "Higher Education" : "Secondary Education"}
                        </span>
                        {edu.expectedGraduation && (
                          <span className="px-2 py-0.5 rounded bg-cyan-950 text-[10px] font-mono text-cyan-300 border border-cyan-800">
                            Expected Graduation: {edu.expectedGraduation}
                          </span>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-white font-display mt-1">
                        {edu.institution}
                      </h3>
                      <p className="text-sm font-semibold text-slate-300">
                        {edu.degree}
                      </p>
                    </div>

                    <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-slate-950 text-xs font-mono text-slate-400 border border-slate-800 shrink-0 self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  {/* Details Body */}
                  <div className="pt-6 space-y-6">
                    
                    {/* Relevant Coursework (University) */}
                    {edu.coursework && edu.coursework.length > 0 && (
                      <div className="space-y-3">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                          <BookOpen className="w-4 h-4 text-cyan-400" />
                          Relevant Academic Coursework
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {edu.coursework.map((course, cIdx) => (
                            <div
                              key={cIdx}
                              className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/80 text-xs text-slate-300 flex items-center gap-2"
                            >
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shrink-0" />
                              <span>{course}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {/* Academic Achievements */}
                    {edu.achievements && edu.achievements.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-amber-400" />
                          Academic Highlights
                        </h4>
                        <ul className="space-y-1.5 pl-2 text-xs text-slate-300">
                          {edu.achievements.map((ach, aIdx) => (
                            <li key={aIdx} className="flex items-start gap-2">
                              <span className="text-cyan-400 font-bold">•</span>
                              <span>{ach}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}

                    {/* University Activities */}
                    {edu.activities && edu.activities.length > 0 && (
                      <div className="space-y-2">
                        <h4 className="text-xs font-bold text-slate-300 uppercase tracking-wider flex items-center gap-2">
                          <Users className="w-4 h-4 text-blue-400" />
                          University & Extracurricular Activities
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {edu.activities.map((act, actIdx) => (
                            <span
                              key={actIdx}
                              className="px-3 py-1 rounded-lg bg-slate-950 text-xs text-slate-300 border border-slate-800"
                            >
                              {act}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}

                  </div>

                </div>

              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
