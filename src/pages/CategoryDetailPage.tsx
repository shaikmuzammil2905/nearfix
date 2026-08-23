import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, ArrowRight, ShieldCheck, 
  Wrench, Wind, Car, Navigation, Building, HardHat, Home, 
  Camera, Monitor, GraduationCap, AlertTriangle, Briefcase, ChevronRight, Zap,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator
} from 'lucide-react';
import { getCategoryBySlug } from '../data/categories';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { BackButton } from '../components/BackButton';

interface CategoryDetailPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench, Wind, Car, Navigation, Building, HardHat, Home, Camera, Monitor, GraduationCap, AlertTriangle, Briefcase,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator, Zap
};

export const CategoryDetailPage: React.FC<CategoryDetailPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const { categorySlug } = useParams<{ categorySlug: string }>();
  const category = getCategoryBySlug(categorySlug || '');

  if (!category) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Category Not Found</h2>
        <p className="text-slate-500 text-sm">The category you requested does not exist or has been updated.</p>
        <BackButton label="Back to Categories" fallbackPath="/categories" />
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Action Bar with Universal Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Categories" fallbackPath="/categories" />
        
        <nav className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-semibold">
          <Link to="/" className="hover:text-nearfix-blue">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/categories" className="hover:text-nearfix-blue">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold">{category.name}</span>
        </nav>
      </div>

      {/* Category Header Banner */}
      <div className={`rounded-3xl p-8 sm:p-12 shadow-xl border ${category.isEmergency ? 'bg-gradient-to-r from-red-900 via-rose-900 to-red-950 text-white border-red-800' : 'bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white border-slate-800'} relative overflow-hidden`}>
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 relative z-10">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className={`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider ${category.isEmergency ? 'bg-red-600 text-white' : 'bg-nearfix-orange text-white'}`}>
                <ShieldCheck className="w-3.5 h-3.5" /> {category.badge || 'Verified Category'}
              </span>
            </div>

            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
              {category.name}
            </h1>

            <p className="text-slate-200 text-base leading-relaxed">
              {category.description}
            </p>
          </div>

          {/* Action box in banner */}
          <div className="bg-white/10 backdrop-blur-md rounded-2xl p-5 border border-white/20 text-center w-full sm:w-auto flex-shrink-0 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-200">Connect with NEARFIX</div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => onOpenCall(category.name)}
                className="py-2.5 px-6 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" /> Call {NEARFIX_CONTACT.phoneDisplay}
              </button>
              <button
                onClick={() => onOpenWhatsApp(category.name)}
                className="py-2.5 px-6 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-bold text-xs rounded-xl shadow-md flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Services Listing */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight">
            Available Services in {category.name}
          </h2>
          <span className="text-xs font-bold text-slate-500">{category.services.length} Services Found</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {category.services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-blue-50 text-nearfix-blue flex items-center justify-center flex-shrink-0 font-bold">
                    {(() => {
                      const ServiceIcon = iconMap[service.iconName] || Zap;
                      return <ServiceIcon className="w-6 h-6 text-nearfix-orange" />;
                    })()}
                  </div>

                  <Link
                    to={`/services/${service.slug}`}
                    className="text-xs font-bold text-nearfix-orange hover:underline flex items-center gap-1"
                  >
                    Details <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>

                <Link to={`/services/${service.slug}`}>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-nearfix-blue transition-colors">
                    {service.name}
                  </h3>
                </Link>

                <p className="text-slate-600 text-sm mt-2 leading-relaxed">
                  {service.description}
                </p>

                {/* Common Requirements list tags */}
                {service.commonRequirements && service.commonRequirements.length > 0 && (
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {service.commonRequirements.slice(0, 3).map((req, i) => (
                      <span key={i} className="text-[11px] font-medium bg-slate-100 text-slate-600 px-2.5 py-1 rounded-lg">
                        • {req}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Action buttons footer */}
              <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2">
                <button
                  onClick={() => onOpenCall(service.name)}
                  className="flex-1 py-2.5 px-3 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-xs rounded-xl shadow-xs transition-all flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 fill-current" /> Call Now
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
      </div>

    </div>
  );
};
