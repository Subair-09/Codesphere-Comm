import React, { useState } from 'react';
import { X, CheckCircle2, UserCheck, Send } from 'lucide-react';
import { ApplicationSubmission } from '../../types';

interface MentorshipModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (submission: ApplicationSubmission) => void;
  mode?: 'find' | 'become';
}

export const MentorshipModal: React.FC<MentorshipModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
  mode = 'find'
}) => {
  const [activeTab, setActiveTab] = useState<'find' | 'become'>(mode);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [track, setTrack] = useState('Full-Stack Engineering');
  const [goals, setGoals] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: ApplicationSubmission = {
      id: `men-${Date.now()}`,
      type: 'mentor',
      fullName,
      email,
      trackOrRole: activeTab === 'find' ? `Mentee Seeking (${track})` : `Mentor Applicant (${track})`,
      message: goals,
      submittedAt: new Date().toLocaleDateString()
    };
    onSubmitSuccess(submission);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden" id="mentorship-modal">
        <div className="bg-indigo-950 px-6 py-5 text-white flex justify-between items-center border-b border-indigo-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-800 flex items-center justify-center text-amber-300">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">CodeSphere Mentorship Network</h3>
              <p className="text-xs text-indigo-200">1-on-1 career & technical guidance</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {/* Mode Switcher */}
          {!submitted && (
            <div className="flex p-1 bg-slate-100 rounded-xl mb-5">
              <button
                type="button"
                onClick={() => setActiveTab('find')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'find' ? 'bg-white text-indigo-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                I Need a Mentor (Mentee)
              </button>
              <button
                type="button"
                onClick={() => setActiveTab('become')}
                className={`flex-1 py-2 text-xs font-semibold rounded-lg transition-all ${
                  activeTab === 'become' ? 'bg-white text-indigo-900 shadow-sm font-bold' : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                I Want to Mentor Others
              </button>
            </div>
          )}

          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">
                {activeTab === 'find' ? 'Mentorship Match Requested!' : 'Mentor Application Received!'}
              </h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <span className="font-semibold text-indigo-700">{fullName}</span>! Our mentorship coordinator will contact you at <span className="font-semibold">{email}</span> within 48 hours for matching.
              </p>
              <div className="pt-4">
                <button onClick={handleReset} className="w-full py-3 px-6 bg-indigo-700 text-white font-medium rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200">
                  Return to Mentorship Hub
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                <input
                  type="text"
                  required
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="e.g. David Alaba"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="david@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Technology Track</label>
                <select
                  value={track}
                  onChange={(e) => setTrack(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="Full-Stack Engineering">Full-Stack Engineering (React / Node)</option>
                  <option value="Cloud Computing (AWS / Azure)">Cloud Computing (AWS / Azure)</option>
                  <option value="Data Analytics & AI">Data Analytics & AI</option>
                  <option value="UI/UX Product Design">UI/UX Product Design</option>
                  <option value="Cybersecurity">Cybersecurity</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">
                  {activeTab === 'find' ? 'What are your career goals & timeline?' : 'Briefly describe your professional background & experience'}
                </label>
                <textarea
                  rows={3}
                  required
                  value={goals}
                  onChange={(e) => setGoals(e.target.value)}
                  placeholder={
                    activeTab === 'find'
                      ? 'e.g. Preparing for my first frontend role, need help with mock interviews and resume feedback...'
                      : 'e.g. 5 years as Senior Software Engineer at FinTech, eager to give back 2 hours/month...'
                  }
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  <span>{activeTab === 'find' ? 'Request Mentorship Match' : 'Submit Mentor Application'}</span>
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
