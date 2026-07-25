import React from 'react';
import { PARTNERS } from '../data/initialData';
import { Cpu, Users, GraduationCap, Building2, BadgeCheck } from 'lucide-react';

export const Partners: React.FC = () => {
  const getPartnerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Cpu': return <Cpu className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5" />;
      case 'Building2': return <Building2 className="w-5 h-5" />;
      case 'BadgeCheck': return <BadgeCheck className="w-5 h-5" />;
      default: return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <section className="bg-white border-y border-slate-100 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-[10px] font-bold text-slate-400 uppercase tracking-[0.2em] mb-6">
          OUR PARTNERS & COMMUNITY COLLABORATORS
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {PARTNERS.map((partner, idx) => (
            <div
              key={idx}
              className="p-3.5 rounded-2xl bg-slate-50 border border-slate-100 hover:border-indigo-200 transition-all flex items-center gap-3 group"
            >
              <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 flex items-center justify-center group-hover:scale-110 transition-transform flex-shrink-0">
                {getPartnerIcon(partner.icon)}
              </div>
              <div>
                <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">{partner.name}</h4>
                <p className="text-[10px] text-slate-500">{partner.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
