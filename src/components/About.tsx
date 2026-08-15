import React from 'react';
import { User, GraduationCap, Target, MessageSquare, Compass, CheckCircle2, Lightbulb } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

export const About: React.FC = () => {
  const profileImgUrl = getAssetUrl('/gowthaman.jpg');

  return (
    <section id="about" className="py-20 relative bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <User className="w-3.5 h-3.5" />
            <span>Profile Overview</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            About <span className="text-cyan-400">Me</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Top Row: Photo Card (4 cols) & Academic Bio Card (8 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-8">

          {/* Column 1: Portrait Photo Card */}
          <div className="lg:col-span-4 bg-slate-900/90 border border-slate-800 rounded-2xl p-4 flex flex-col gap-4 shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="relative w-full h-[340px] sm:h-[380px] rounded-xl overflow-hidden border border-slate-800/80">
              <img
                src={`${import.meta.env.BASE_URL}gowthaman.jpg`}
                alt="Atputhathevarajah Gowthaman"
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent opacity-75" />
              <div className="absolute bottom-3 left-3 right-3 text-left">
                <p className="text-sm font-bold text-white font-display">{personalInfo.name}</p>
                <p className="text-[11px] text-cyan-300 font-mono">{personalInfo.university}</p>
              </div>
            </div>

            <div className="w-full space-y-2 text-xs font-mono text-slate-300 bg-slate-950/60 p-3 rounded-xl border border-slate-800/80">
              <div className="flex justify-between">
                <span className="text-slate-400">Status:</span>
                <span className="text-emerald-400 font-semibold">IT Undergraduate</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Focus:</span>
                <span className="text-cyan-300 font-semibold">AI & ML Enthusiast</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-400">Location:</span>
                <span className="text-slate-200">Sri Lanka</span>
              </div>
            </div>
          </div>

          {/* Column 2: Primary Bio Card */}
          <div className="lg:col-span-8 bg-slate-900/90 border border-slate-800 rounded-2xl p-6 sm:p-8 flex flex-col justify-between shadow-xl relative overflow-hidden group hover:border-cyan-500/30 transition-all">
            <div className="absolute top-0 right-0 p-8 opacity-5 text-cyan-400 pointer-events-none">
              <GraduationCap className="w-48 h-48" />
            </div>

            <div className="space-y-6 relative z-10">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-4">
                <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Academic Background</h3>
                  <p className="text-xs text-slate-400 font-mono">University of Kelaniya • Department of IT</p>
                </div>
              </div>

              {/* Statement of Intent */}
              <div className="p-5 rounded-xl bg-slate-950/70 border border-slate-800/80 text-slate-300 text-sm sm:text-base leading-relaxed space-y-3 font-sans">
                <p className="text-cyan-200/90 italic font-medium text-xs tracking-wide uppercase">
                  Statement of Intent & Academic Profile:
                </p>
                <p>
                  "{personalInfo.aboutText}"
                </p>
              </div>

              {/* Core Strengths */}
              <div className="space-y-3 pt-2">
                <h4 className="text-sm font-semibold text-slate-200 uppercase tracking-wider flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400" />
                  Key Strengths
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {personalInfo.strengths.map((strength, idx) => (
                    <div
                      key={idx}
                      className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/60 flex items-center gap-2 text-xs font-medium text-slate-200 hover:border-cyan-500/30 transition-colors"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                      <span>{strength}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Future Goal Footer Callout */}
            <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-start gap-3 text-xs text-slate-400">
              <Target className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold text-slate-200 uppercase tracking-wider">Future Career Goal: </span>
                <span>{personalInfo.futureGoal}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Row: Career, Technical Focus & Communication Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Career Interests Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-blue-500/10 text-blue-400 border border-blue-500/20">
                  <Compass className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Career Interests</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {personalInfo.careerInterests.map((interest, i) => (
                  <span
                    key={i}
                    className="px-3 py-1.5 rounded-lg bg-slate-800/80 border border-slate-700 text-xs font-medium text-cyan-300 hover:border-cyan-500/40 hover:bg-slate-800 transition-colors"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Technical Interests Card */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-cyan-500/30 transition-all flex flex-col justify-between">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <Lightbulb className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Technical Focus</h3>
              </div>
              <div className="space-y-2">
                {personalInfo.technicalInterests.map((tech, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800 text-xs text-slate-300"
                  >
                    <span>{tech}</span>
                    <span className="text-[10px] text-cyan-400 font-mono">Academic Track</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Communication Strength Spotlight */}
          <div className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl space-y-4 hover:border-cyan-500/30 transition-all flex flex-col justify-between md:col-span-2 lg:col-span-1">
            <div className="space-y-4">
              <div className="flex items-center gap-3 border-b border-slate-800 pb-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="text-base font-bold text-white">Soft Skills</h3>
              </div>
              <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 text-xs text-slate-300 leading-relaxed">
                <span className="font-semibold text-cyan-300 block mb-1">Communication & Teamwork:</span>
                Effective team communication, collaborative problem-solving, and adaptability are key assets I bring to group technical projects.
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
