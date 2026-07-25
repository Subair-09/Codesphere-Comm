import React from 'react';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { Mentor } from '../types';

interface MentorshipSectionProps {
  mentors: Mentor[];
  onOpenMentorshipModal: (mode?: 'find' | 'become') => void;
}

export const MentorshipSection: React.FC<MentorshipSectionProps> = ({ mentors, onOpenMentorshipModal }) => {
  const features = [
    'One-on-one mentorship',
    'Career guidance & transition support',
    'Technical guidance & code reviews',
    'Portfolio & GitHub reviews',
    'Mock technical interview preparation'
  ];

  return (
    <section id="mentorship" className="py-20 lg:py-28 bg-indigo-950 text-white overflow-hidden border-t border-indigo-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column Text Content */}
          <div className="lg:col-span-6 space-y-6">
            <span className="inline-block py-1 px-3 bg-amber-400/10 text-amber-300 text-xs font-bold tracking-widest rounded-md uppercase border border-amber-400/20">
              CODESPHERE MENTORSHIP
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.15]">
              Learn From People Who Have Been There
            </h2>

            <p className="text-indigo-100/80 text-base leading-relaxed">
              Connect with experienced technology professionals who can help you navigate your learning journey, develop your skills, build confidence, and make better career decisions.
            </p>

            {/* Feature Checklist */}
            <div className="space-y-3 pt-2">
              {features.map((feat, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded-full bg-indigo-600/50 text-indigo-200 flex items-center justify-center flex-shrink-0 border border-indigo-400/30">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                  </div>
                  <span className="text-sm font-semibold text-indigo-50">{feat}</span>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <button
                onClick={() => onOpenMentorshipModal('find')}
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm rounded-xl shadow-xl shadow-indigo-950 transition-all flex items-center justify-center gap-2.5 group"
                id="find-mentor-btn"
              >
                <span>Find a Mentor</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={() => onOpenMentorshipModal('become')}
                className="w-full sm:w-auto px-6 py-4 bg-indigo-900/60 hover:bg-indigo-900 text-indigo-200 border border-indigo-800 font-bold text-sm rounded-xl transition-all text-center"
              >
                Apply as Mentor
              </button>
            </div>

          </div>

          {/* Right Column Featured Mentor Cards Preview */}
          <div className="lg:col-span-6 space-y-4">
            <p className="text-xs font-bold uppercase tracking-widest text-indigo-300/80 mb-2">
              Featured Industry Mentors
            </p>

            <div className="space-y-4">
              {mentors.map((m) => (
                <div
                  key={m.id}
                  className="p-5 bg-indigo-900/40 border border-indigo-800/80 rounded-2xl flex flex-col sm:flex-row sm:items-center gap-4 hover:border-indigo-500/50 transition-all"
                >
                  <img
                    src={m.avatar}
                    alt={m.name}
                    className="w-14 h-14 rounded-2xl object-cover border-2 border-indigo-500/30 flex-shrink-0"
                    referrerPolicy="no-referrer"
                  />
                  <div className="space-y-1 flex-grow">
                    <div className="flex items-center justify-between">
                      <h4 className="text-base font-bold text-white">{m.name}</h4>
                      <span className="text-[10px] font-bold px-2 py-0.5 bg-emerald-500/20 text-emerald-300 rounded-md border border-emerald-500/30">
                        Available for Matching
                      </span>
                    </div>
                    <p className="text-xs text-indigo-300 font-semibold">{m.role} • {m.company}</p>
                    <p className="text-xs text-indigo-200/80 line-clamp-1">{m.bio}</p>
                    
                    <div className="flex flex-wrap gap-1 pt-1">
                      {m.skills.map((sk, idx) => (
                        <span key={idx} className="text-[10px] bg-indigo-950/80 text-indigo-200 px-2 py-0.5 rounded-md border border-indigo-800">
                          {sk}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
