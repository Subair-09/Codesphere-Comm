import React, { useState } from 'react';
import { Linkedin, Twitter, Instagram, Facebook, Youtube, Send, Check } from 'lucide-react';

export const Footer: React.FC = () => {
  const [newsletterEmail, setNewsletterEmail] = useState('');
  const [newsletterSubscribed, setNewsletterSubscribed] = useState(false);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newsletterEmail) return;
    setNewsletterSubscribed(true);
    setTimeout(() => {
      setNewsletterEmail('');
    }, 1000);
  };

  return (
    <footer id="contact" className="bg-slate-950 text-white pt-16 pb-8 border-t border-slate-900 relative">
      
      {/* Top Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12">
          
          {/* Brand Column (2 cols wide on lg) */}
          <div className="lg:col-span-2 space-y-5">
            <a href="#hero" className="inline-block group">
              <img
                src="https://imgur.com/ZKGxM1U.png"
                alt="CodeSphere Community Logo"
                className="h-12 w-auto object-contain group-hover:scale-105 transition-transform bg-white/10 rounded-lg p-1.5"
                referrerPolicy="no-referrer"
              />
            </a>

            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              CodeSphere Community is dedicated to empowering young people, students, and tech enthusiasts through practical education, mentorship, volunteer programs, and professional certifications.
            </p>

            {/* Newsletter Signup */}
            <div className="pt-2">
              <p className="text-xs font-bold uppercase tracking-wider text-indigo-300 mb-2">
                Subscribe to Community Updates
              </p>
              {newsletterSubscribed ? (
                <div className="p-3 bg-emerald-500/20 border border-emerald-500/40 rounded-xl text-xs text-emerald-300 flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400" />
                  <span>Subscribed! Check your inbox for updates.</span>
                </div>
              ) : (
                <form onSubmit={handleNewsletterSubmit} className="flex gap-2">
                  <input
                    type="email"
                    required
                    value={newsletterEmail}
                    onChange={(e) => setNewsletterEmail(e.target.value)}
                    placeholder="Enter your email..."
                    className="px-3.5 py-2.5 bg-slate-900 border border-slate-800 rounded-lg text-xs text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 flex-grow"
                  />
                  <button
                    type="submit"
                    className="px-4 py-2.5 bg-indigo-700 hover:bg-indigo-600 text-white font-bold text-xs rounded-lg transition-colors flex items-center gap-1"
                  >
                    <span>Join</span>
                    <Send className="w-3.5 h-3.5" />
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* COMMUNITY Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-300">COMMUNITY</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Our Programs</a></li>
              <li><a href="#volunteer" className="hover:text-white transition-colors">Volunteer Tech Program</a></li>
              <li><a href="#mentorship" className="hover:text-white transition-colors">Mentorship Network</a></li>
              <li><a href="#programs" className="hover:text-white transition-colors">Community Projects</a></li>
            </ul>
          </div>

          {/* LEARNING Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-300">LEARNING</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#courses" className="hover:text-white transition-colors">Courses & Bootcamps</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Data Analytics</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Cloud Computing</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Artificial Intelligence</a></li>
              <li><a href="#skills" className="hover:text-white transition-colors">Full-Stack Engineering</a></li>
              <li><a href="#certification" className="hover:text-white transition-colors">Certifications Prep</a></li>
            </ul>
          </div>

          {/* RESOURCES Links */}
          <div className="space-y-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-indigo-300">RESOURCES</h4>
            <ul className="space-y-2.5 text-xs text-slate-300">
              <li><a href="#faq" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#hero" className="hover:text-white transition-colors">Tech Events & Sprints</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">Member Stories</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

        </div>

        {/* Thin Indigo Accent Divider Line */}
        <div className="h-px w-full bg-slate-800 my-6"></div>

        {/* Social Media Section */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 py-4">
          <div className="text-xs text-slate-400 font-medium">
            Connect with CodeSphere Community on Social Media
          </div>

          {/* WHITE Social Icons */}
          <div className="flex items-center gap-3">
            {[
              { label: 'LinkedIn', icon: <Linkedin className="w-5 h-5 text-white" />, href: 'https://linkedin.com' },
              { label: 'X / Twitter', icon: <Twitter className="w-5 h-5 text-white" />, href: 'https://twitter.com' },
              { label: 'Instagram', icon: <Instagram className="w-5 h-5 text-white" />, href: 'https://instagram.com' },
              { label: 'Facebook', icon: <Facebook className="w-5 h-5 text-white" />, href: 'https://facebook.com' },
              { label: 'YouTube', icon: <Youtube className="w-5 h-5 text-white" />, href: 'https://youtube.com' },
            ].map((soc, idx) => (
              <a
                key={idx}
                href={soc.href}
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-lg bg-slate-900 border border-slate-800 hover:bg-indigo-700 hover:border-indigo-700 text-white flex items-center justify-center transition-all duration-300 hover:scale-110"
                title={soc.label}
              >
                {soc.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-3">
          <p>© 2026 CodeSphere Community. All rights reserved.</p>
          <div className="flex items-center gap-4 text-[11px] text-slate-400">
            <a href="#hero" className="hover:text-slate-200">Privacy Policy</a>
            <span>•</span>
            <a href="#hero" className="hover:text-slate-200">Terms of Service</a>
            <span>•</span>
            <a href="#hero" className="hover:text-slate-200">Code of Conduct</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
