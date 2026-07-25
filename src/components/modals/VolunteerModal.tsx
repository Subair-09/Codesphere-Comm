import React, { useState } from 'react';
import { X, CheckCircle2, HandHeart, Send, Github } from 'lucide-react';
import { ApplicationSubmission } from '../../types';

interface VolunteerModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (submission: ApplicationSubmission) => void;
}

export const VolunteerModal: React.FC<VolunteerModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess
}) => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [githubUrl, setGithubUrl] = useState('');
  const [role, setRole] = useState('Frontend Developer');
  const [hoursPerWeek, setHoursPerWeek] = useState('5-10 hours/week');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: ApplicationSubmission = {
      id: `vol-${Date.now()}`,
      type: 'volunteer',
      fullName,
      email,
      trackOrRole: `Volunteer - ${role} (${hoursPerWeek})`,
      message: `GitHub: ${githubUrl}`,
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
      <div className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden" id="volunteer-modal">
        <div className="bg-indigo-950 px-6 py-5 text-white flex justify-between items-center border-b border-indigo-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-800 flex items-center justify-center text-pink-300">
              <HandHeart className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">CodeSphere Volunteer Tech Program</h3>
              <p className="text-xs text-indigo-200">Contribute code, design, or project management</p>
            </div>
          </div>
          <button onClick={onClose} className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Volunteer Application Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <span className="font-semibold text-indigo-700">{fullName}</span>! Our project leads will review your application for the <span className="font-semibold text-indigo-700">{role}</span> position and email you at <span className="font-semibold">{email}</span>.
              </p>
              <div className="pt-4">
                <button onClick={handleReset} className="w-full py-3 px-6 bg-indigo-700 text-white font-medium rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200">
                  Close & Explore Open Sprints
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
                  placeholder="e.g. Sarah Jenkins"
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
                  placeholder="sarah@example.com"
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Volunteer Specialty</label>
                <select
                  value={role}
                  onChange={(e) => setRole(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="Frontend Developer (React/TS)">Frontend Developer (React / TS)</option>
                  <option value="Backend Developer (Node/Python)">Backend Developer (Node / Python)</option>
                  <option value="Cloud & DevOps Engineer">Cloud & DevOps Engineer</option>
                  <option value="UI/UX Designer (Figma)">UI/UX Designer (Figma)</option>
                  <option value="Technical Content Writer">Technical Content Writer</option>
                  <option value="Community & Event Lead">Community & Event Lead</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">GitHub / Portfolio URL (Optional)</label>
                <div className="relative">
                  <Github className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="url"
                    value={githubUrl}
                    onChange={(e) => setGithubUrl(e.target.value)}
                    placeholder="https://github.com/yourusername"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Weekly Availability</label>
                <select
                  value={hoursPerWeek}
                  onChange={(e) => setHoursPerWeek(e.target.value)}
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
                >
                  <option value="3-5 hours/week">3-5 hours / week</option>
                  <option value="5-10 hours/week">5-10 hours / week</option>
                  <option value="10+ hours/week">10+ hours / week</option>
                </select>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                >
                  <span>Submit Volunteer Application</span>
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
