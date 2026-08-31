import React from 'react';
import { Link } from 'react-router-dom';
import { Compass, Clock, MapPin, CheckCircle, ArrowRight, Phone, MessageCircle, Star, Sparkles } from 'lucide-react';
import { TOUR_PACKAGES } from '../../data/tourPackages';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface TourPackagesIndexPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const TourPackagesIndexPage: React.FC<TourPackagesIndexPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TravelAgency",
    "name": "Since T20 Services - Tour Packages & Travel",
    "url": "https://sincet20services.com/tour-packages",
    "description": "Book best Tour Packages for Araku Valley, Vanajangi Sunrise, Maredumilli Nature, Deomali Trekking, Visakhapatnam, and Paderu.",
    "telephone": NEARFIX_CONTACT.phonePrimary,
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Paderu",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    }
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-16">
      <SEO 
        title="Araku, Vanajangi & Maredumilli Tour Packages | Since T20 Travel Services"
        description="Book high-value tour packages for Araku Valley, Vanajangi Sunrise, Maredumilli Nature, Deomali Trekking & Multi-destination trips from Visakhapatnam & Paderu. Lowest price guaranteed."
        keywords="Araku Valley Tour Packages, Vanajangi Sunrise Tour Package, Maredumilli Nature Tour Package, Deomali Trekking Package, Visakhapatnam to Araku Tour, Araku Taxi Booking, Camping in Vanajangi, Hotel Booking Araku"
        canonical="https://sincet20services.com/tour-packages"
        schema={schemaData}
      />

      {/* Hero Header */}
      <section className="relative bg-gradient-to-r from-emerald-900 via-teal-900 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8 overflow-hidden shadow-xl">
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#34d399_1px,transparent_1px)] [background-size:16px_16px]"></div>
        <div className="relative max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-xs sm:text-sm uppercase tracking-wide">
            <Compass className="w-4 h-4 animate-spin-slow" /> Premium Travel & Tourism Packages
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white">
            Araku, Vanajangi & Deomali <span className="text-amber-400">Tour Packages</span>
          </h1>
          <p className="max-w-3xl mx-auto text-slate-200 text-base sm:text-lg">
            Book verified weekend trips, cloud ocean camping, forest eco-tours, high peak treks, and private taxi transfers from Visakhapatnam, Paderu & Alluri Sitharama Raju District.
          </p>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TOUR_PACKAGES.map((pkg) => (
            <div 
              key={pkg.id} 
              className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative h-52 overflow-hidden bg-slate-900">
                <img 
                  src={pkg.heroImage} 
                  alt={pkg.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-90"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-black/20" />
                
                {pkg.discountBadge && (
                  <span className="absolute top-3 left-3 bg-amber-500 text-slate-950 text-xs font-extrabold px-3 py-1 rounded-full shadow">
                    {pkg.discountBadge}
                  </span>
                )}

                <div className="absolute bottom-3 left-3 right-3 flex justify-between items-center text-white text-xs font-semibold">
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <Clock className="w-3.5 h-3.5 text-amber-400" /> {pkg.duration}
                  </span>
                  <span className="flex items-center gap-1 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md">
                    <MapPin className="w-3.5 h-3.5 text-emerald-400" /> {pkg.destination}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 group-hover:text-emerald-700 transition-colors line-clamp-2">
                    {pkg.title}
                  </h2>
                  <p className="text-slate-600 text-xs sm:text-sm mt-2 line-clamp-2">
                    {pkg.subtitle}
                  </p>

                  <ul className="mt-4 space-y-1.5 text-xs text-slate-700">
                    {pkg.highlights.slice(0, 3).map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Price & Action */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <div>
                    <div className="text-xs text-slate-400 line-through">Starts at {pkg.originalPrice}</div>
                    <div className="text-xl font-extrabold text-emerald-700">
                      {pkg.startingPrice} <span className="text-xs text-slate-500 font-normal">/ person</span>
                    </div>
                  </div>

                  <Link 
                    to={`/tour-packages/${pkg.slug}`}
                    className="inline-flex items-center gap-1.5 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-xl transition-all shadow-md"
                  >
                    View Details <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Help Banner */}
        <div className="bg-gradient-to-r from-amber-500 via-amber-600 to-nearfix-orange rounded-3xl p-6 sm:p-8 text-slate-950 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight">
              Need a Custom Tour Plan or Private Taxi?
            </h3>
            <p className="text-slate-900 text-sm sm:text-base font-medium max-w-xl">
              We specialize in custom itineraries for families, couples, corporate outings & group camping across Araku, Vanajangi, Maredumilli, Deomali & Vizag.
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center">
            <button
              onClick={() => onOpenCall("Custom Tour Package")}
              className="inline-flex items-center gap-2 bg-slate-950 hover:bg-slate-800 text-white font-bold px-5 py-3 rounded-xl transition shadow-lg text-sm"
            >
              <Phone className="w-4 h-4 text-amber-400" /> Call {NEARFIX_CONTACT.phoneDisplay}
            </button>
            <button
              onClick={() => onOpenWhatsApp("Custom Tour Package")}
              className="inline-flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold px-5 py-3 rounded-xl transition shadow-lg text-sm"
            >
              <MessageCircle className="w-4 h-4" /> WhatsApp Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
