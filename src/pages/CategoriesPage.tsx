import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ArrowRight, ShieldCheck, Wrench, Wind, Car, Navigation, 
  Building, HardHat, Home, Camera, Monitor, GraduationCap, AlertTriangle, Briefcase,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator, Zap
} from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { BackButton } from '../components/BackButton';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench, Wind, Car, Navigation, Building, HardHat, Home, Camera, Monitor, GraduationCap, AlertTriangle, Briefcase,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator, Zap
};

export const CategoriesPage: React.FC = () => {
  const [filterQuery, setFilterQuery] = useState('');

  const filteredCategories = CATEGORIES.filter(cat => 
    cat.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
    cat.services.some(s => s.name.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Action Bar with Back Button (Mobile & Desktop) */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">{CATEGORIES.length} Categories Available</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-nearfix-orange uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> All {CATEGORIES.length} Service Categories
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Popular Categories
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore trusted local services across Visakhapatnam, Anakapalli & Alluri Seetha Ramaraju Districts. Select a category to find specialized professionals ready to help.
          </p>

          {/* Search Filter */}
          <div className="relative max-w-md pt-2">
            <input
              type="text"
              placeholder="Filter categories or services..."
              value={filterQuery}
              onChange={(e) => setFilterQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-white text-slate-800 rounded-xl outline-none text-sm placeholder-slate-400 font-medium shadow-lg"
            />
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-[26px] -translate-y-1/2" />
          </div>
        </div>
      </div>

      {/* Grid of Categories */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredCategories.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || Wrench;
          return (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className={`group relative p-5 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between ${cat.isEmergency ? 'ring-2 ring-red-400/60 bg-red-50/20' : ''}`}
            >
              {cat.badge && (
                <span className={`absolute top-3 right-3 text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-full ${cat.isEmergency ? 'bg-red-600 text-white' : 'bg-nearfix-orange text-white'}`}>
                  {cat.badge}
                </span>
              )}

              <div>
                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110 shadow-xs ${cat.bgColor}`}>
                  <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${cat.color}`} />
                </div>

                <h3 className="text-base sm:text-lg font-extrabold text-slate-900 group-hover:text-nearfix-blue transition-colors">
                  {cat.name}
                </h3>

                <p className="text-xs sm:text-sm text-slate-500 mt-1.5 line-clamp-2 leading-relaxed">
                  {cat.description}
                </p>

                <div className="text-xs font-semibold text-slate-400 mt-3">
                  {cat.services.length} Specialized Services
                </div>
              </div>

              <div className="mt-5 pt-3 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-nearfix-orange">
                <span>View Services</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          );
        })}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-16 bg-white rounded-3xl border border-slate-100 p-8 space-y-4">
          <p className="text-lg font-bold text-slate-700">No matching categories found</p>
          <p className="text-sm text-slate-500">Try adjusting your filter search term.</p>
          <button
            onClick={() => setFilterQuery('')}
            className="py-2 px-6 bg-nearfix-blue text-white font-semibold text-sm rounded-xl"
          >
            Clear Filter
          </button>
        </div>
      )}

    </div>
  );
};
