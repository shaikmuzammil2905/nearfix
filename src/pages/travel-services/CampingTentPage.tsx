import React from 'react';
import { Tent, Flame, ShieldCheck, CheckCircle2, Phone, MessageCircle, Moon, Sun } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface CampingTentPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const CampingTentPage: React.FC<CampingTentPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Camping & Tent Booking in Araku, Vanajangi, Maredumilli & Deomali"
        description="Book outdoor camping and tent stays in Araku Valley, Vanajangi Sunrise, Maredumilli Forest, Deomali Peak, Tarabu Waterfalls & Balda Caves. Waterproof tents & campfire included."
        keywords="Camping in Araku, Camping in Vanajangi, Camping in Maredumilli, Camping near Deomali, Tent Booking in Araku, Tent Booking in Vanajangi, Tent Booking in Maredumilli, Camping Tent Booking, Adventure Camping, Family Camping, Nature Camping, Forest Camping, Couple Camping, Group Camping, Weekend Camping, Camping Packages"
        canonical="https://sincet20services.com/travel-services/camping-tent-booking"
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-amber-950 via-emerald-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-semibold text-xs uppercase tracking-wide">
            <Tent className="w-4 h-4" /> Stargazing, Bonfire & Cloud Oceans
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Hilltop & Forest Tent Camping Booking
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Experience overnight camping in Vanajangi Cloud Hills, Araku Coffee Plantations, Deomali Summit, Maredumilli Rainforests, Tarabu Waterfalls & Balda Caves.
          </p>
        </div>
      </section>

      {/* Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Sun className="w-5 h-5 text-amber-500" /> Vanajangi Cloud Camping
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">Overnight camping at 3,400 ft altitude near Paderu. Includes bonfire, dinner, sleeping mats & early sunrise trek.</p>
            <button onClick={() => onOpenCall("Tent Booking in Vanajangi")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Vanajangi Tents
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Tent className="w-5 h-5 text-emerald-600" /> Araku Valley Camping
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">Private coffee plantation camping ground with tribal BBQ, Dhimsa dance, and campfire.</p>
            <button onClick={() => onOpenCall("Tent Booking in Araku")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Araku Camping
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Flame className="w-5 h-5 text-rose-500" /> Deomali Peak Camping
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">High-altitude ridge tent camping at 1,672m height with cold mountain breezes & thermal gear.</p>
            <button onClick={() => onOpenCall("Deomali Camping")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Deomali Tents
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
