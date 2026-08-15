import React from 'react';
import { Mail, ArrowRight, Download } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, contactInfo } from '../data/portfolioData';
import { getAssetUrl } from '../utils/assets';

interface HeroProps {
  onOpenCVModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenCVModal }) => {
  const scrollToProjects = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('projects');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({
        top: elementPosition - navHeight,
        behavior: 'smooth'
      });
    }
  };

  const cvPdfUrl = getAssetUrl('/Gowthaman_Atputhathevarajah_CV.pdf');
  const profileImgUrl = getAssetUrl('/gowthaman.jpg');

  return (
    <section id="home" className="relative min-h-screen pt-24 sm:pt-32 lg:pt-36 pb-12 sm:pb-16 flex flex-col justify-center overflow-hidden">
      {/* Background Decorative Ambient Gradients */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] sm:w-[600px] h-[350px] sm:h-[600px] bg-gradient-to-tr from-cyan-600/15 via-blue-600/10 to-indigo-600/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#1e293b15_1px,transparent_1px),linear-gradient(to_bottom,#1e293b15_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center">
          
          {/* Left Column: Content */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-5 sm:space-y-6 text-left">
            {/* Status / University Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1 sm:px-3.5 sm:py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/25 text-cyan-300 text-[11px] sm:text-xs font-medium tracking-wide">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-400"></span>
              </span>
              <span className="truncate">University of Kelaniya • IT Undergraduate</span>
            </div>

            {/* Main Headline */}
            <div className="space-y-1.5 sm:space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight font-display">
                Hi, I'm <br />
                <span className="bg-gradient-to-r from-white via-cyan-100 to-cyan-400 bg-clip-text text-transparent">
                  {personalInfo.name}
                </span>
              </h1>
              <p className="text-lg sm:text-2xl font-semibold text-cyan-400/90 font-mono pt-1">
                {personalInfo.title}
              </p>
            </div>

            {/* Short Introduction */}
            <p className="text-sm sm:text-lg text-slate-300 max-w-2xl leading-relaxed font-normal">
              "{personalInfo.shortIntro}"
            </p>

            {/* Call To Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 sm:gap-4 pt-2 w-full sm:w-auto">
              <a
                href="#projects"
                onClick={scrollToProjects}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyan-500 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 hover:bg-cyan-400 hover:shadow-cyan-400/35 transition-all transform hover:-translate-y-0.5 active:translate-y-0 text-center"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href={cvPdfUrl}
                download="Gowthaman_Atputhathevarajah_CV.pdf"
                onClick={() => onOpenCVModal()}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-slate-800/90 border border-slate-700 text-white font-semibold text-sm hover:bg-slate-700/80 hover:border-cyan-500/50 transition-all transform hover:-translate-y-0.5 cursor-pointer text-center"
              >
                <Download className="w-4 h-4 text-cyan-400" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Social Links & Quick Contact */}
            <div className="pt-5 sm:pt-6 border-t border-slate-800/80 w-full flex items-center justify-between sm:justify-start sm:gap-6">
              <span className="text-xs uppercase tracking-wider text-slate-400 font-medium">
                Connect With Me:
              </span>
              <div className="flex items-center gap-3">
                <a
                  href={contactInfo.gitHub}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                >
                  <GithubIcon className="w-5 h-5" />
                </a>
                <a
                  href={contactInfo.linkedIn}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                >
                  <LinkedinIcon className="w-5 h-5" />
                </a>
                <a
                  href={`mailto:${contactInfo.email}`}
                  aria-label="Email Gowthaman"
                  className="p-2.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 hover:bg-slate-800/80 transition-all shadow-sm"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Professional Profile Card */}
          <div className="lg:col-span-5 relative flex flex-col items-center justify-center pt-4 lg:pt-0">
            <div className="relative w-full max-w-md group">
              <div className="absolute -inset-1.5 bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 rounded-3xl blur-xl opacity-40 group-hover:opacity-75 transition duration-700 pointer-events-none" />
              
              <div className="relative bg-slate-900/90 border border-slate-800 rounded-3xl p-3 sm:p-4 shadow-2xl backdrop-blur-2xl overflow-hidden">
                <div className="relative w-full h-[280px] sm:h-[370px] rounded-2xl overflow-hidden border border-slate-800 group/img">
                  <img
                    src={profileImgUrl}
                    alt="Atputhathevarajah Gowthaman - IT Undergraduate & AI/ML Enthusiast"
                    className="w-full h-full object-cover object-top group-hover/img:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
