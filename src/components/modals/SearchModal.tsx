import React, { useState } from 'react';
import { X, Search, BookOpen, ArrowRight } from 'lucide-react';
import { Course, SkillPath, Program } from '../../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  courses: Course[];
  skillPaths: SkillPath[];
  programs: Program[];
  onSelectCourse: (course: Course) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  courses,
  skillPaths,
  programs,
  onSelectCourse
}) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredCourses = query.trim()
    ? courses.filter(c => c.title.toLowerCase().includes(query.toLowerCase()) || c.description.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()))
    : courses.slice(0, 3);

  const filteredSkills = query.trim()
    ? skillPaths.filter(s => s.name.toLowerCase().includes(query.toLowerCase()) || s.description.toLowerCase().includes(query.toLowerCase()))
    : skillPaths.slice(0, 4);

  const filteredPrograms = query.trim()
    ? programs.filter(p => p.title.toLowerCase().includes(query.toLowerCase()) || p.description.toLowerCase().includes(query.toLowerCase()))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden" id="search-modal">
        {/* Search Input Bar */}
        <div className="p-4 bg-white border-b border-slate-100 flex items-center gap-3">
          <Search className="w-5 h-5 text-indigo-600 flex-shrink-0" />
          <input
            type="text"
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search programs, courses, skills (e.g. AWS, AI, Volunteer, Full-Stack)..."
            className="w-full text-base bg-transparent focus:outline-none text-slate-900 placeholder:text-slate-400"
          />
          <button onClick={onClose} className="p-1 rounded-lg text-slate-400 hover:text-slate-700">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Results Container */}
        <div className="p-4 max-h-[60vh] overflow-y-auto space-y-4">
          {/* Featured Courses */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {query ? 'Courses' : 'Popular Courses'}
            </h4>
            <div className="space-y-2">
              {filteredCourses.map((c) => (
                <div
                  key={c.id}
                  onClick={() => {
                    onSelectCourse(c);
                    onClose();
                  }}
                  className="p-3 rounded-xl hover:bg-indigo-50 transition-colors cursor-pointer border border-transparent hover:border-indigo-200 flex items-center justify-between group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs flex-shrink-0">
                      <BookOpen className="w-5 h-5" />
                    </div>
                    <div>
                      <h5 className="text-sm font-bold text-slate-800 group-hover:text-indigo-900">{c.title}</h5>
                      <p className="text-xs text-slate-500">{c.category} • {c.duration}</p>
                    </div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all" />
                </div>
              ))}
            </div>
          </div>

          {/* Skill Tracks */}
          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
              {query ? 'Skill Paths' : 'Explore Skills'}
            </h4>
            <div className="grid grid-cols-2 gap-2">
              {filteredSkills.map((s) => (
                <div key={s.id} className="p-2.5 rounded-lg border border-slate-100 bg-slate-50 hover:bg-indigo-50/50 hover:border-indigo-200 transition-all">
                  <p className="text-xs font-bold text-slate-800">{s.name}</p>
                  <p className="text-[11px] text-slate-500 truncate">{s.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Programs */}
          {filteredPrograms.length > 0 && (
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">Programs</h4>
              <div className="space-y-2">
                {filteredPrograms.map((p) => (
                  <div key={p.id} className="p-3 rounded-xl bg-indigo-50/50 border border-indigo-100">
                    <h5 className="text-sm font-bold text-indigo-950">{p.title}</h5>
                    <p className="text-xs text-slate-600">{p.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
