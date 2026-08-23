import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { Search, Phone, MessageCircle, ArrowRight, ShieldCheck, Filter, AlertCircle, ChevronRight } from 'lucide-react';
import { getAllServices, CATEGORIES, ServiceItem } from '../data/categories';
import { NEARFIX_CONTACT } from '../data/contactInfo';

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

  useEffect(() => {
    setQuery(searchParams.get('q') || '');
    setSelectedCategory(searchParams.get('cat') || 'all');
  }, [searchParams]);

  const allServices = getAllServices();

  const filteredServices = allServices.filter(service => {
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
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Page Title & Search Bar */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-6">
        <div className="max-w-2xl space-y-2">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4" /> Comprehensive Local Directory
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            All Local Services
          </h1>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Search or select from over 100+ verified service options available in Araku Valley.
          </p>
        </div>

        {/* Search Bar Input */}
        <div className="relative max-w-xl">
          <input
            type="text"
            placeholder="Search for a service (e.g. Electrician, Plumber, Taxi, Hotel)..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full pl-11 pr-4 py-3.5 bg-white text-slate-800 rounded-2xl outline-none text-sm placeholder-slate-400 font-medium shadow-lg"
          />
          <Search className="w-5 h-5 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
        </div>
      </div>

      {/* Category Tabs Filter */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
        <button
          onClick={() => handleCategorySelect('all')}
          className={`py-2 px-4 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === 'all' ? 'bg-nearfix-blue text-white shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
        >
          All Categories ({allServices.length})
        </button>

        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategorySelect(cat.slug)}
            className={`py-2 px-4 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${selectedCategory === cat.slug ? 'bg-nearfix-blue text-white shadow-md' : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'}`}
          >
            {cat.name} ({cat.services.length})
          </button>
        ))}
      </div>

      {/* Services Grid */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-900">
            Showing {filteredServices.length} Services
          </h2>
        </div>

        {filteredServices.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-nearfix-orange bg-orange-50 px-2.5 py-1 rounded-lg">
                      {service.categoryName}
                    </span>

                    <Link
                      to={`/services/${service.slug}`}
                      className="text-xs font-bold text-nearfix-blue hover:underline flex items-center gap-1"
                    >
                      View Details <ChevronRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>

                  <Link to={`/services/${service.slug}`}>
                    <h3 className="text-xl font-bold text-slate-900 group-hover:text-nearfix-blue transition-colors">
                      {service.name}
                    </h3>
                  </Link>

                  <p className="text-slate-600 text-sm mt-2 line-clamp-2 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                  <button
                    onClick={() => onOpenCall(service.name)}
                    className="flex-1 py-2.5 px-3 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <Phone className="w-3.5 h-3.5 fill-current" /> Call
                  </button>

                  <button
                    onClick={() => onOpenWhatsApp(service.name)}
                    className="flex-1 py-2.5 px-3 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                  >
                    <MessageCircle className="w-3.5 h-3.5 fill-current" /> WhatsApp
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          /* Empty State Requirement Section 38 */
          <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm space-y-4 max-w-lg mx-auto my-8">
            <div className="w-16 h-16 mx-auto bg-orange-50 text-nearfix-orange rounded-full flex items-center justify-center">
              <AlertCircle className="w-8 h-8" />
            </div>

            <h3 className="text-2xl font-bold text-slate-900">No matching services found</h3>

            <p className="text-slate-600 text-sm">
              Try another service search term or contact NEARFIX directly to assist you.
            </p>

            <div className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                to="/contact"
                className="w-full sm:w-auto py-3 px-6 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-bold text-sm rounded-xl transition-all"
              >
                Contact NEARFIX
              </Link>

              <button
                onClick={() => { setQuery(''); setSelectedCategory('all'); }}
                className="w-full sm:w-auto py-3 px-6 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-all"
              >
                Reset Search Filters
              </button>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
