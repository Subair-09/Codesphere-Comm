import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';

interface CallToActionProps {
  onJoinClick: () => void;
  onExploreClick: () => void;
}

export const CallToAction: React.FC<CallToActionProps> = ({ onJoinClick, onExploreClick }) => {
  return (
    <section className="bg-indigo-950 text-white py-20 lg:py-24 relative overflow-hidden border-t border-indigo-900">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10 space-y-8">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md bg-white/10 border border-white/20 text-amber-300 text-xs font-bold uppercase tracking-widest backdrop-blur-md">
          <Sparkles className="w-4 h-4 animate-pulse" />
          <span>START YOUR TECH JOURNEY TODAY</span>
        </div>

        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
          Your Future in Tech Starts Here.
        </h2>

        <p className="text-base sm:text-xl text-indigo-100/90 max-w-3xl mx-auto leading-relaxed">
          Join CodeSphere Community, learn valuable technology skills, connect with mentors, contribute to meaningful projects, and become part of a growing community building the future of technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <button
            onClick={onJoinClick}
            className="w-full sm:w-auto px-9 py-4 bg-white hover:bg-indigo-50 text-indigo-950 font-black text-sm rounded-xl shadow-2xl hover:scale-105 transition-all flex items-center justify-center gap-2.5 active:scale-95"
            id="cta-join-community-btn"
          >
            <Sparkles className="w-4 h-4 text-indigo-700" />
            <span>Join the Community</span>
          </button>

          <button
            onClick={onExploreClick}
            className="w-full sm:w-auto px-9 py-4 bg-indigo-900/60 hover:bg-indigo-900 text-white border border-indigo-800 font-bold text-sm rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2"
            id="cta-explore-programs-btn"
          >
            <BookOpen className="w-4 h-4" />
            <span>Explore Programs</span>
          </button>
        </div>

      </div>
    </section>
  );
};
