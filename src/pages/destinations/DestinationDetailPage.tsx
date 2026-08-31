import React from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { 
  MapPin, Calendar, Compass, Phone, MessageCircle, 
  CheckCircle, Hotel, Car, Tent, HelpCircle, ArrowLeft, ArrowRight 
} from 'lucide-react';
import { DESTINATIONS } from '../../data/destinations';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface DestinationDetailPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const DestinationDetailPage: React.FC<DestinationDetailPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const { destinationSlug } = useParams<{ destinationSlug: string }>();
  const navigate = useNavigate();

  const dest = DESTINATIONS.find(d => d.slug === destinationSlug);

  if (!dest) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold text-slate-800">Destination Not Found</h2>
        <p className="text-slate-600 mt-2">The requested destination page does not exist or has moved.</p>
        <Link to="/" className="inline-block mt-6 px-6 py-2.5 bg-emerald-600 text-white font-bold rounded-xl">
          Return Home
        </Link>
      </div>
    );
  }

  // Schema.org TouristAttraction JSON-LD
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TouristAttraction",
    "name": dest.name,
    "description": dest.metaDescription,
    "address": {
      "@type": "PostalAddress",
      "addressRegion": "Andhra Pradesh",
      "addressCountry": "IN"
    },
    "touristType": ["Eco Tourism", "Adventure Tourism", "Nature Lovers"]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title={dest.metaTitle}
        description={dest.metaDescription}
        keywords={dest.keywords}
        canonical={`https://sincet20services.com/destinations/${dest.slug}`}
        ogImage={`https://sincet20services.com${dest.heroImage}`}
        schema={schemaData}
      />

      {/* Hero Header */}
      <section className="relative bg-slate-900 text-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <img 
          src={dest.heroImage} 
          alt={dest.name} 
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/70 to-slate-900/40" />

        <div className="relative max-w-7xl mx-auto space-y-6">
          <button 
            onClick={() => navigate('/')}
            className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-emerald-400 hover:text-emerald-300 bg-black/50 backdrop-blur-md px-3 py-1.5 rounded-lg transition"
          >
            <ArrowLeft className="w-4 h-4" /> Home
          </button>

          <div className="space-y-2">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-xs uppercase tracking-wider">
              <MapPin className="w-3.5 h-3.5" /> Destination Guide
            </span>
            <h1 className="text-3xl sm:text-6xl font-extrabold tracking-tight text-white">
              {dest.name} <span className="text-amber-400 font-light">Tourism</span>
            </h1>
            <p className="text-slate-300 text-base sm:text-xl max-w-3xl font-light">
              {dest.subtitle}
            </p>
          </div>

          <div className="flex flex-wrap gap-4 text-xs sm:text-sm text-slate-200">
            <div className="flex items-center gap-2 bg-slate-800/80 backdrop-blur-md border border-slate-700 px-4 py-2 rounded-xl">
              <Calendar className="w-4 h-4 text-amber-400" /> Best Time: {dest.bestTimeToVisit}
            </div>
          </div>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* LEFT 8 COLS */}
          <div className="lg:col-span-8 space-y-10">
            
            {/* Overview */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">About {dest.name}</h2>
              <p className="text-slate-700 text-base sm:text-lg leading-relaxed whitespace-pre-line">
                {dest.overview}
              </p>
            </div>

            {/* Top Attractions */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">Best Places to Visit in {dest.name}</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {dest.topAttractions.map((attr, idx) => (
                  <div key={idx} className="flex items-start gap-3 bg-emerald-50/70 p-3.5 rounded-2xl border border-emerald-100">
                    <CheckCircle className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                    <span className="text-slate-800 text-sm font-semibold">{attr}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Travel Services for this destination */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              
              {/* Hotel Booking */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-blue-100 text-blue-600 flex items-center justify-center">
                  <Hotel className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Hotel & Resort Booking</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{dest.hotelInfo}</p>
                <button
                  onClick={() => onOpenCall(`Hotel Booking in ${dest.name}`)}
                  className="w-full text-xs font-bold text-blue-600 hover:text-blue-700 pt-2 flex items-center justify-between"
                >
                  Book Hotel Now <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Camping Booking */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-amber-100 text-amber-700 flex items-center justify-center">
                  <Tent className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Camping & Tent Stay</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{dest.campingInfo}</p>
                <button
                  onClick={() => onOpenCall(`Tent Camping in ${dest.name}`)}
                  className="w-full text-xs font-bold text-amber-700 hover:text-amber-800 pt-2 flex items-center justify-between"
                >
                  Book Camping Tents <ArrowRight className="w-4 h-4" />
                </button>
              </div>

              {/* Taxi Rental */}
              <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-3">
                <div className="w-10 h-10 rounded-2xl bg-emerald-100 text-emerald-700 flex items-center justify-center">
                  <Car className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-base">Taxi & Car Rental</h3>
                <p className="text-slate-600 text-xs leading-relaxed">{dest.taxiInfo}</p>
                <button
                  onClick={() => onOpenCall(`Taxi Service in ${dest.name}`)}
                  className="w-full text-xs font-bold text-emerald-700 hover:text-emerald-800 pt-2 flex items-center justify-between"
                >
                  Hire Taxi / Car <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>

            {/* How to reach */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-4">
              <h2 className="text-2xl font-bold text-slate-900">How to Reach {dest.name}</h2>
              <p className="text-slate-700 text-sm sm:text-base leading-relaxed">
                {dest.howToReach}
              </p>
            </div>

            {/* FAQs */}
            <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
              <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                <HelpCircle className="w-6 h-6 text-amber-500" /> {dest.name} Travel FAQs
              </h2>
              <div className="space-y-4">
                {dest.faqs.map((faq, idx) => (
                  <div key={idx} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-1">
                    <h3 className="font-bold text-slate-900 text-sm sm:text-base">{faq.question}</h3>
                    <p className="text-slate-600 text-xs sm:text-sm">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* RIGHT 4 COLS */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-gradient-to-br from-slate-900 to-emerald-950 p-6 sm:p-8 rounded-3xl text-white shadow-xl space-y-6">
              <h3 className="text-2xl font-extrabold text-amber-400">
                Plan Your {dest.name} Trip
              </h3>
              <p className="text-slate-300 text-sm">
                Get custom tour packages, private taxi cabs, hotel reservations, and hilltop tent camping arranged by Since T20 Services.
              </p>

              <div className="space-y-3">
                <button
                  onClick={() => onOpenCall(`${dest.name} Tour Package`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-extrabold py-3.5 rounded-2xl transition shadow-lg text-sm"
                >
                  <Phone className="w-4 h-4 text-amber-300" /> Call {NEARFIX_CONTACT.phoneDisplay}
                </button>

                <button
                  onClick={() => onOpenWhatsApp(`${dest.name} Tour Package`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-emerald-800 hover:bg-emerald-900 text-white font-extrabold py-3.5 rounded-2xl transition shadow-lg text-sm"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-300" /> WhatsApp Instant
                </button>

                <button
                  onClick={() => onOpenLead(`${dest.name} Custom Enquiry`)}
                  className="w-full inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-3 rounded-2xl transition text-sm"
                >
                  Request Customized Plan
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
