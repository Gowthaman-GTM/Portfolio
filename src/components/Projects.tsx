import React from 'react';
import { FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projectItems } from '../data/portfolioData';

export const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 relative bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-semibold tracking-wider uppercase">
            <FolderGit2 className="w-3.5 h-3.5" />
            <span>Academic Showcase</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white font-display">
            My <span className="text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-400 text-sm max-w-xl">
            Undergraduate software development projects, coursework repositories, and upcoming capstone assignments.
          </p>
          <div className="w-16 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full" />
        </div>

        {/* Projects Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectItems.map((project) => (
            <div
              key={project.id}
              className="bg-slate-900/90 border border-slate-800 rounded-2xl p-6 shadow-xl flex flex-col justify-between hover:border-cyan-500/40 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="space-y-4">
                
                {/* Category */}
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-[11px] font-mono text-cyan-400">
                    {project.category}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-xs text-slate-300 leading-relaxed font-sans">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-0.5 rounded bg-slate-950 text-[10px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Links Footer */}
              <div className="pt-6 mt-6 border-t border-slate-800/80 flex items-center justify-between text-xs">
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-slate-300 hover:text-cyan-400 transition-colors font-mono"
                >
                  <GithubIcon className="w-4 h-4 text-cyan-400" />
                  <span>Source Code</span>
                </a>
                {project.demoUrl && project.demoUrl !== '#' && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-slate-400 hover:text-white transition-colors font-mono"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                    <span>Live Demo</span>
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
