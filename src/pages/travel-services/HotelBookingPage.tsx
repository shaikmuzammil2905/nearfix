import React from 'react';
import { Hotel, Phone, MessageCircle, ShieldCheck, CheckCircle2, Star, Building, MapPin } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface HotelBookingPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const HotelBookingPage: React.FC<HotelBookingPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "Hotel",
    "name": "Hotel & Resort Booking Services in Andhra Pradesh",
    "description": "Online Hotel Booking, Resort Booking, Homestay & Cottage Booking across Araku Valley, Vanajangi, Maredumilli, Visakhapatnam & Deomali.",
    "telephone": NEARFIX_CONTACT.phonePrimary
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Hotel & Resort Booking in Araku, Vanajangi, Maredumilli & Vizag | Since T20"
        description="Book hotels, luxury resorts, budget homestays, cottages & tents in Araku Valley, Vanajangi, Maredumilli, Visakhapatnam, Deomali & Paderu. Best prices & verified stays."
        keywords="Hotel Booking, Online Hotel Booking, Hotels in Araku Valley, Hotels in Vanajangi, Hotels in Maredumilli, Hotels in Visakhapatnam, Hotels near Deomali, Hotels near Tarabu Waterfalls, Hotels near Balda Caves, Budget Hotels, Family Hotels, Luxury Resorts, Budget Resorts, Resort Booking, Homestay Booking, Cottage Booking"
        canonical="https://sincet20services.com/travel-services/hotel-booking"
        schema={schemaData}
      />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wide">
            <Hotel className="w-4 h-4" /> Verified Stays & Instant Confirmation
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hotel, Resort & Homestay Booking
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Find and book budget hotels, luxury hill resorts, treehouse cottages, and traditional homestays in Araku Valley, Vanajangi, Maredumilli, Visakhapatnam, Deomali & Paderu.
          </p>
        </div>
      </section>

      {/* Main Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        
        {/* Destination Hotel Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md">Araku Valley</span>
              <h2 className="text-xl font-bold text-slate-900">Hotels in Araku Valley</h2>
              <p className="text-slate-600 text-xs">Hilltop resorts, AP Tourism Haritha, family budget hotels & coffee estate homestays.</p>
            </div>
            <button
              onClick={() => onOpenCall("Hotels in Araku Valley")}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Book Araku Hotels
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded-md">Vanajangi & Paderu</span>
              <h2 className="text-xl font-bold text-slate-900">Hotels in Vanajangi</h2>
              <p className="text-slate-600 text-xs">Lodges in Paderu town, base camp hilltop tents & tribal village homestays.</p>
            </div>
            <button
              onClick={() => onOpenCall("Hotels in Vanajangi")}
              className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Book Vanajangi Stays
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-amber-600 bg-amber-50 px-2.5 py-1 rounded-md">Maredumilli</span>
              <h2 className="text-xl font-bold text-slate-900">Maredumilli Resorts</h2>
              <p className="text-slate-600 text-xs">Jungle eco resorts, wooden treehouses, stream-side cottages & forest guest houses.</p>
            </div>
            <button
              onClick={() => onOpenCall("Maredumilli Resort Booking")}
              className="w-full bg-amber-600 hover:bg-amber-700 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Book Maredumilli Resorts
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-2">
              <span className="text-xs font-bold text-indigo-600 bg-indigo-50 px-2.5 py-1 rounded-md">Visakhapatnam</span>
              <h2 className="text-xl font-bold text-slate-900">Hotels in Visakhapatnam</h2>
              <p className="text-slate-600 text-xs">Beach Road 5-star resorts, MVP Colony budget hotels & station lodges.</p>
            </div>
            <button
              onClick={() => onOpenCall("Hotels in Visakhapatnam")}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-xl text-xs transition"
            >
              Book Vizag Hotels
            </button>
          </div>

        </div>

        {/* CTA */}
        <div className="bg-slate-900 p-8 rounded-3xl text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-extrabold text-amber-400">Looking for Special Group or Couple Discounts?</h3>
            <p className="text-slate-300 text-sm mt-1">Get customized room rates, complimentary breakfast, and free pickup assistance.</p>
          </div>
          <div className="flex gap-3">
            <button onClick={() => onOpenCall("Hotel Booking")} className="bg-emerald-600 hover:bg-emerald-700 font-bold px-5 py-3 rounded-xl text-sm">
              Call {NEARFIX_CONTACT.phoneDisplay}
            </button>
            <button onClick={() => onOpenWhatsApp("Hotel Booking")} className="bg-emerald-800 hover:bg-emerald-900 font-bold px-5 py-3 rounded-xl text-sm">
              WhatsApp Us
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
