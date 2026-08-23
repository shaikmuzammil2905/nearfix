import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { 
  Phone, MessageCircle, Send, CheckCircle2, 
  MapPin, Clock, Info, ChevronRight, Zap, ShieldCheck
} from 'lucide-react';
import { getServiceBySlug, getAllServices } from '../data/categories';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { BackButton } from '../components/BackButton';

interface ServiceDetailPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const ServiceDetailPage: React.FC<ServiceDetailPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const { serviceSlug } = useParams<{ serviceSlug: string }>();
  const service = getServiceBySlug(serviceSlug || '');

  if (!service) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-16 text-center space-y-4">
        <h2 className="text-2xl font-bold text-slate-800">Service Not Found</h2>
        <p className="text-slate-500 text-sm">The requested service could not be located in our directory.</p>
        <BackButton label="Back to Services" fallbackPath="/services" />
      </div>
    );
  }

  const all = getAllServices();
  const relatedServices = all
    .filter(s => s.categorySlug === service.categorySlug && s.id !== service.id)
    .slice(0, 3);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Universal Back Button & Breadcrumbs */}
      <div className="flex items-center justify-between">
        <BackButton label="Back" fallbackPath={`/categories/${service.categorySlug}`} />

        <nav className="hidden sm:flex items-center gap-2 text-xs text-slate-500 font-semibold overflow-x-auto">
          <Link to="/" className="hover:text-nearfix-blue">Home</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to="/categories" className="hover:text-nearfix-blue">Categories</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link to={`/categories/${service.categorySlug}`} className="hover:text-nearfix-blue">{service.categoryName}</Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-slate-900 font-bold">{service.name}</span>
        </nav>
      </div>

      {/* Main Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left 2 Cols: Detailed Overview */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* Main Card */}
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-nearfix-blue text-xs font-bold uppercase tracking-wider">
                <Zap className="w-3.5 h-3.5 text-nearfix-orange" /> {service.categoryName}
              </span>

              <div className="flex items-center gap-1 text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
                <MapPin className="w-3.5 h-3.5 text-emerald-600" /> Available in Araku Valley
              </div>
            </div>

            <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              {service.name}
            </h1>

            <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
              {service.description}
            </p>

            {/* Provider Disclosure */}
            <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 flex items-center gap-3">
              <Info className="w-5 h-5 text-nearfix-blue flex-shrink-0" />
              <p className="text-sm font-semibold text-slate-700">
                Connect with a local service provider through NEARFIX.
              </p>
            </div>

            {/* Key Benefits */}
            {service.benefits && service.benefits.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900">Key Benefits</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.benefits.map((b, i) => (
                    <div key={i} className="flex items-start gap-2.5 bg-blue-50/50 p-3 rounded-xl text-slate-800 text-sm font-medium">
                      <CheckCircle2 className="w-4 h-4 text-nearfix-green flex-shrink-0 mt-0.5" />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Common Requirements */}
            {service.commonRequirements && service.commonRequirements.length > 0 && (
              <div className="space-y-3 pt-2">
                <h3 className="text-lg font-bold text-slate-900">Common Requirements</h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-slate-700">
                  {service.commonRequirements.map((r, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-nearfix-orange" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Related Services */}
          {relatedServices.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-bold text-slate-900">Related Services in {service.categoryName}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {relatedServices.map((rel) => (
                  <Link
                    key={rel.id}
                    to={`/services/${rel.slug}`}
                    className="bg-white p-5 rounded-2xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex flex-col justify-between"
                  >
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">{rel.name}</h4>
                      <p className="text-xs text-slate-500 mt-1 line-clamp-2">{rel.shortDesc}</p>
                    </div>
                    <div className="mt-4 text-xs font-bold text-nearfix-orange flex items-center gap-1">
                      View Service <ChevronRight className="w-3.5 h-3.5" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

        </div>

        {/* Right 1 Col: Quick Action Conversion Box */}
        <div className="space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card sticky top-24 space-y-6">
            <div className="space-y-1">
              <span className="text-xs font-extrabold uppercase tracking-wider text-nearfix-orange">Instant Connection</span>
              <h3 className="text-xl font-extrabold text-slate-900">Request {service.name}</h3>
              <p className="text-xs text-slate-500">Fast local response in Araku Valley</p>
            </div>

            <div className="space-y-3">
              <button
                onClick={() => onOpenCall(service.name)}
                className="w-full py-4 px-6 bg-nearfix-green hover:bg-emerald-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/20 transition-all flex items-center justify-center gap-2.5"
              >
                <Phone className="w-5 h-5 fill-current" /> Call Now ({NEARFIX_CONTACT.phoneDisplay})
              </button>

              <button
                onClick={() => onOpenWhatsApp(service.name)}
                className="w-full py-4 px-6 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-500/20 transition-all flex items-center justify-center gap-2.5"
              >
                <MessageCircle className="w-5 h-5 fill-current" /> WhatsApp ({NEARFIX_CONTACT.whatsappDisplay})
              </button>

              <button
                onClick={() => onOpenLead(service.name)}
                className="w-full py-3.5 px-6 bg-nearfix-blue hover:bg-nearfix-navy text-white font-bold text-sm rounded-2xl transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-4 h-4 text-nearfix-orange" /> Request Requirement Form
              </button>
            </div>

            <div className="border-t border-slate-100 pt-4 space-y-2 text-xs text-slate-500">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Operating hours: 24/7 Helpline Support</span>
              </div>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-nearfix-green" />
                <span>Verified local Araku providers</span>
              </div>
            </div>
          </div>
        </div>

      </div>

    </div>
  );
};
