import React, { useState } from 'react';
import { 
  INITIAL_STATS, PROGRAMS, SKILL_PATHS, COURSES, TESTIMONIALS, MENTORS, FAQS 
} from './data/initialData';
import { 
  CommunityStat, Course, Program, ApplicationSubmission 
} from './types';

import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Partners } from './components/Partners';
import { About } from './components/About';
import { TeamSection } from './components/TeamSection';
import { Programs } from './components/Programs';
import { SkillsGrid } from './components/SkillsGrid';
import { FeaturedCourses } from './components/FeaturedCourses';
import { VolunteerSection } from './components/VolunteerSection';
import { MentorshipSection } from './components/MentorshipSection';
import { CertificationSection } from './components/CertificationSection';
import { Testimonials } from './components/Testimonials';
import { FaqSection } from './components/FaqSection';
import { CallToAction } from './components/CallToAction';
import { Footer } from './components/Footer';

import { JoinCommunityModal } from './components/modals/JoinCommunityModal';
import { VolunteerModal } from './components/modals/VolunteerModal';
import { MentorshipModal } from './components/modals/MentorshipModal';
import { CourseModal } from './components/modals/CourseModal';
import { SearchModal } from './components/modals/SearchModal';
import { AdminDashboardModal } from './components/modals/AdminDashboardModal';

export default function App() {
  // App States
  const [stats, setStats] = useState<CommunityStat[]>(INITIAL_STATS);
  const [courses, setCourses] = useState<Course[]>(COURSES);
  const [submissions, setSubmissions] = useState<ApplicationSubmission[]>([]);

  // Modal Control States
  const [joinModalOpen, setJoinModalOpen] = useState(false);
  const [joinModalRole, setJoinModalRole] = useState('Student');

  const [volunteerModalOpen, setVolunteerModalOpen] = useState(false);

  const [mentorshipModalOpen, setMentorshipModalOpen] = useState(false);
  const [mentorshipMode, setMentorshipMode] = useState<'find' | 'become'>('find');

  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const [searchModalOpen, setSearchModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Handlers
  const handleSubmissionSuccess = (submission: ApplicationSubmission) => {
    setSubmissions(prev => [submission, ...prev]);
  };

  const handleUpdateStats = (newStats: CommunityStat[]) => {
    setStats(newStats);
  };

  const handleAddCourse = (newCourse: Course) => {
    setCourses(prev => [newCourse, ...prev]);
  };

  const openJoinModalWithRole = (role: string = 'Student') => {
    setJoinModalRole(role);
    setJoinModalOpen(true);
  };

  const openMentorshipWithMode = (mode: 'find' | 'become' = 'find') => {
    setMentorshipMode(mode);
    setMentorshipModalOpen(true);
  };

  const scrollToSection = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-violet-700 selection:text-white">
      {/* Header */}
      <Header
        onOpenJoinModal={openJoinModalWithRole}
        onOpenSearchModal={() => setSearchModalOpen(true)}
        onOpenAdminModal={() => setAdminModalOpen(true)}
        activeSection="home"
      />

      {/* Main Content Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onExploreClick={() => scrollToSection('#programs')}
          onJoinClick={() => openJoinModalWithRole('Student')}
        />

        {/* 2. Partners Trust Section */}
        <Partners />

        {/* 3. About Section with Statistics */}
        <About stats={stats} />

        {/* 4. Meet the CodeSphere Community Team */}
        <TeamSection
          onOpenJoinModal={openJoinModalWithRole}
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        />

        {/* 5. Core Programs */}
        <Programs
          programs={PROGRAMS}
          onSelectProgram={(p) => {
            if (p.category === 'volunteer') setVolunteerModalOpen(true);
            else if (p.category === 'mentorship') openMentorshipWithMode('find');
            else openJoinModalWithRole(p.title);
          }}
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
          onOpenMentorshipModal={() => openMentorshipWithMode('find')}
          onOpenJoinModal={openJoinModalWithRole}
        />

        {/* 5. In-Demand Skills Grid */}
        <SkillsGrid
          skills={SKILL_PATHS}
          onOpenJoinModal={openJoinModalWithRole}
        />

        {/* 6. Featured Courses & Cohorts */}
        <FeaturedCourses
          courses={courses}
          onSelectCourse={(course) => setSelectedCourse(course)}
        />

        {/* 7. Volunteer Tech Program */}
        <VolunteerSection
          onOpenVolunteerModal={() => setVolunteerModalOpen(true)}
        />

        {/* 8. Mentorship Network */}
        <MentorshipSection
          mentors={MENTORS}
          onOpenMentorshipModal={openMentorshipWithMode}
        />

        {/* 9. Certification Program */}
        <CertificationSection
          onOpenJoinModal={openJoinModalWithRole}
        />

        {/* 10. Community Testimonials */}
        <Testimonials testimonials={TESTIMONIALS} />

        {/* 11. FAQ Section */}
        <FaqSection faqs={FAQS} />

        {/* 12. Call To Action */}
        <CallToAction
          onJoinClick={() => openJoinModalWithRole('Student')}
          onExploreClick={() => scrollToSection('#courses')}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Modals */}
      <JoinCommunityModal
        isOpen={joinModalOpen}
        onClose={() => setJoinModalOpen(false)}
        onSubmitSuccess={handleSubmissionSuccess}
        defaultRole={joinModalRole}
      />

      <VolunteerModal
        isOpen={volunteerModalOpen}
        onClose={() => setVolunteerModalOpen(false)}
        onSubmitSuccess={handleSubmissionSuccess}
      />

      <MentorshipModal
        isOpen={mentorshipModalOpen}
        onClose={() => setMentorshipModalOpen(false)}
        onSubmitSuccess={handleSubmissionSuccess}
        mode={mentorshipMode}
      />

      <CourseModal
        course={selectedCourse}
        onClose={() => setSelectedCourse(null)}
        onSubmitSuccess={handleSubmissionSuccess}
      />

      <SearchModal
        isOpen={searchModalOpen}
        onClose={() => setSearchModalOpen(false)}
        courses={courses}
        skillPaths={SKILL_PATHS}
        programs={PROGRAMS}
        onSelectCourse={(c) => setSelectedCourse(c)}
      />

      <AdminDashboardModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
        stats={stats}
        onUpdateStats={handleUpdateStats}
        courses={courses}
        onAddCourse={handleAddCourse}
        submissions={submissions}
      />
    </div>
  );
}
