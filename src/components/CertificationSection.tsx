import React from 'react';
import { ShieldCheck, ArrowRight, Cloud, Cpu, Terminal } from 'lucide-react';

interface CertificationSectionProps {
  onOpenJoinModal: (role?: string) => void;
}

export const CertificationSection: React.FC<CertificationSectionProps> = ({ onOpenJoinModal }) => {
  const certTracks = [
    {
      title: 'AWS Certified Solutions Architect & Developer',
      org: 'Amazon Web Services',
      level: 'Associate & Professional',
      icon: <Cloud className="w-6 h-6 text-amber-500" />,
      desc: 'Structured cohort preparation covering VPCs, IAM, Serverless Lambda, EC2, and practice exam simulations.'
    },
    {
      title: 'Microsoft Azure Administrator (AZ-104 & AZ-900)',
      org: 'Microsoft Azure',
      level: 'Fundamentals & Administrator',
      icon: <Cpu className="w-6 h-6 text-sky-500" />,
      desc: 'Hands-on Azure portal labs, Active Directory identity management, Virtual Machine clusters, and study groups.'
    },
    {
      title: 'Meta Front-End & Back-End Professional Certs',
      org: 'Meta / Coursera Path',
      level: 'Professional Certificate',
      icon: <Terminal className="w-6 h-6 text-indigo-600" />,
      desc: 'Master React, Advanced JS, Python, and SQL with peer code reviews and verified certificate projects.'
    }
  ];

  return (
    <section id="certification" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <span className="inline-block py-1 px-3 bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest rounded-md uppercase">
            PROFESSIONAL CERTIFICATION PREP
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
            Validate Your Skills. Advance Your Career.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            CodeSphere Community helps members prepare for industry-recognized professional technology certifications through structured learning cohorts, practical exam preparation, mock tests, and peer support.
          </p>
        </div>

        {/* 3 Certification Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {certTracks.map((track, idx) => (
            <div
              key={idx}
              className="p-8 bg-slate-50 border border-slate-100 rounded-2xl hover:border-indigo-200 hover:shadow-xl transition-all flex flex-col justify-between group"
            >
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-xl bg-white border border-slate-200 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                  {track.icon}
                </div>

                <div>
                  <span className="text-[10px] uppercase font-bold text-indigo-700 tracking-wider">
                    {track.org}
                  </span>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors mt-0.5">
                    {track.title}
                  </h3>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {track.desc}
                </p>

                <div className="pt-2 flex items-center gap-2 text-xs font-semibold text-slate-700">
                  <ShieldCheck className="w-4 h-4 text-emerald-600" />
                  <span>{track.level}</span>
                </div>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/80">
                <button
                  onClick={() => onOpenJoinModal('Student')}
                  className="w-full py-2.5 bg-white hover:bg-indigo-700 text-slate-800 hover:text-white font-bold text-xs rounded-xl border border-slate-200 hover:border-indigo-700 transition-all flex items-center justify-center gap-2 group-hover:bg-indigo-700 group-hover:text-white"
                >
                  <span>Join Exam Prep Cohort</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ))}
        </div>



      </div>
    </section>
  );
};
