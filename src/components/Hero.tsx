import React, { useState, useEffect } from 'react';
import { ArrowRight, Sparkles, Award, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface HeroProps {
  onExploreClick: () => void;
  onJoinClick: () => void;
}

const HERO_IMAGES = [
  'https://imgur.com/UK4qtCt.png',
  'https://imgur.com/YZ39xcx.png',
  'https://imgur.com/Stq4gUS.png'
];

export const Hero: React.FC<HeroProps> = ({ onExploreClick, onJoinClick }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + HERO_IMAGES.length) % HERO_IMAGES.length);
  };

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_IMAGES.length);
  };

  return (
    <section id="hero" className="relative min-h-[580px] sm:min-h-[640px] lg:min-h-[700px] flex items-center bg-indigo-950 text-white overflow-hidden border-b border-indigo-900">
      
      {/* Background Image Carousel */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={currentSlide}
            src={HERO_IMAGES[currentSlide]}
            alt={`CodeSphere Community Slide ${currentSlide + 1}`}
            initial={{ opacity: 0, scale: 1.08, x: 20 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.96, x: -20 }}
            transition={{ duration: 0.9, ease: [0.25, 1, 0.5, 1] }}
            className={`w-full h-full object-cover ${
              currentSlide === 0 || currentSlide === 2 ? 'object-[center_25%]' : 'object-center'
            }`}
            referrerPolicy="no-referrer"
          />
        </AnimatePresence>

        {/* Multi-layered Dark Gradient Overlay for Maximum Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-950/95 via-indigo-950/80 to-indigo-950/60 sm:to-indigo-950/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-indigo-950/90 via-transparent to-indigo-950/50" />
      </div>

      {/* Hero Content Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-center">
          
          {/* Left Column Text Content */}
          <motion.div 
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className="lg:col-span-8 space-y-5 sm:space-y-8 text-center lg:text-left"
          >
            
            {/* Eyebrow Badge */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-flex items-center gap-2 py-1 px-3.5 bg-indigo-500/20 border border-indigo-400/30 text-indigo-200 text-[11px] sm:text-xs font-bold tracking-widest rounded-full uppercase backdrop-blur-md"
            >
              <Sparkles className="w-3.5 h-3.5 text-amber-300" />
              <span>WELCOME TO CODESPHERE COMMUNITY</span>
            </motion.div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.08] sm:leading-[1.02]">
              Learn. Build.<br className="hidden sm:inline" />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-300 via-indigo-200 to-white">
                Connect. Grow.
              </span>
            </h1>

            {/* Supporting Paragraph */}
            <p className="text-sm sm:text-lg text-indigo-100/90 leading-relaxed max-w-2xl mx-auto lg:mx-0 font-normal">
              Join a growing community of technology enthusiasts. Gain practical skills, learn from experienced mentors, contribute through volunteer programs, earn certifications, and build the confidence to advance your career.
            </p>

            {/* CTA Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 sm:gap-4 pt-1">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onExploreClick}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 bg-indigo-600 hover:bg-indigo-500 text-white font-bold text-sm sm:text-base rounded-xl shadow-xl shadow-indigo-950/50 transition-all flex items-center justify-center gap-2.5 group cursor-pointer"
                id="hero-explore-programs-btn"
              >
                <span>Explore Our Programs</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onJoinClick}
                className="w-full sm:w-auto min-h-[48px] px-8 py-3.5 border border-indigo-300/40 text-white rounded-xl font-bold text-sm sm:text-base bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                id="hero-join-community-btn"
              >
                <Sparkles className="w-4 h-4 text-amber-300" />
                <span>Join the Community</span>
              </motion.button>
            </div>

            {/* Micro Trust Indicators */}
            <div className="pt-4 border-t border-indigo-800/60 flex flex-wrap items-center justify-center lg:justify-start gap-4 sm:gap-6 text-xs text-indigo-200/80 font-medium">
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>100% Free Core Membership</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Hands-on Project Sprints</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Global Mentor Network</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column Highlights / Badges */}
          <div className="lg:col-span-4 hidden lg:block relative">
            <div className="space-y-4 max-w-xs ml-auto">
              
              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4, ease: 'easeInOut' }}
                className="bg-indigo-900/60 backdrop-blur-xl p-4 rounded-2xl border border-indigo-700/50 shadow-2xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-emerald-500/20 text-emerald-300 rounded-xl border border-emerald-500/30 flex items-center justify-center font-bold text-base flex-shrink-0">
                  ✓
                </div>
                <div>
                  <div className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold">Expert Support</div>
                  <div className="text-sm font-bold text-white">Mentorship & Guidance</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: 'easeInOut', delay: 0.5 }}
                className="bg-indigo-900/60 backdrop-blur-xl p-4 rounded-2xl border border-indigo-700/50 shadow-2xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-amber-500/20 text-amber-300 rounded-xl border border-amber-500/30 flex items-center justify-center font-bold text-base flex-shrink-0">
                  ★
                </div>
                <div>
                  <div className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold">Practical Skills</div>
                  <div className="text-sm font-bold text-white">Accelerated Growth</div>
                </div>
              </motion.div>

              <motion.div 
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 4.5, ease: 'easeInOut', delay: 1 }}
                className="bg-indigo-900/60 backdrop-blur-xl p-4 rounded-2xl border border-indigo-700/50 shadow-2xl flex items-center gap-3.5"
              >
                <div className="w-10 h-10 bg-indigo-500/20 text-indigo-300 rounded-xl border border-indigo-500/30 flex items-center justify-center font-bold text-base flex-shrink-0">
                  <Award className="w-5 h-5 text-indigo-300" />
                </div>
                <div>
                  <div className="text-[10px] text-indigo-300 uppercase tracking-wider font-bold">Industry Recognized</div>
                  <div className="text-sm font-bold text-white">Certifications & Pathways</div>
                </div>
              </motion.div>

            </div>
          </div>

        </div>
      </div>

      {/* Slider Nav Controls & Pagination Dots */}
      <div className="absolute bottom-5 right-4 sm:right-8 z-20 flex items-center gap-3 bg-indigo-950/70 backdrop-blur-md px-3.5 py-2 rounded-full border border-indigo-800/80 shadow-lg">
        <button
          onClick={handlePrev}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer min-w-[32px] min-h-[32px]"
          aria-label="Previous slide"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        <div className="flex items-center gap-1.5">
          {HERO_IMAGES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`transition-all duration-300 rounded-full cursor-pointer ${
                currentSlide === idx
                  ? 'w-6 h-2 bg-amber-300'
                  : 'w-2 h-2 bg-white/40 hover:bg-white/70'
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

        <button
          onClick={handleNext}
          className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer min-w-[32px] min-h-[32px]"
          aria-label="Next slide"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>

    </section>
  );
};


