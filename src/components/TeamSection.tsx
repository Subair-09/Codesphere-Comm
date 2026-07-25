import React from 'react';
import { Linkedin, Twitter, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

interface TeamSectionProps {
  onOpenJoinModal: (role?: string) => void;
  onOpenVolunteerModal: () => void;
}

export const TeamSection: React.FC<TeamSectionProps> = ({
  onOpenVolunteerModal
}) => {
  const teamMembers = [
    {
      id: 'founder',
      isLeadership: true,
      badge: 'Founder',
      name: '[Founder Name]',
      role: 'Founder & Community Lead',
      bio: 'Passionate about technology, education, and community development, the Founder leads the vision and strategic direction of CodeSphere Community, creating opportunities for aspiring technology professionals to learn, build, and grow.',
      image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=600',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:founder@codesphere.community'
    },
    {
      id: 'co-founder',
      isLeadership: true,
      badge: 'Leadership',
      name: '[Co-Founder Name]',
      role: 'Co-Founder & Programs Director',
      bio: 'Responsible for developing and coordinating impactful learning programs, community initiatives, and partnerships that help members gain practical skills and meaningful technology experiences.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:cofounder@codesphere.community'
    },
    {
      id: 'member-1',
      isLeadership: false,
      badge: null,
      name: '[Team Member Name]',
      role: 'Community & Volunteer Coordinator',
      bio: 'Supports community engagement, volunteer activities, events, and initiatives that bring members together and create opportunities for collaboration.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:volunteer@codesphere.community'
    },
    {
      id: 'member-2',
      isLeadership: false,
      badge: null,
      name: '[Team Member Name]',
      role: 'Training & Technical Programs Lead',
      bio: 'Helps coordinate technical learning experiences and supports members as they develop practical skills across software engineering, cloud computing, AI, data, and other technology fields.',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=600',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
      email: 'mailto:programs@codesphere.community'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } }
  };

  return (
    <section id="team" className="py-16 sm:py-24 lg:py-28 bg-slate-50/70 border-t border-slate-100 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16"
        >
          <span className="inline-block py-1 px-3.5 bg-indigo-100 text-indigo-700 text-[11px] sm:text-xs font-bold tracking-widest rounded-md uppercase">
            MEET THE CODESPHERE COMMUNITY TEAM
          </span>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
            Meet the People Behind CodeSphere Community
          </h2>
          <p className="text-slate-600 text-xs sm:text-base leading-relaxed">
            CodeSphere Community is driven by passionate technology professionals and community builders committed to creating opportunities for people to learn, connect, contribute, and grow in the digital world.
          </p>
        </motion.div>

        {/* Team Grid: 1 col mobile, 2 cols tablet, 4 cols desktop */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12 sm:mb-16"
        >
          {teamMembers.map((member) => (
            <motion.div
              key={member.id}
              variants={cardVariants}
              whileHover={{ y: -6 }}
              className={`bg-white rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden relative group ${
                member.isLeadership
                  ? 'border-indigo-200/90 shadow-md hover:shadow-xl hover:border-indigo-400 ring-1 ring-indigo-500/10'
                  : 'border-slate-100 shadow-sm hover:shadow-lg hover:border-indigo-200'
              }`}
            >
              {/* Highlight bar for leadership */}
              {member.isLeadership && (
                <div className="h-1.5 w-full bg-gradient-to-r from-indigo-600 via-indigo-500 to-purple-600" />
              )}

              <div className="p-6 space-y-4 flex-grow flex flex-col items-center text-center">
                {/* Profile Image & Badge */}
                <div className="flex justify-center w-full mb-1">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32">
                    <img
                      src={member.image}
                      alt={member.name}
                      className={`w-full h-full object-cover rounded-full border-4 transition-transform duration-300 group-hover:scale-105 shadow-md ${
                        member.isLeadership ? 'border-indigo-100 group-hover:border-indigo-300' : 'border-slate-100'
                      }`}
                      referrerPolicy="no-referrer"
                    />
                    {member.badge && (
                      <span className="absolute bottom-0 right-0 px-2.5 py-0.5 bg-indigo-700 text-white text-[10px] font-bold uppercase tracking-wider rounded-full shadow-sm">
                        {member.badge}
                      </span>
                    )}
                  </div>
                </div>

                {/* Name & Role */}
                <div className="text-center space-y-1">
                  <h3 className="text-base sm:text-lg font-extrabold text-slate-900 tracking-tight group-hover:text-indigo-950 transition-colors">
                    {member.name}
                  </h3>
                  <p className="text-xs font-bold text-indigo-700 uppercase tracking-wide">
                    {member.role}
                  </p>
                </div>

                {/* Short Biography */}
                <p className="text-xs text-slate-600 leading-relaxed text-center">
                  "{member.bio}"
                </p>
              </div>

              {/* Social Links Footer */}
              <div className="p-4 bg-slate-50/80 border-t border-slate-100 flex items-center justify-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 active:scale-95"
                  title="LinkedIn Profile"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
                <a
                  href={member.twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 active:scale-95"
                  title="X / Twitter Profile"
                >
                  <Twitter className="w-4 h-4" />
                </a>
                <a
                  href={member.email}
                  className="w-9 h-9 rounded-lg bg-white border border-slate-200 hover:border-indigo-600 hover:bg-indigo-600 hover:text-white text-slate-600 flex items-center justify-center transition-all duration-200 active:scale-95"
                  title="Contact Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Below Team Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.96 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-gradient-to-r from-indigo-950 via-indigo-900 to-slate-950 rounded-2xl p-6 sm:p-10 text-white shadow-xl border border-indigo-800/80 flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <div className="space-y-2 text-center md:text-left max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white/10 text-amber-300 text-[10px] sm:text-xs font-bold uppercase tracking-wider backdrop-blur-md">
              <Sparkles className="w-3.5 h-3.5" />
              <span>JOIN THE MOVEMENT</span>
            </div>
            <h3 className="text-xl sm:text-3xl font-black text-white tracking-tight">
              Want to Be Part of Our Community?
            </h3>
            <p className="text-indigo-100/90 text-xs sm:text-sm leading-relaxed">
              Whether you want to volunteer, mentor, teach, or contribute your skills, there is a place for you at CodeSphere Community.
            </p>
          </div>

          <div className="flex-shrink-0 w-full md:w-auto">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => onOpenVolunteerModal()}
              className="w-full md:w-auto min-h-[48px] px-7 py-3.5 bg-white hover:bg-indigo-50 text-indigo-950 font-black text-xs sm:text-sm rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer"
              id="join-our-team-btn"
            >
              <span>Join Our Team</span>
              <ArrowRight className="w-4 h-4 text-indigo-700" />
            </motion.button>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

