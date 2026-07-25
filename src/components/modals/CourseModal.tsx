import React, { useState } from 'react';
import { X, Clock, Award, Users, CheckCircle2, BookOpen, Star, Send } from 'lucide-react';
import { Course, ApplicationSubmission } from '../../types';

interface CourseModalProps {
  course: Course | null;
  onClose: () => void;
  onSubmitSuccess: (submission: ApplicationSubmission) => void;
}

export const CourseModal: React.FC<CourseModalProps> = ({
  course,
  onClose,
  onSubmitSuccess
}) => {
  const [enrolling, setEnrolling] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  if (!course) return null;

  const handleEnrollSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const submission: ApplicationSubmission = {
      id: `crs-${Date.now()}`,
      type: 'course',
      fullName,
      email,
      trackOrRole: `Course Enrollment: ${course.title}`,
      submittedAt: new Date().toLocaleDateString()
    };
    onSubmitSuccess(submission);
    setSubmitted(true);
  };

  const handleCloseModal = () => {
    setEnrolling(false);
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden max-h-[90vh] flex flex-col" id="course-details-modal">
        {/* Banner */}
        <div className="relative h-44 sm:h-52 overflow-hidden flex-shrink-0">
          <img
            src={course.image}
            alt={course.title}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-indigo-950 via-indigo-950/60 to-transparent flex flex-col justify-end p-6 text-white">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-indigo-700 text-white">
                {course.category}
              </span>
              <span className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-white/20 text-white backdrop-blur-md">
                {course.level}
              </span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold">{course.title}</h3>
          </div>
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 p-2 rounded-full bg-black/40 text-white hover:bg-black/70 backdrop-blur-md transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-grow">
          {/* Stats Bar */}
          <div className="grid grid-cols-3 gap-3 p-3 bg-indigo-50/70 rounded-xl border border-indigo-100 text-center">
            <div>
              <p className="text-xs text-slate-500 font-medium">Duration</p>
              <p className="text-sm font-bold text-indigo-950 flex items-center justify-center gap-1 mt-0.5">
                <Clock className="w-3.5 h-3.5 text-indigo-700" />
                {course.duration}
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Rating</p>
              <p className="text-sm font-bold text-amber-600 flex items-center justify-center gap-1 mt-0.5">
                <Star className="w-3.5 h-3.5 fill-amber-500 text-amber-500" />
                {course.rating} / 5.0
              </p>
            </div>
            <div>
              <p className="text-xs text-slate-500 font-medium">Enrolled</p>
              <p className="text-sm font-bold text-slate-800 flex items-center justify-center gap-1 mt-0.5">
                <Users className="w-3.5 h-3.5 text-indigo-700" />
                {course.studentsCount}+ Members
              </p>
            </div>
          </div>

          {/* Description */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1.5">Program Overview</h4>
            <p className="text-slate-700 text-sm leading-relaxed">{course.description}</p>
          </div>

          {/* Syllabus Accordion / Timeline */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-3 flex items-center gap-1.5">
              <BookOpen className="w-4 h-4 text-indigo-700" />
              Syllabus & Curriculum Roadmap
            </h4>
            <div className="space-y-3">
              {course.syllabus.map((item, idx) => (
                <div key={idx} className="p-3.5 bg-slate-50 border border-slate-200/80 rounded-xl hover:border-indigo-300 transition-colors">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-bold px-2 py-0.5 bg-indigo-100 text-indigo-800 rounded-md">
                      {item.week}
                    </span>
                    <span className="text-xs font-medium text-slate-500">Live Cohort Module</span>
                  </div>
                  <h5 className="text-sm font-bold text-slate-900">{item.topic}</h5>
                  <p className="text-xs text-slate-600 mt-1">{item.details}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Enrollment Form or CTA */}
          {submitted ? (
            <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-center space-y-2">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
              <h5 className="font-bold text-emerald-900">Successfully Reserved Seat!</h5>
              <p className="text-xs text-emerald-800">
                Check your email (<span className="font-semibold">{email}</span>) for orientation details and Discord server access.
              </p>
            </div>
          ) : enrolling ? (
            <form onSubmit={handleEnrollSubmit} className="p-4 bg-indigo-50/60 border border-indigo-200 rounded-xl space-y-3">
              <h5 className="font-bold text-indigo-950 text-sm">Enroll in {course.title}</h5>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <input
                  type="text"
                  required
                  placeholder="Full Name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
                <input
                  type="email"
                  required
                  placeholder="Email Address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600"
                />
              </div>
              <div className="flex gap-2">
                <button
                  type="submit"
                  className="flex-1 py-2.5 bg-indigo-700 hover:bg-indigo-800 text-white font-medium rounded-lg text-sm transition-colors shadow-md flex items-center justify-center gap-1.5"
                >
                  <span>Confirm Free Registration</span>
                  <Send className="w-4 h-4" />
                </button>
                <button
                  type="button"
                  onClick={() => setEnrolling(false)}
                  className="px-4 py-2.5 bg-slate-200 hover:bg-slate-300 text-slate-700 font-medium rounded-lg text-sm"
                >
                  Cancel
                </button>
              </div>
            </form>
          ) : (
            <div className="pt-2">
              <button
                onClick={() => setEnrolling(true)}
                className="w-full py-3 px-6 bg-indigo-700 hover:bg-indigo-800 text-white font-semibold rounded-xl transition-all shadow-lg shadow-indigo-200 flex items-center justify-center gap-2"
                id="enroll-now-modal-btn"
              >
                <span>Enroll in Cohort (Free Community Seat)</span>
                <Award className="w-4 h-4" />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
