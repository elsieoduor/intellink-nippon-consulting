import React from 'react';
import { Star, ArrowRight, LayoutGrid, List } from 'lucide-react';

const experts = [
  {
    name: "Dr. Sarah Mitchell",
    tag: "International Trade Law",
    description: "Expert in cross-border regulations and compliance with 15+ years of experience in global trade agreements.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "James Chen",
    tag: "Supply Chain Optimization",
    description: "Specialized in logistics efficiency and cost reduction strategies for manufacturing and distribution sectors.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Maria Rodriguez",
    tag: "Market Entry Strategy",
    description: "Helping businesses expand into Latin American markets with proven strategies and local expertise.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "David Thompson",
    tag: "Financial Advisory",
    description: "Corporate finance expert specializing in M&A transactions and international investment strategies.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Aisha Patel",
    tag: "Digital Transformation",
    description: "Leading businesses through technology adoption and digital strategy implementation across industries.",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?auto=format&fit=crop&q=80&w=200&h=200",
  },
  {
    name: "Michael Larsson",
    tag: "Sustainability Consulting",
    description: "Guiding companies toward sustainable practices and ESG compliance in European and global markets.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=200&h=200",
  }
];

const ExpertNetwork = () => {
  return (
    <section className="bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <span className="text-orange-500 font-bold text-sm tracking-wider uppercase">Expert Network</span>
            <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mt-2">Discover Verified <br className="hidden md:block"/> Consultants</h2>
          </div>
          
          <div className="flex items-center gap-3">
            <div className="relative">
              <select className="appearance-none bg-white border border-slate-200 rounded-md px-4 py-2 pr-10 text-slate-600 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500">
                <option>Industry</option>
              </select>
              <div className="absolute right-3 top-3 pointer-events-none text-slate-400">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <button className="p-2 bg-white border border-slate-200 rounded-md text-orange-500"><LayoutGrid size={20} /></button>
            <button className="p-2 bg-white border border-slate-200 rounded-md text-slate-400"><List size={20} /></button>
          </div>
        </div>

        {/* Grid Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {experts.map((expert, index) => (
            <div key={index} className="bg-white rounded-xl p-8 shadow-sm hover:shadow-md transition-shadow relative pt-16 mt-12 text-center group">
              {/* Profile Image - Floats above the card */}
              <div className="absolute -top-12 left-1/2 -translate-x-1/2">
                <div className="w-24 h-24 rounded-full border-4 border-orange-500 overflow-hidden shadow-lg">
                  <img src={expert.image} alt={expert.name} className="w-full h-full object-cover" />
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-1">{expert.name}</h3>
              <span className="inline-block px-3 py-1 bg-orange-50 text-orange-600 text-xs font-semibold rounded-full mb-4">
                {expert.tag}
              </span>
              
              <p className="text-slate-500 text-sm leading-relaxed mb-6 px-2">
                {expert.description}
              </p>

              <div className="flex items-center justify-between border-t border-slate-100 pt-4">
                <div className="flex gap-0.5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} className="fill-orange-400 text-orange-400" />
                  ))}
                </div>
                <button className="text-slate-900 text-sm font-bold flex items-center group-hover:text-orange-600 transition-colors">
                  View Profile <ArrowRight size={16} className="ml-1" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Button */}
        <div className="mt-16 text-center">
          <button className="px-8 py-3 bg-white border-2 border-orange-500 text-orange-500 font-bold rounded-full hover:bg-orange-50 transition-colors flex items-center mx-auto gap-2">
            View All 500+ Consultants <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ExpertNetwork;