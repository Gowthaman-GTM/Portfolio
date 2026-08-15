import React, { useState } from 'react';
import { X, Download, Printer, GraduationCap, Mail, Phone, FileText, Eye } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo, contactInfo } from '../data/portfolioData';

interface CVModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CVModal: React.FC<CVModalProps> = ({ isOpen, onClose }) => {
  const [viewMode, setViewMode] = useState<'preview' | 'pdf'>('preview');

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Gowthaman_Atputhathevarajah_CV.pdf';
    link.download = 'Gowthaman_Atputhathevarajah_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="bg-slate-900 border border-slate-800 rounded-2xl sm:rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden my-4 sm:my-8">
        
        {/* Modal Header Controls */}
        <div className="p-4 sm:p-5 bg-slate-950 border-b border-slate-800 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base sm:text-lg font-bold text-white font-display">
                Curriculum Vitae
              </h3>
              <p className="text-xs text-slate-400 font-mono">
                {personalInfo.name} • Official CV Document
              </p>
            </div>
          </div>

          {/* Controls & View Mode Toggle */}
          <div className="flex items-center gap-2">
            <div className="hidden sm:flex bg-slate-900 p-1 rounded-xl border border-slate-800 mr-2">
              <button
                onClick={() => setViewMode('preview')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'preview'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <Eye className="w-3.5 h-3.5" />
                <span>Interactive View</span>
              </button>
              <button
                onClick={() => setViewMode('pdf')}
                className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  viewMode === 'pdf'
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200'
                }`}
              >
                <FileText className="w-3.5 h-3.5" />
                <span>PDF Document</span>
              </button>
            </div>

            <button
              onClick={handleDownload}
              className="px-3.5 py-1.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs flex items-center gap-1.5 shadow-md shadow-cyan-500/20 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download PDF</span>
            </button>

            <button
              onClick={handlePrint}
              className="hidden md:flex px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold items-center gap-1.5 border border-slate-700 transition-all"
            >
              <Printer className="w-3.5 h-3.5 text-cyan-400" />
              <span>Print</span>
            </button>

            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white border border-slate-700 transition-colors"
              aria-label="Close CV Modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Mode Toggle Mobile */}
        <div className="sm:hidden flex bg-slate-950 px-4 py-2 border-b border-slate-800 justify-center gap-2">
          <button
            onClick={() => setViewMode('preview')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center ${
              viewMode === 'preview'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-900 text-slate-400'
            }`}
          >
            Interactive View
          </button>
          <button
            onClick={() => setViewMode('pdf')}
            className={`flex-1 py-1.5 rounded-lg text-xs font-semibold text-center ${
              viewMode === 'pdf'
                ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                : 'bg-slate-900 text-slate-400'
            }`}
          >
            PDF Document
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="flex-1 overflow-y-auto p-3 sm:p-8 bg-slate-950/60">
          
          {viewMode === 'pdf' ? (
            <div className="w-full h-[72vh] rounded-2xl overflow-hidden border border-slate-800 bg-white">
              <iframe
                src="/Gowthaman_Atputhathevarajah_CV.pdf#toolbar=1"
                className="w-full h-full"
                title="Gowthaman CV PDF Preview"
              />
            </div>
          ) : (
            /* Document Page Replica View */
            <div className="max-w-3xl mx-auto bg-white text-slate-900 rounded-xl p-6 sm:p-10 shadow-2xl border border-slate-200 font-sans">
              
              {/* Document Header */}
              <div className="mb-6">
                <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight font-display">
                  ATPUTHATHEVARAJAH GOWTHAMAN
                </h1>
                <p className="text-sm sm:text-base font-bold text-slate-900 mt-1">
                  IT UNDERGRADUATE | AI & MACHINE LEARNING ENTHUSIAST
                </p>
                
                {/* Contact Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-6 mt-4 text-xs sm:text-sm text-slate-900">
                  <div className="flex items-center gap-2 truncate">
                    <Mail className="w-4 h-4 text-slate-700 shrink-0" />
                    <a href={`mailto:${contactInfo.email}`} className="hover:underline truncate">
                      {contactInfo.email}
                    </a>
                  </div>

                  <div className="flex items-center gap-2 truncate">
                    <LinkedinIcon className="w-4 h-4 text-slate-700 shrink-0" />
                    <a href={contactInfo.linkedIn} target="_blank" rel="noopener noreferrer" className="hover:underline truncate underline">
                      Gowthaman Atputhathevarajah
                    </a>
                  </div>

                  <div className="flex items-center gap-2 truncate">
                    <Phone className="w-4 h-4 text-slate-700 shrink-0" />
                    <span>{contactInfo.phone}</span>
                  </div>

                  <div className="flex items-center gap-2 truncate">
                    <GithubIcon className="w-4 h-4 text-slate-700 shrink-0" />
                    <a href={contactInfo.gitHub} target="_blank" rel="noopener noreferrer" className="hover:underline truncate underline">
                      Gowthaman-GTM
                    </a>
                  </div>
                </div>
              </div>

              {/* Section 1: PROFILE */}
              <div className="mb-6">
                <div className="w-full bg-[#E2E2E2] px-4 py-1.5 rounded-xl font-bold text-slate-900 italic tracking-wide text-xs sm:text-sm mb-3">
                  PROFILE
                </div>
                <p className="text-xs sm:text-sm text-slate-800 leading-relaxed text-justify">
                  I have a strong interest in software development and computer programming, with a focus on Artificial Intelligence and Machine Learning. As an AI & Machine Learning enthusiast, I continuously learn new technologies and strengthen my technical knowledge. I am seeking an opportunity to gain practical experience, work on real projects, and apply AI and ML concepts to develop real-world solutions while contributing to the technical growth of an organization.
                </p>
              </div>

              {/* Section 2: TECHNICAL SKILLS */}
              <div className="mb-6">
                <div className="w-full bg-[#E2E2E2] px-4 py-1.5 rounded-xl font-bold text-slate-900 italic tracking-wide text-xs sm:text-sm mb-3">
                  TECHNICAL SKILLS
                </div>
                <div className="grid grid-cols-3 gap-4 text-xs sm:text-sm text-slate-900 font-medium">
                  <div className="space-y-1">
                    <p>Java</p>
                    <p>Python</p>
                    <p>C++</p>
                  </div>
                  <div className="space-y-1">
                    <p>HTML</p>
                    <p>CSS</p>
                    <p>MySQL</p>
                  </div>
                  <div className="space-y-1">
                    <p>Cybersecurity Basics</p>
                    <p>React</p>
                    <p>NodeJs</p>
                  </div>
                </div>
              </div>

              {/* Section 3: PROJECTS */}
              <div className="mb-6">
                <div className="w-full bg-[#E2E2E2] px-4 py-1.5 rounded-xl font-bold text-slate-900 italic tracking-wide text-xs sm:text-sm mb-3">
                  PROJECTS
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-900">
                  <div>
                    <h4 className="font-bold text-slate-900">Employee Leave Management System</h4>
                    <p className="text-slate-800 mt-1 pl-3">
                      • Developed a Java-based OOP system to manage employee records ,leave requests and leave approval - Java, MySql, JDBC
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">Game Development</h4>
                    <p className="text-slate-800 mt-1 pl-3">
                      • Developed a simple console-based application using C++ to improve programming fundamentals.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">Task Management System – Group Project</h4>
                    <p className="text-slate-800 mt-1 pl-3">
                      • Developed a web-based task management system as part of a group project, including task and project management features using HTML, CSS, JavaScript, React, and MySQL. Contributed to the development, database integration, and deployment of the application.
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 4: EDUCATION */}
              <div className="mb-6">
                <div className="w-full bg-[#E2E2E2] px-4 py-1.5 rounded-xl font-bold text-slate-900 italic tracking-wide text-xs sm:text-sm mb-3">
                  EDUCATION
                </div>
                <div className="space-y-4 text-xs sm:text-sm text-slate-900">
                  <div>
                    <h4 className="font-bold text-slate-900">BSc (Hons) in Information Technology (Reading)</h4>
                    <p className="text-slate-700 pl-4 mt-0.5">
                      Department of Industrial Management, University of Kelaniya 2025 - 2029
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">Diploma in Information Technology</h4>
                    <p className="text-slate-700 pl-4 mt-0.5">
                      DMI Computer Education,Jaffna
                    </p>
                  </div>

                  <div>
                    <h4 className="font-bold text-slate-900">Diploma in Fluent English</h4>
                    <p className="text-slate-700 pl-4 mt-0.5">
                      DMI Computer Education,Jaffna
                    </p>
                  </div>
                </div>
              </div>

              {/* Section 5: ADDITIONAL INFORMATION */}
              <div className="mb-2">
                <div className="w-full bg-[#E2E2E2] px-4 py-1.5 rounded-xl font-bold text-slate-900 italic tracking-wide text-xs sm:text-sm mb-3">
                  ADDITIONAL INFORMATION
                </div>
                <div className="space-y-2 text-xs sm:text-sm text-slate-900 pl-3">
                  <p>• <b>Languages:</b> English ( Professional Proficiency), Tamil(Native).</p>
                  <p>• <b>Soft Skills:</b> Problem solving ,Time Management, Effective Communication, Critical Thinking</p>
                </div>
              </div>

            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-slate-950 border-t border-slate-800 flex justify-between items-center">
          <div className="text-xs text-slate-400 hidden sm:block font-mono">
            Document Ready for Viewing and Download
          </div>
          <div className="flex gap-3 ml-auto">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
            >
              Close
            </button>
            <button
              onClick={handleDownload}
              className="px-5 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-xs shadow-lg shadow-cyan-500/20 flex items-center gap-1.5 transition-all"
            >
              <Download className="w-4 h-4" />
              <span>Download Official CV</span>
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
