import React, { useState } from 'react';
import { 
  BarChart3, Cloud, Sparkles, Code, Layout, Server, Cpu, ShieldCheck, 
  Palette, LineChart, Megaphone, Kanban, ArrowRight, Search 
} from 'lucide-react';
import { SkillPath } from '../types';

interface SkillsGridProps {
  skills: SkillPath[];
  onOpenJoinModal: (role?: string) => void;
}

export const SkillsGrid: React.FC<SkillsGridProps> = ({ skills, onOpenJoinModal }) => {
  const [search, setSearch] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Software', 'Cloud', 'Data', 'AI & ML', 'Security', 'Design', 'Business'];

  const getSkillIcon = (iconName: string) => {
    switch (iconName) {
      case 'BarChart3': return <BarChart3 className="w-6 h-6 text-white" />;
      case 'Cloud': return <Cloud className="w-6 h-6 text-white" />;
      case 'Sparkles': return <Sparkles className="w-6 h-6 text-white" />;
      case 'Code': return <Code className="w-6 h-6 text-white" />;
      case 'Layout': return <Layout className="w-6 h-6 text-white" />;
      case 'Server': return <Server className="w-6 h-6 text-white" />;
      case 'Cpu': return <Cpu className="w-6 h-6 text-white" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-white" />;
      case 'Palette': return <Palette className="w-6 h-6 text-white" />;
      case 'LineChart': return <LineChart className="w-6 h-6 text-white" />;
      case 'Megaphone': return <Megaphone className="w-6 h-6 text-white" />;
      case 'Kanban': return <Kanban className="w-6 h-6 text-white" />;
      default: return <Code className="w-6 h-6 text-white" />;
    }
  };

  const filteredSkills = skills.filter(skill => {
    const matchesSearch = skill.name.toLowerCase().includes(search.toLowerCase()) || 
                          skill.description.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || skill.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <section id="skills" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <span className="inline-block py-1 px-3 bg-indigo-100 text-indigo-700 text-xs font-bold tracking-widest rounded-md uppercase">
            IN-DEMAND TECH PATHWAYS
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-indigo-950 tracking-tight">
            Build Skills That Move Your Career Forward
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Discover practical learning paths designed alongside senior engineers and industry leaders to get you job-ready.
          </p>
        </div>

        {/* Filter Controls Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-10 pb-6 border-b border-slate-100">
          
          {/* Category Pills */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all ${
                  selectedCategory === cat
                    ? 'bg-indigo-700 text-white shadow-md shadow-indigo-200'
                    : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Quick Search Field */}
          <div className="relative w-full md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Filter skill path..."
              className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-xs focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:bg-white"
            />
          </div>

        </div>

        {/* 12 Skill Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredSkills.map((sk) => (
            <div
              key={sk.id}
              className="p-6 bg-slate-50 rounded-2xl border border-slate-100 hover:border-indigo-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-indigo-600 text-white flex items-center justify-center shadow-md group-hover:bg-indigo-700 transition-colors">
                    {getSkillIcon(sk.icon)}
                  </div>
                  <span className="text-[10px] font-bold px-2.5 py-1 bg-indigo-100 text-indigo-800 rounded-full">
                    {sk.demand}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 group-hover:text-indigo-700 transition-colors">
                  {sk.name}
                </h3>

                <p className="text-slate-600 text-xs leading-relaxed">
                  {sk.description}
                </p>

                {/* Key Topics Badges */}
                <div className="flex flex-wrap gap-1 pt-2">
                  {sk.keyTopics.slice(0, 3).map((topic, idx) => (
                    <span key={idx} className="text-[10px] font-medium px-2 py-0.5 bg-white border border-slate-200 text-slate-600 rounded-md">
                      {topic}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenJoinModal('Student')}
                className="mt-6 pt-4 border-t border-slate-200/80 flex items-center justify-between w-full text-xs font-bold text-indigo-700 group-hover:text-indigo-900"
              >
                <span>Explore Path</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
