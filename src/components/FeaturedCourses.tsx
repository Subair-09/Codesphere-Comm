import React, { useState } from 'react';
import { Clock, Star, Users, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Course } from '../types';

interface FeaturedCoursesProps {
  courses: Course[];
  onSelectCourse: (course: Course) => void;
}

export const FeaturedCourses: React.FC<FeaturedCoursesProps> = ({
  courses,
  onSelectCourse
}) => {
  const [activeTab, setActiveTab] = useState<string>('All');

  const categories = ['All', 'Software', 'Cloud', 'Data & AI'];

  const filteredCourses = activeTab === 'All'
    ? courses
    : courses.filter(c => c.category === activeTab);

  return (
    <section id="courses" className="py-16 sm:py-24 bg-slate-50 border-t border-slate-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-12">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-3 max-w-2xl"
          >
            <span className="inline-block py-1 px-3.5 bg-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-bold tracking-widest rounded-md uppercase">
              FEATURED COURSES & COHORTS
            </span>
            <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
              Start Building Your Technology Skills Today
            </h2>
            <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
              Hands-on, project-driven training cohorts led by experienced mentors to guide you step-by-step.
            </p>
          </motion.div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveTab(cat)}
                className={`px-4 py-2.5 text-xs font-bold rounded-xl transition-all cursor-pointer min-h-[40px] ${
                  activeTab === cat
                    ? 'bg-indigo-700 text-white shadow-md shadow-indigo-200'
                    : 'bg-white hover:bg-slate-100 text-slate-700 border border-slate-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Courses Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence>
            {filteredCourses.map((course) => (
              <motion.div
                key={course.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -6 }}
                className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Course Thumbnail Image */}
                  <div className="relative h-44 sm:h-48 overflow-hidden">
                    <img
                      src={course.image}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 left-3 flex gap-2">
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-indigo-700 text-white shadow-md">
                        {course.category}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[10px] sm:text-xs font-bold bg-slate-900/80 text-white backdrop-blur-md">
                        {course.level}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 sm:p-6 space-y-3">
                    <div className="flex items-center justify-between text-xs text-slate-500 font-medium">
                      <span className="flex items-center gap-1 text-indigo-700 font-semibold">
                        <Clock className="w-3.5 h-3.5" />
                        {course.duration}
                      </span>
                      <span className="flex items-center gap-1 text-amber-600 font-bold">
                        <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                        {course.rating}
                      </span>
                    </div>

                    <h3 className="text-lg sm:text-xl font-bold text-slate-900 group-hover:text-indigo-700 transition-colors leading-snug">
                      {course.title}
                    </h3>

                    <p className="text-slate-600 text-xs sm:text-sm leading-relaxed line-clamp-2">
                      {course.description}
                    </p>
                  </div>
                </div>

                {/* Footer CTA */}
                <div className="p-5 sm:p-6 pt-0 border-t border-slate-100 mt-2 flex items-center justify-between">
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Users className="w-3.5 h-3.5 text-indigo-600" />
                    {course.studentsCount}+ Members
                  </span>

                  <button
                    onClick={() => onSelectCourse(course)}
                    className="py-2.5 px-4 bg-indigo-50 hover:bg-indigo-700 text-indigo-700 hover:text-white font-bold text-xs rounded-xl transition-all flex items-center gap-1.5 group-hover:bg-indigo-700 group-hover:text-white cursor-pointer min-h-[40px]"
                  >
                    <span>Learn More</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

