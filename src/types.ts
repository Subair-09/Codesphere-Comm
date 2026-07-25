export interface Program {
  id: string;
  title: string;
  description: string;
  icon: string;
  category: 'volunteer' | 'training' | 'mentorship' | 'certification' | 'projects' | 'career';
  highlights: string[];
  fullDetails?: string;
  targetAudience?: string;
}

export interface Course {
  id: string;
  title: string;
  category: 'Software' | 'Cloud' | 'Data & AI' | 'Design & Product' | 'Security';
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | 'All Levels';
  image: string;
  rating: number;
  studentsCount: number;
  syllabus: { week: string; topic: string; details: string }[];
  featured?: boolean;
}

export interface SkillPath {
  id: string;
  name: string;
  description: string;
  icon: string;
  category: string;
  demand: string;
  keyTopics: string[];
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  companyOrSchool: string;
  avatar: string;
  content: string;
  programUsed: string;
  rating: number;
}

export interface Mentor {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  skills: string[];
  bio: string;
  available: boolean;
}

export interface CommunityStat {
  id: string;
  label: string;
  value: string;
  subtext: string;
  icon: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'General' | 'Programs' | 'Mentorship' | 'Certifications';
}

export interface ApplicationSubmission {
  id: string;
  type: 'community' | 'volunteer' | 'mentor' | 'course';
  fullName: string;
  email: string;
  phone?: string;
  trackOrRole?: string;
  message?: string;
  submittedAt: string;
}
