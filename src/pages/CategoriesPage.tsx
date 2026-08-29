import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  Search, ShieldCheck, Wrench, Wind, Car, Navigation, 
  Building, HardHat, Home, Camera, Monitor, GraduationCap, AlertTriangle, Briefcase,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator, Zap, ChevronRight
} from 'lucide-react';
import { CATEGORIES, CategoryItem } from '../data/categories';
import { BackButton } from '../components/BackButton';
import { CMSService } from '../services/cmsService';

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench, Wind, Car, Navigation, Building, HardHat, Home, Camera, Monitor, GraduationCap, AlertTriangle, Briefcase,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator, Zap
};

export const CategoriesPage: React.FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>(CATEGORIES);
  const [filterQuery, setFilterQuery] = useState('');

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const live = await CMSService.getCategories();
        setCategories(live.filter(c => (c as any).isActive !== false));
      } catch (err) {
        console.error(err);
      }
    };
    fetchCategories();
    const unsub = CMSService.subscribeToUpdates(() => {
      fetchCategories();
    });
    return unsub;
  }, []);

  const filteredCategories = categories.filter(cat => 
    cat.name.toLowerCase().includes(filterQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(filterQuery.toLowerCase()) ||
    cat.services?.some(s => s.name.toLowerCase().includes(filterQuery.toLowerCase()))
  );

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Action Bar with Back Button (Mobile & Desktop) */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">{filteredCategories.length} Categories Available</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl relative overflow-hidden">
        <div className="max-w-2xl space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-xs font-bold text-nearfix-orange uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> All {categories.length} Service Categories
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

      {/* Categories Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
        {filteredCategories.map((cat) => {
          const IconComponent = iconMap[cat.iconName] || Wrench;
          return (
            <Link
              key={cat.id}
              to={`/categories/${cat.slug}`}
              className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${cat.isEmergency ? 'ring-2 ring-red-500/80' : ''}`}
            >
              {/* Category Photo Image Banner */}
              <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-slate-900">
                <img
                  src={cat.image || '/hero-bg-custom.png'}
                  alt={cat.name}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                
                {cat.badge && (
                  <span className={`absolute top-2.5 right-2.5 z-10 text-[10px] sm:text-xs font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md ${cat.isEmergency ? 'bg-red-600 text-white' : 'bg-nearfix-orange text-white'}`}>
                    {cat.badge}
                  </span>
                )}

                {/* Icon Overlay Badge */}
                <div className={`absolute bottom-2.5 left-3 w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-md ${cat.bgColor}`}>
                  <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${cat.color}`} />
                </div>
              </div>

              {/* Card Text Content */}
              <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-nearfix-orange transition-colors line-clamp-1">
                    {cat.name}
                  </h3>
                  <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                    {cat.description}
                  </p>
                </div>

                <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold text-slate-600">
                  <span className="text-slate-500">{cat.services?.length || 0} Services</span>
                  <span className="inline-flex items-center gap-0.5 text-nearfix-orange group-hover:translate-x-1 transition-transform">
                    Explore <ChevronRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

    </div>
  );
};
