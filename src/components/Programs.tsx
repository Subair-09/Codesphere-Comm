import React from 'react';
import { HandHeart, GraduationCap, UserCheck, Award, Rocket, Briefcase, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import { Program } from '../types';

interface ProgramsProps {
  programs: Program[];
  onSelectProgram: (program: Program) => void;
  onOpenVolunteerModal: () => void;
  onOpenMentorshipModal: () => void;
  onOpenJoinModal: (role?: string) => void;
}

export const Programs: React.FC<ProgramsProps> = ({
  programs,
  onSelectProgram,
  onOpenVolunteerModal,
  onOpenMentorshipModal
}) => {
  const getProgramIcon = (iconName: string) => {
    switch (iconName) {
      case 'HandHeart': return <HandHeart className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case 'UserCheck': return <UserCheck className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case 'Award': return <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case 'Rocket': return <Rocket className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      case 'Briefcase': return <Briefcase className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
      default: return <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />;
    }
  };

  const handleCardClick = (prog: Program) => {
    if (prog.category === 'volunteer') {
      onOpenVolunteerModal();
    } else if (prog.category === 'mentorship') {
      onOpenMentorshipModal();
    } else {
      onSelectProgram(prog);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 24 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section id="programs" className="py-16 sm:py-20 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-14"
        >
          <span className="inline-block py-1 px-3.5 bg-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-bold tracking-widest rounded-md uppercase">
            OUR CORE PROGRAMS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
            Explore Opportunities to Learn, Build and Grow
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            Whether you're starting your technology journey or advancing your career, CodeSphere Community provides practical opportunities to develop valuable skills and connect with a supportive tech ecosystem.
          </p>
        </motion.div>

        {/* 2-Row Card Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {programs.map((prog) => (
            <motion.div
              key={prog.id}
              variants={itemVariants}
              whileHover={{ y: -6 }}
              onClick={() => handleCardClick(prog)}
              className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-4">
                {/* Icon Badge */}
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:bg-indigo-700 transition-colors">
                  {getProgramIcon(prog.icon)}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {prog.title}
                </h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  {prog.description}
                </p>

                {/* Key Highlights */}
                <ul className="space-y-2 pt-2 border-t border-slate-200/80">
                  {prog.highlights.map((hl, idx) => (
                    <li key={idx} className="text-xs text-slate-700 font-medium flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-indigo-600 flex-shrink-0"></span>
                      <span>{hl}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Action Link */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center text-xs font-bold text-indigo-700 group-hover:text-indigo-800">
                <span>Learn More & Apply</span>
                <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1.5 transition-transform" />
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

