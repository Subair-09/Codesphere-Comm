import React from 'react';
import { CheckCircle2, Users, BookOpen, HeartHandshake, Code2, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { CommunityStat } from '../types';

interface AboutProps {
  stats: CommunityStat[];
}

export const About: React.FC<AboutProps> = ({ stats }) => {
  const checklist = [
    'Practical, industry-relevant technology training',
    'Mentorship from experienced professionals',
    'Volunteer opportunities to gain real-world experience',
    'Community-driven projects and collaboration',
    'Career development and professional growth',
    'Certification preparation and skills validation'
  ];

  const getStatIcon = (iconName: string) => {
    switch (iconName) {
      case 'Users': return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />;
      case 'BookOpen': return <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />;
      case 'HeartHandshake': return <HeartHandshake className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />;
      case 'Code2': return <Code2 className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />;
      default: return <Users className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-700" />;
    }
  };

  return (
    <section id="about" className="py-16 sm:py-24 lg:py-28 bg-white text-slate-900 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Two Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          
          {/* Left Side Content */}
          <motion.div 
            initial={{ opacity: 0, x: -25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 space-y-5 sm:space-y-6"
          >
            <span className="inline-block py-1 px-3.5 bg-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-bold tracking-widest rounded-md uppercase">
              ABOUT CODESPHERE
            </span>

            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-indigo-950 leading-[1.12]">
              Empowering the Next Generation of Technology Professionals
            </h2>

            <p className="text-xs sm:text-base text-slate-600 leading-relaxed">
              CodeSphere Community is a technology-driven community dedicated to helping individuals discover, develop, and apply practical technology skills. Through training, mentorship, volunteering, community projects, and certification programs, we create opportunities for people to learn, collaborate, and grow in the digital economy.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {checklist.map((item, index) => (
                <div key={index} className="flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 sm:w-5 sm:h-5 text-indigo-700 flex-shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side Image Collage + Testimonial Overlay */}
          <motion.div 
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-6 relative"
          >
            <div className="grid grid-cols-2 gap-3 sm:gap-4">
              
              {/* Image 1: Young professional learning */}
              <div className="space-y-3 sm:space-y-4">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl h-48 sm:h-64">
                  <img
                    src="https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=600&auto=format&fit=crop"
                    alt="Young professional learning technology"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl h-36 sm:h-40">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=600&auto=format&fit=crop"
                    alt="Developer working on laptop"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Image 2 & Testimonial Card Overlay */}
              <div className="space-y-3 sm:space-y-4 pt-6 sm:pt-8">
                <div className="rounded-2xl overflow-hidden border border-slate-100 shadow-xl h-36 sm:h-44">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=600&auto=format&fit=crop"
                    alt="People collaborating on a technology project"
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Testimonial Overlay Card */}
                <div className="p-4 sm:p-5 bg-indigo-950 text-white rounded-2xl shadow-2xl border border-indigo-800 space-y-2 relative">
                  <Quote className="w-5 h-5 sm:w-6 sm:h-6 text-indigo-400 opacity-60" />
                  <p className="text-[11px] sm:text-xs font-medium italic text-indigo-100 leading-snug">
                    "CodeSphere Community gave me the opportunity to learn practical skills, connect with like-minded people, and gain confidence."
                  </p>
                  <div className="pt-2 border-t border-indigo-800/80 flex items-center justify-between">
                    <p className="text-[10px] sm:text-xs font-bold text-amber-300">— Community Member</p>
                    <span className="text-[9px] sm:text-[10px] uppercase font-bold text-indigo-300">Verified Member</span>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        {/* Bottom Statistics Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 sm:mt-20 pt-10 sm:pt-12 border-t border-slate-100"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
            {stats.map((stat) => (
              <motion.div
                key={stat.id}
                whileHover={{ y: -4 }}
                className="p-4 sm:p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 transition-all text-center space-y-1.5 sm:space-y-2 group"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 bg-white rounded-xl shadow-md border border-slate-200 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform">
                  {getStatIcon(stat.icon)}
                </div>
                <h3 className="text-2xl sm:text-4xl font-black text-indigo-950">{stat.value}</h3>
                <p className="text-xs sm:text-sm font-bold text-slate-800">{stat.label}</p>
                <p className="text-[10px] sm:text-xs text-slate-500">{stat.subtext}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

