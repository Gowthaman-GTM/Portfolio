import React from 'react';
import { FileText, Download, Eye, CheckCircle2, GraduationCap } from 'lucide-react';
import { personalInfo, contactInfo } from '../data/portfolioData';

interface ResumeProps {
  onOpenCVModal: () => void;
}

export const Resume: React.FC<ResumeProps> = ({ onOpenCVModal }) => {
  return (
    <section id="resume" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <FileText className="w-3.5 h-3.5" />
            <span>Curriculum Vitae</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            Resume / <span className="text-cyan-400">CV</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Download my latest CV to learn more about my education, technical skills, projects, and experience.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Featured Resume Preview Card */}
        <div className="max-w-4xl mx-auto bg-slate-900/90 border border-slate-800 rounded-3xl p-6 sm:p-10 shadow-2xl relative overflow-hidden group hover:border-cyan-500/40 transition-all duration-300">
          
          {/* Subtle Accent Background Grid */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none" />

          <div className="flex flex-col md:flex-row items-center justify-between gap-8 relative z-10">
            
            {/* Left Column: Summary Info */}
            <div className="space-y-6 flex-1 text-left">
              
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 bg-cyan-950/60 px-3 py-1 rounded-full border border-cyan-800">
                  <GraduationCap className="w-3.5 h-3.5" />
                  <span>University Profile Document • PPD II</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-white font-display">
                  {personalInfo.name}
                </h3>
                <p className="text-cyan-400 text-sm font-mono font-medium">
                  {personalInfo.title} | {personalInfo.university}
                </p>
              </div>

              {/* Exact user requirement sentence */}
              <p className="text-sm text-slate-300 leading-relaxed bg-slate-950/60 p-4 rounded-xl border border-slate-800/80">
                "Download my latest CV to learn more about my education, technical skills, projects, and experience."
              </p>

              {/* Core CV Summary Highlights */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-300">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Degree: BSc in Information Technology</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Expected Graduation: {personalInfo.graduationYear}</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Specialization: Software, Cybersecurity, AI/ML</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Core Tools: Java, Python, C++, Linux, Git</span>
                </div>
              </div>

              {/* Actions */}
              <div className="flex flex-wrap items-center gap-4 pt-2">
                <a
                  href="/Gowthaman_Atputhathevarajah_CV.pdf"
                  download="Gowthaman_Atputhathevarajah_CV.pdf"
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 hover:shadow-cyan-400/35 transition-all transform hover:-translate-y-0.5 cursor-pointer"
                >
                  <Download className="w-4 h-4" />
                  <span>Download My CV</span>
                </a>

                <button
                  onClick={onOpenCVModal}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-950 border border-slate-700 text-slate-200 font-semibold text-sm hover:bg-slate-800 hover:border-cyan-500/40 transition-all"
                >
                  <Eye className="w-4 h-4 text-cyan-400" />
                  <span>Quick View Document</span>
                </button>
              </div>

            </div>

            {/* Right Column: Visual Document Card */}
            <div className="w-full md:w-64 bg-slate-950 border border-slate-800 rounded-2xl p-4 shadow-2xl flex flex-col justify-between space-y-4 shrink-0 text-left">
              <div className="flex items-center justify-between pb-3 border-b border-slate-800">
                <div className="flex items-center gap-2">
                  <FileText className="w-5 h-5 text-cyan-400" />
                  <span className="text-xs font-bold text-white font-display">Official CV</span>
                </div>
                <span className="text-[10px] font-mono text-cyan-300 bg-cyan-950 px-2 py-0.5 rounded border border-cyan-800/60">
                  PDF
                </span>
              </div>

              <div className="relative w-full h-32 rounded-xl overflow-hidden border border-slate-800">
                <img
                  src="/gowthaman.jpg"
                  alt="Atputhathevarajah Gowthaman"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                <div className="absolute bottom-2 left-2 right-2 text-[10px] font-mono text-cyan-300 truncate">
                  {personalInfo.name}
                </div>
              </div>

              <div className="space-y-1.5 text-[11px] text-slate-400 font-mono">
                <div className="truncate text-slate-200">Email: {contactInfo.email}</div>
                <div className="truncate text-slate-300">Phone: {contactInfo.phone}</div>
              </div>

              <button
                onClick={onOpenCVModal}
                className="w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 border border-slate-700 text-xs text-cyan-300 font-semibold transition-colors flex items-center justify-center gap-1.5"
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Full Screen View</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
