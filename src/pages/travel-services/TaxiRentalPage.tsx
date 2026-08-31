import React from 'react';
import { Car, ShieldCheck, CheckCircle2, Phone, MessageCircle, MapPin } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface TaxiRentalPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const TaxiRentalPage: React.FC<TaxiRentalPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "TaxiService",
    "name": "Since T20 Taxi & Car Rental Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Since T20 Services",
      "telephone": NEARFIX_CONTACT.phonePrimary
    },
    "areaServed": ["Visakhapatnam", "Araku Valley", "Paderu", "Vanajangi", "Maredumilli", "Deomali"]
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="Araku Taxi Booking, Vizag to Araku Taxi & Car Rental | Since T20"
        description="Book Araku Taxi Services, Vizag to Araku Taxi, Vizag to Vanajangi Cab, Vizag to Deomali & Maredumilli Taxi, Paderu Taxi & Tempo Traveller rental. Experienced local drivers."
        keywords="Araku Taxi Booking, Araku Car Rental, Araku Tour Taxi, Visakhapatnam Taxi Booking, Vizag to Araku Taxi, Vizag to Vanajangi Taxi, Vizag to Maredumilli Taxi, Vizag to Deomali Taxi, Paderu Taxi Booking, Paderu to Araku Taxi, Tourist Taxi, Outstation Taxi, Car Rental, Tempo Traveller, Tourist Vehicle Booking"
        canonical="https://sincet20services.com/travel-services/taxi-car-rental"
        schema={schemaData}
      />

      {/* Hero */}
      <section className="bg-gradient-to-br from-emerald-900 via-teal-950 to-slate-900 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-xs uppercase tracking-wide">
            <Car className="w-4 h-4" /> 24/7 Outstation & Local Taxi Service
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Taxi Booking & Tourist Car Rental
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Hassle-free taxi cabs from Visakhapatnam to Araku Valley, Vanajangi, Maredumilli, Deomali & Paderu. Sedan, SUV (Ertiga / Innova), and Tempo Traveller vehicles.
          </p>
        </div>
      </section>

      {/* Popular Taxi Routes */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Vizag to Araku Taxi</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Doorstep pickup in Visakhapatnam. Full 1-Day or 2-Day Araku sightseeing with Borra Caves & Chaparai.</p>
            <button onClick={() => onOpenCall("Vizag to Araku Taxi")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Vizag-Araku Taxi
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Vizag to Vanajangi Taxi</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Direct cab transfer to Vanajangi sunrise base camp near Paderu with night stay driver option.</p>
            <button onClick={() => onOpenCall("Vizag to Vanajangi Taxi")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Vanajangi Taxi
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Paderu to Araku Taxi</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Local taxi support from Paderu agency town to Araku Valley, Modamamba temple & Vanajangi.</p>
            <button onClick={() => onOpenCall("Paderu Taxi Booking")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Book Paderu Taxi
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
