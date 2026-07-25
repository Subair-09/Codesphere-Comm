import React from 'react';
import { HandHeart, ArrowRight, Github, FolderGit2, Users2 } from 'lucide-react';

interface VolunteerSectionProps {
  onOpenVolunteerModal: () => void;
}

export const VolunteerSection: React.FC<VolunteerSectionProps> = ({ onOpenVolunteerModal }) => {
  const benefits = [
    {
      title: 'Gain Real-World Experience',
      desc: 'Work in agile developer sprints, submit pull requests, and participate in peer code reviews led by senior engineers.',
      icon: <FolderGit2 className="w-5 h-5 text-indigo-700" />
    },
    {
      title: 'Build Your Portfolio',
      desc: 'Produce verified contributions on open-source and social impact projects that showcase your talent to hiring partners.',
      icon: <Github className="w-5 h-5 text-indigo-700" />
    },
    {
      title: 'Connect With the Tech Community',
      desc: 'Build lasting relationships with fellow developers, UI/UX designers, cloud engineers, and product managers.',
      icon: <Users2 className="w-5 h-5 text-indigo-700" />
    }
  ];

  return (
    <section id="volunteer" className="py-20 lg:py-28 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Image */}
          <div className="lg:col-span-6 order-2 lg:order-1 relative">
            <div className="relative mx-auto">
              <div className="relative rounded-3xl overflow-hidden border-8 border-white shadow-2xl bg-slate-900">
                <img
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1000&auto=format&fit=crop"
                  alt="Young African tech volunteers collaborating"
                  className="w-full h-[400px] sm:h-[480px] object-cover hover:scale-105 transition-transform duration-700"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Overlay Badge */}
                <div className="absolute bottom-6 left-6 right-6 p-4 bg-slate-950/90 backdrop-blur-md border border-indigo-500/30 rounded-2xl text-white flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-indigo-700 flex items-center justify-center text-white">
                      <HandHeart className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">Active Volunteer Sprints</p>
                      <p className="text-[10px] text-indigo-200">12+ Projects in Production</p>
                    </div>
                  </div>
                  <span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 text-[10px] font-bold rounded-full border border-emerald-500/40">
                    Open Seats
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column Content */}
          <div className="lg:col-span-6 order-1 lg:order-2 space-y-6">
            <span className="inline-block py-1 px-3 bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest rounded-md uppercase">
              VOLUNTEER TECH PROGRAM
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight leading-[1.15]">
              Learn by Doing. Grow by Contributing.
            </h2>

            <p className="text-slate-600 text-base leading-relaxed">
              Join our volunteer technology program and gain practical experience by working with other passionate individuals on real-world community and technology projects.
            </p>

            {/* 3 Key Benefits */}
            <div className="space-y-4 pt-2">
              {benefits.map((b, idx) => (
                <div key={idx} className="p-4 bg-slate-50 border border-slate-100 rounded-2xl flex items-start gap-4 hover:border-indigo-200 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-white border border-slate-200 flex items-center justify-center flex-shrink-0 shadow-sm">
                    {b.icon}
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">{b.title}</h4>
                    <p className="text-xs text-slate-600 mt-1 leading-relaxed">{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="pt-4">
              <button
                onClick={onOpenVolunteerModal}
                className="px-8 py-4 bg-indigo-700 hover:bg-indigo-800 text-white font-bold text-sm rounded-xl shadow-xl shadow-indigo-200 transition-all flex items-center gap-2.5 group"
                id="become-volunteer-btn"
              >
                <span>Become a Volunteer</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
