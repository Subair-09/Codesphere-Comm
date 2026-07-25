import React, { useState } from 'react';
import { X, CheckCircle2, User, Mail, Phone, Briefcase, Sparkles, Send } from 'lucide-react';
import { ApplicationSubmission } from '../../types';

interface JoinCommunityModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: (submission: ApplicationSubmission) => void;
  defaultRole?: string;
}

export const JoinCommunityModal: React.FC<JoinCommunityModalProps> = ({
  isOpen,
  onClose,
  onSubmitSuccess,
  defaultRole = 'Student'
}) => {
  const [role, setRole] = useState(defaultRole);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [track, setTrack] = useState('Full-Stack Software Engineering');
  const [interest, setInterest] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: ApplicationSubmission = {
      id: `sub-${Date.now()}`,
      type: 'community',
      fullName,
      email,
      phone,
      trackOrRole: `${role} - ${track}`,
      message: interest,
      submittedAt: new Date().toLocaleDateString()
    };
    onSubmitSuccess(submission);
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName('');
    setEmail('');
    setPhone('');
    setInterest('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden"
        id="join-community-modal"
      >
        {/* Header */}
        <div className="bg-indigo-950 px-6 py-5 text-white flex justify-between items-center border-b border-indigo-900">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-indigo-800 flex items-center justify-center text-amber-300">
              <Sparkles className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg font-bold tracking-tight">Join CodeSphere Community</h3>
              <p className="text-xs text-indigo-200">Start learning, building & connecting today</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-indigo-200 hover:text-white hover:bg-white/10 transition-colors"
            id="close-join-modal-btn"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-bold text-slate-800">Welcome to CodeSphere!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you <span className="font-semibold text-indigo-700">{fullName}</span> for joining as a <span className="font-semibold text-indigo-700">{role}</span>! We’ve sent a confirmation email to <span className="font-semibold">{email}</span>.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="w-full py-3 px-6 bg-indigo-700 text-white font-medium rounded-xl hover:bg-indigo-800 transition-colors shadow-lg shadow-indigo-200"
                  id="welcome-modal-done-btn"
                >
                  Go to Dashboard / Community
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Role selector */}
              <div>
                <label className="block text-xs font-semibold uppercase tracking-wider text-slate-500 mb-1.5">
                  I want to join as a
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {['Student', 'Volunteer', 'Mentor'].map((r) => (
                    <button
                      type="button"
                      key={r}
                      onClick={() => setRole(r)}
                      className={`py-2 px-3 text-xs font-medium rounded-lg border transition-all ${
                        role === r
                          ? 'bg-indigo-50 border-indigo-600 text-indigo-800 ring-2 ring-indigo-600/20 font-bold'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:bg-slate-100'
                      }`}
                    >
                      {r}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Full Name</label>
                <div className="relative">
                  <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <input
                    type="text"
                    required
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    placeholder="e.g. John Doe"
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Email Address</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 mb-1">Phone Number (Optional)</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+234 ..."
                      className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">Primary Interest Area</label>
                <div className="relative">
                  <Briefcase className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
                  <select
                    value={track}
                    onChange={(e) => setTrack(e.target.value)}
                    className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all appearance-none"
                  >
                    <option value="Full-Stack Software Engineering">Full-Stack Software Engineering</option>
                    <option value="Cloud Computing & DevOps">Cloud Computing & DevOps</option>
                    <option value="Artificial Intelligence & Data Analytics">Artificial Intelligence & Data Analytics</option>
                    <option value="UI/UX & Graphics Design">UI/UX & Graphics Design</option>
                    <option value="Cybersecurity & Infrastructure">Cybersecurity & Infrastructure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-slate-700 mb-1">What are your main goals?</label>
                <textarea
                  rows={2}
                  value={interest}
                  onChange={(e) => setInterest(e.target.value)}
                  placeholder="e.g. Learn React, find a mentor, and work on real volunteer projects..."
                  className="w-full px-3.5 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white transition-all"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full py-3 px-6 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2 group"
                  id="submit-join-form-btn"
                >
                  <span>Complete Registration</span>
                  <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
