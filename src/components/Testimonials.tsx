import React from 'react';
import { Star, Quote } from 'lucide-react';
import { motion } from 'motion/react';
import { Testimonial } from '../types';

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export const Testimonials: React.FC<TestimonialsProps> = ({ testimonials }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };

  return (
    <section className="py-16 sm:py-24 lg:py-28 bg-white border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-14"
        >
          <span className="inline-block py-1 px-3.5 bg-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-bold tracking-widest rounded-md uppercase">
            COMMUNITY TESTIMONIALS
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
            Real People. Real Growth.
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            See how CodeSphere Community has transformed the careers, confidence, and technical abilities of members across different tracks.
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8"
        >
          {testimonials.map((test) => (
            <motion.div
              key={test.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className="p-6 sm:p-8 bg-slate-50 rounded-2xl border border-slate-100 shadow-sm hover:shadow-xl transition-all flex flex-col justify-between relative group"
            >
              <div className="space-y-4">
                {/* Rating Stars & Quote Icon */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-7 h-7 sm:w-8 sm:h-8 text-indigo-200 group-hover:text-indigo-400 transition-colors" />
                </div>

                {/* Quote Content */}
                <p className="text-slate-700 text-xs sm:text-base leading-relaxed italic">
                  "{test.content}"
                </p>
              </div>

              {/* Author Footer */}
              <div className="pt-5 mt-5 border-t border-slate-200/80 flex items-center gap-3.5">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-11 h-11 sm:w-12 sm:h-12 rounded-xl object-cover border-2 border-indigo-100 flex-shrink-0"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <h4 className="text-xs sm:text-sm font-bold text-slate-900">{test.name}</h4>
                  <p className="text-[11px] sm:text-xs font-semibold text-indigo-700">{test.role}</p>
                  <p className="text-[10px] sm:text-[11px] text-slate-400">{test.companyOrSchool}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

