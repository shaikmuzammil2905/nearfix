import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  Clock, MapPin, CheckCircle2, XCircle, Phone, MessageCircle, 
  Calendar, ShieldCheck, ChevronRight, HelpCircle, Star, Sparkles, ArrowLeft
} from 'lucide-react';
import { TOUR_PACKAGES } from '../../data/tourPackages';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface TourPackageDetailPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const TourPackageDetailPage: React.FC<TourPackageDetailPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const { packageSlug } = useParams<{ packageSlug: string }>();
  const navigate = useNavigate();

  const pkg = TOUR_PACKAGES.find(p => p.slug === packageSlug);

  if (!pkg) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Tour Package Not Found</h2>
        <p className="text-slate-600 mt-2">The requested tour package does not exist or has been updated.</p>
        <Link to="/tour-packages" className="inline-block mt-6 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl">
          Browse All Tour Packages
        </Link>
      </div>
    );
  }

  // Schema.org Trip JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Trip",
    "name": pkg.title,
    "description": pkg.metaDescription,
    "itinerary": pkg.itinerary.map(item => ({
      "@type": "City",
      "name": item.title,
      "description": item.desc
    })),
    "offers": {
      "@type": "Offer",
      "price": pkg.startingPrice.replace(/[^0-9]/g, ''),
      "priceCurrency": "INR",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "TravelAgency",
        "name": "Since T20 Services",
        "telephone": NEARFIX_CONTACT.phonePrimary
      }
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title={pkg.metaTitle}
        description={pkg.metaDescription}
        keywords={pkg.keywords}
        canonical={`https://sincet20services.com/tour-packages/${pkg.slug}`}
        ogImage={`https://sincet20services.com${pkg.heroImage}`}
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="relative bg-slate-900 text-white min-h-[420px] flex items-center overflow-hidden">
        <img 
          src={pkg.heroImage} 
          alt={pkg.title}
          className="absolute inset-0 w-full h-full object-cover opacity-35"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 w-full space-y-6">
          <button 
            onClick={() => navigate('/tour-packages')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-black/40 backdrop-blur-md px-3 py-1.5 rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" /> Back to All Packages
          </button>

          <div className="space-y-3">
            {pkg.discountBadge && (
              <span className="inline-block bg-amber-500 text-slate-950 text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
                {pkg.discountBadge}
              </span>
            )}
            <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
              {pkg.title}
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl font-light">
              {pkg.subtitle}
            </p>
          </div>

          {/* Key Quick Specs */}
          <div className="flex flex-wrap gap-4 text-xs sm:text-sm font-semibold text-slate-200">
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl">
              <Clock className="w-4 h-4 text-amber-400" /> {pkg.duration}
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl">
              <MapPin className="w-4 h-4 text-emerald-400" /> {pkg.destination}
            </div>
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-3.5 py-2 rounded-xl">
              <Calendar className="w-4 h-4 text-cyan-400" /> Best: {pkg.bestTimeToVisit}
            </div>
          </div>
        </div>
      </section>

      {/* Main Content & Sidebar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT 8 COLS: Package Details */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-emerald-600" /> Tour Overview
              </h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {pkg.overview}
              </p>
            </div>

            {/* Highlights */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Key Package Highlights</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-3 bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100">
                    <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-medium">{h}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900">Detailed Tour Itinerary</h2>
              <div className="space-y-6 border-l-2 border-emerald-500 pl-4 sm:pl-6 ml-2">
                {pkg.itinerary.map((item, idx) => (
                  <div key={idx} className="relative space-y-2">
                    <div className="absolute -left-[25px] sm:-left-[33px] top-0.5 bg-emerald-600 text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center shadow">
                      {idx + 1}
                    </div>
                    <div className="inline-block bg-emerald-100 text-emerald-900 font-extrabold text-xs px-2.5 py-0.5 rounded-md">
                      {item.day}
                    </div>
                    <h3 className="text-lg font-bold text-slate-900">{item.title}</h3>
                    <p className="text-slate-700 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Inclusions & Exclusions */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-emerald-800 flex items-center gap-2">
                  <CheckCircle2 className="w-5 h-5 text-emerald-600" /> What's Included
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {pkg.inclusions.map((inc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold">•</span>
                      <span>{inc}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
                <h3 className="text-lg font-bold text-slate-700 flex items-center gap-2">
                  <XCircle className="w-5 h-5 text-rose-500" /> What's Excluded
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
                  {pkg.exclusions.map((exc, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-rose-400 font-bold">•</span>
                      <span>{exc}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-500" /> Frequently Asked Questions
              </h2>
              <div className="space-y-4">
                {pkg.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{faq.question}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLS: Pricing & Instant Booking Widget */}
          <div className="lg:col-span-4 space-y-6">
            <div className="sticky top-24 bg-white p-6 sm:p-8 rounded-3xl border-2 border-emerald-500/40 shadow-xl space-y-6">
              <div className="text-center pb-6 border-b border-slate-100 space-y-1">
                <span className="text-xs font-bold text-slate-400 uppercase tracking-wider">Starting Package Price</span>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-3xl sm:text-4xl font-extrabold text-emerald-700">{pkg.startingPrice}</span>
                  <span className="text-sm text-slate-400 line-through">{pkg.originalPrice}</span>
                </div>
                <p className="text-xs text-slate-500 mt-1">Per person (Includes private taxi & stay)</p>
              </div>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenCall(pkg.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl transition shadow-lg text-sm sm:text-base"
                >
                  <Phone className="w-5 h-5 text-amber-300" /> Instant Call Booking
                </button>

                <button
                  onClick={() => onOpenWhatsApp(pkg.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-2xl transition shadow-lg text-sm sm:text-base"
                >
                  <MessageCircle className="w-5 h-5 text-emerald-300" /> WhatsApp Enquiry
                </button>

                <button
                  onClick={() => onOpenLead(pkg.title)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3.5 rounded-2xl transition shadow-md text-sm"
                >
                  Request Custom Quote
                </button>
              </div>

              <div className="pt-4 border-t border-slate-100 space-y-2 text-xs text-slate-600">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>100% Guaranteed Doorstep Pickup</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Experienced Local Hill Drivers</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Hotels & Tents</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
