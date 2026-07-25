import React, { useState } from 'react';
import { X, Settings, Plus, Save, Check, FileText } from 'lucide-react';
import { CommunityStat, Course, ApplicationSubmission } from '../../types';

interface AdminDashboardModalProps {
  isOpen: boolean;
  onClose: () => void;
  stats: CommunityStat[];
  onUpdateStats: (newStats: CommunityStat[]) => void;
  courses: Course[];
  onAddCourse: (newCourse: Course) => void;
  submissions: ApplicationSubmission[];
}

export const AdminDashboardModal: React.FC<AdminDashboardModalProps> = ({
  isOpen,
  onClose,
  stats,
  onUpdateStats,
  courses,
  onAddCourse,
  submissions
}) => {
  const [activeTab, setActiveTab] = useState<'stats' | 'courses' | 'submissions'>('stats');
  
  // Local edit state for stats
  const [editableStats, setEditableStats] = useState<CommunityStat[]>(stats);
  const [savedSuccess, setSavedSuccess] = useState(false);

  // New Course Form State
  const [newTitle, setNewTitle] = useState('');
  const [newCategory, setNewCategory] = useState<'Software' | 'Cloud' | 'Data & AI' | 'Design & Product' | 'Security'>('Software');
  const [newDuration, setNewDuration] = useState('8 Weeks');
  const [newLevel, setNewLevel] = useState<'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels'>('Beginner');
  const [newDesc, setNewDesc] = useState('');

  if (!isOpen) return null;

  const handleStatChange = (id: string, field: 'value' | 'label' | 'subtext', val: string) => {
    setEditableStats(prev =>
      prev.map(s => (s.id === id ? { ...s, [field]: val } : s))
    );
  };

  const handleSaveStats = () => {
    onUpdateStats(editableStats);
    setSavedSuccess(true);
    setTimeout(() => setSavedSuccess(false), 2500);
  };

  const handleCreateCourse = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newTitle) return;
    const courseObj: Course = {
      id: `course-${Date.now()}`,
      title: newTitle,
      category: newCategory,
      description: newDesc || 'Comprehensive hands-on training module designed for CodeSphere members.',
      duration: newDuration,
      level: newLevel,
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1200&auto=format&fit=crop',
      rating: 5.0,
      studentsCount: 1,
      featured: true,
      syllabus: [
        { week: 'Week 1-2', topic: 'Core Foundations & Tools', details: 'Introduction and setup.' },
        { week: 'Week 3-4', topic: 'Practical Lab Projects', details: 'Hands-on building.' }
      ]
    };
    onAddCourse(courseObj);
    setNewTitle('');
    setNewDesc('');
    setActiveTab('courses');
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/80 backdrop-blur-md animate-fadeIn">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col max-h-[88vh]" id="admin-dashboard-modal">
        {/* Header */}
        <div className="bg-indigo-950 px-6 py-4 text-white flex justify-between items-center border-b border-indigo-900">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-lg bg-indigo-800 text-amber-300 flex items-center justify-center">
              <Settings className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold flex items-center gap-2">
                CodeSphere Admin Control Center
                <span className="px-2 py-0.5 rounded-md text-[10px] uppercase font-bold bg-indigo-700 text-white">Live Admin</span>
              </h3>
              <p className="text-xs text-indigo-200">Update live statistics, add programs, and manage incoming applications</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Navigation */}
        <div className="flex border-b border-slate-200 bg-slate-50 px-6 pt-2">
          <button
            onClick={() => setActiveTab('stats')}
            className={`py-3 px-4 font-semibold text-xs border-b-2 transition-all ${
              activeTab === 'stats' ? 'border-indigo-700 text-indigo-950 bg-white rounded-t-lg font-bold' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Update Live Stats
          </button>
          <button
            onClick={() => setActiveTab('courses')}
            className={`py-3 px-4 font-semibold text-xs border-b-2 transition-all ${
              activeTab === 'courses' ? 'border-indigo-700 text-indigo-950 bg-white rounded-t-lg font-bold' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Manage Courses ({courses.length})
          </button>
          <button
            onClick={() => setActiveTab('submissions')}
            className={`py-3 px-4 font-semibold text-xs border-b-2 transition-all flex items-center gap-1.5 ${
              activeTab === 'submissions' ? 'border-indigo-700 text-indigo-950 bg-white rounded-t-lg font-bold' : 'border-transparent text-slate-600 hover:text-slate-900'
            }`}
          >
            Submitted Applications ({submissions.length})
            {submissions.length > 0 && (
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            )}
          </button>
        </div>

        {/* Tab Body */}
        <div className="p-6 overflow-y-auto flex-grow space-y-6">
          {activeTab === 'stats' && (
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">Community Statistics Dashboard</h4>
                  <p className="text-xs text-slate-500">Edit values below to instantly update the public website statistics counter</p>
                </div>
                <button
                  onClick={handleSaveStats}
                  className="py-2 px-4 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs rounded-xl transition-all flex items-center gap-1.5 shadow-md shadow-indigo-200"
                >
                  {savedSuccess ? <Check className="w-4 h-4 text-emerald-300" /> : <Save className="w-4 h-4" />}
                  <span>{savedSuccess ? 'Stats Updated!' : 'Save Changes'}</span>
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {editableStats.map((st) => (
                  <div key={st.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2">
                    <label className="block text-[11px] font-bold text-slate-400 uppercase tracking-wider">{st.label}</label>
                    <input
                      type="text"
                      value={st.value}
                      onChange={(e) => handleStatChange(st.id, 'value', e.target.value)}
                      className="w-full text-xl font-black text-indigo-950 px-3 py-1.5 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                    />
                    <input
                      type="text"
                      value={st.subtext}
                      onChange={(e) => handleStatChange(st.id, 'subtext', e.target.value)}
                      className="w-full text-xs text-slate-600 px-3 py-1 bg-white border border-slate-200 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'courses' && (
            <div className="space-y-6">
              {/* Form to Add Course */}
              <form onSubmit={handleCreateCourse} className="p-4 bg-indigo-50/70 border border-indigo-200 rounded-xl space-y-3">
                <h4 className="font-bold text-indigo-950 text-sm flex items-center gap-1.5">
                  <Plus className="w-4 h-4 text-indigo-700" />
                  Add New Course / Program to Platform
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    required
                    placeholder="Course Title (e.g. Next.js & GraphQL Masterclass)"
                    value={newTitle}
                    onChange={(e) => setNewTitle(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  />
                  <select
                    value={newCategory}
                    onChange={(e) => setNewCategory(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  >
                    <option value="Software">Software Engineering</option>
                    <option value="Cloud">Cloud & DevOps</option>
                    <option value="Data & AI">Data Analytics & AI</option>
                    <option value="Design & Product">Design & Product</option>
                    <option value="Security">Cybersecurity</option>
                  </select>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <input
                    type="text"
                    placeholder="Duration (e.g. 6 Weeks)"
                    value={newDuration}
                    onChange={(e) => setNewDuration(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  />
                  <select
                    value={newLevel}
                    onChange={(e) => setNewLevel(e.target.value as any)}
                    className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                  >
                    <option value="Beginner">Beginner</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Advanced">Advanced</option>
                    <option value="All Levels">All Levels</option>
                  </select>
                </div>

                <textarea
                  rows={2}
                  placeholder="Short description..."
                  value={newDesc}
                  onChange={(e) => setNewDesc(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-xs focus:ring-2 focus:ring-indigo-600 focus:outline-none"
                />

                <button
                  type="submit"
                  className="py-2.5 px-5 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold text-xs rounded-lg transition-colors shadow-md"
                >
                  Publish Course to Website
                </button>
              </form>

              {/* Course list */}
              <div className="space-y-2">
                <h5 className="text-xs font-bold uppercase tracking-wider text-slate-400">Active Courses</h5>
                {courses.map((c) => (
                  <div key={c.id} className="p-3 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-between">
                    <div>
                      <h6 className="text-xs font-bold text-slate-900">{c.title}</h6>
                      <p className="text-[11px] text-slate-500">{c.category} • {c.duration} • {c.level}</p>
                    </div>
                    <span className="px-2 py-1 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded-md">
                      Published
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'submissions' && (
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-slate-900 text-sm">Recent Registrations & Applications</h4>
                <span className="text-xs text-slate-500">{submissions.length} Total</span>
              </div>

              {submissions.length === 0 ? (
                <div className="p-8 text-center bg-slate-50 rounded-xl border border-dashed border-slate-300 space-y-2">
                  <FileText className="w-8 h-8 text-slate-400 mx-auto" />
                  <p className="text-sm text-slate-600">No applications received yet in this session.</p>
                  <p className="text-xs text-slate-400">Submissions from Join Community, Volunteer, and Mentorship forms will appear here in real time.</p>
                </div>
              ) : (
                <div className="space-y-2">
                  {submissions.map((sub) => (
                    <div key={sub.id} className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-1">
                      <div className="flex justify-between items-start">
                        <span className="px-2 py-0.5 bg-indigo-100 text-indigo-800 text-[10px] font-bold rounded-md uppercase">
                          {sub.type}
                        </span>
                        <span className="text-[11px] text-slate-400">{sub.submittedAt}</span>
                      </div>
                      <h5 className="text-sm font-bold text-slate-900">{sub.fullName}</h5>
                      <p className="text-xs text-indigo-700 font-medium">{sub.email} {sub.phone && `• ${sub.phone}`}</p>
                      <p className="text-xs text-slate-600 bg-white p-2 rounded-lg border border-slate-100 mt-1">
                        <strong>Track/Role:</strong> {sub.trackOrRole}
                        {sub.message && <span className="block mt-1"><strong>Note:</strong> {sub.message}</span>}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
