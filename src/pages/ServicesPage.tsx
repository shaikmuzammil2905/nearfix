import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Phone, MessageCircle, ShieldCheck, AlertCircle, ChevronRight } from 'lucide-react';
import { CATEGORIES, ServiceItem } from '../data/categories';
import { BackButton } from '../components/BackButton';
import { CMSService } from '../services/cmsService';

interface ServicesPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onOpenCall, onOpenWhatsApp, onOpenLead }) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const initialCategory = searchParams.get('cat') || 'all';

  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [services, setServices] = useState<(ServiceItem & { isActive?: boolean })[]>([]);

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    setSelectedCategory(searchParams.get('cat') || 'all');
  }, [searchParams]);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const live = await CMSService.getAllServices();
        setServices(live.filter(s => s.isActive !== false));
      } catch (err) {
        console.error(err);
      }
    };
    fetchServices();
  }, []);

  const filteredServices = services.filter(service => {
    const matchesQuery = query === '' || 
      service.name.toLowerCase().includes(query.toLowerCase()) ||
      service.description.toLowerCase().includes(query.toLowerCase()) ||
      service.categoryName.toLowerCase().includes(query.toLowerCase());

    const matchesCategory = selectedCategory === 'all' || service.categorySlug === selectedCategory;

    return matchesQuery && matchesCategory;
  });

  const handleCategorySelect = (catSlug: string) => {
    setSelectedCategory(catSlug);
    setSearchParams(prev => {
      if (catSlug === 'all') prev.delete('cat');
      else prev.set('cat', catSlug);
      return prev;
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">Service Directory</span>
      </div>

      {/* Page Title & Search Bar */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Full Catalog ({services.length} Services)
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Services Directory
          </h1>
          <p className="text-slate-300 text-base leading-relaxed">
            Discover verified local professionals in Araku Valley, Visakhapatnam & Anakapalli. Filter by service or category to quickly connect.
          </p>
        </div>

        {/* Live Search Input */}
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search by service name (e.g. Electrician, Taxi, AC Repair)..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSearchParams(prev => {
                if (e.target.value) prev.set('q', e.target.value);
                else prev.delete('q');
                return prev;
              });
            }}
            className="w-full pl-11 pr-4 py-3.5 bg-white text-slate-800 rounded-2xl outline-none text-sm font-medium shadow-lg"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-4 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Category Pills Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => handleCategorySelect('all')}
          className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
            selectedCategory === 'all'
              ? 'bg-nearfix-blue text-white shadow-md'
              : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
          }`}
        >
          All Categories
        </button>

        {CATEGORIES.map(cat => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.slug)}
            className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all ${
              selectedCategory === cat.slug
                ? 'bg-nearfix-blue text-white shadow-md'
                : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {/* Services Grid */}
      {filteredServices.length === 0 ? (
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 space-y-4">
          <AlertCircle className="w-12 h-12 text-slate-300 mx-auto" />
          <h3 className="text-lg font-bold text-slate-900">No Services Found</h3>
          <p className="text-slate-500 text-sm max-w-sm mx-auto">
            We couldn't find any services matching "{query}". Try searching another keyword or clear your category filter.
          </p>
          <button
            onClick={() => { setQuery(''); handleCategorySelect('all'); }}
            className="py-2.5 px-6 bg-nearfix-orange text-white font-bold text-xs rounded-xl shadow-md"
          >
            Clear Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map(service => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between space-y-4 group"
            >
              <div className="space-y-3">
                <div className="flex items-start justify-between gap-2">
                  <span className="text-[11px] font-bold text-nearfix-blue bg-blue-50 px-2.5 py-1 rounded-lg">
                    {service.categoryName}
                  </span>

                  {service.isEmergency && (
                    <span className="text-[10px] font-extrabold text-red-600 bg-red-50 border border-red-200 px-2 py-0.5 rounded-md uppercase">
                      Emergency 24/7
                    </span>
                  )}
                </div>

                <h3 className="text-xl font-extrabold text-slate-900 group-hover:text-nearfix-orange transition-colors">
                  <Link to={`/services/${service.slug}`}>{service.name}</Link>
                </h3>

                <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                  {service.description}
                </p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-2 border-t border-slate-100">
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onOpenCall(service.name)}
                    className="py-2.5 px-3 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" /> Call Now
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp(service.name)}
                    className="py-2.5 px-3 bg-slate-900 hover:bg-black text-emerald-400 font-bold text-xs rounded-xl shadow-sm flex items-center justify-center gap-1.5 transition-all"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
                  </button>
                </div>

                <Link
                  to={`/services/${service.slug}`}
                  className="flex items-center justify-center gap-1 text-xs font-bold text-slate-500 hover:text-nearfix-orange py-1 transition-colors"
                >
                  View Full Details & Requirements <ChevronRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      )}

    </div>
  );
};
