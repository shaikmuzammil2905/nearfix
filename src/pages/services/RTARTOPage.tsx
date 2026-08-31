import React from 'react';
import { Car, FileText, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface RTARTOPageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const RTARTOPage: React.FC<RTARTOPageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="RTA & RTO Documentation Services in Paderu & AP | Since T20"
        description="Fast RTA & RTO documentation support in Paderu & ASR District. Driving Licence, DL Renewal, Learner Licence, RC Transfer, Vehicle NOC, Duplicate RC & Fitness Certificate."
        keywords="RTA Services, RTO Services, RTA Services in Paderu, RTO Services in Paderu, Driving Licence Services, Driving Licence Renewal, Learner Licence, Vehicle Registration, RC Transfer, Vehicle Ownership Transfer, Vehicle NOC, Duplicate RC, Address Change in RC, Vehicle Fitness Certificate, Vehicle Permit Services, RTO Documentation Services, RTA Services in ASR District"
        canonical="https://sincet20services.com/professional-services/rta-rto-services"
      />

      <section className="bg-gradient-to-br from-indigo-950 via-slate-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/20 border border-blue-400/30 text-blue-300 font-semibold text-xs uppercase tracking-wide">
            <Car className="w-4 h-4" /> Doorstep RTA / RTO Assistance
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            RTA & RTO Documentation Services in Paderu
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Hassle-free RTO consultancy for Driving Licences, Learner Slot Booking, Vehicle Ownership RC Transfer, Hypothecation Cancellation, NOC & Vehicle Permits in Paderu & ASR District.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Driving Licence Services</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Learner Licence (LLR) application, slot booking, permanent DL test assistance, and DL Renewal in Paderu.</p>
            <button onClick={() => onOpenCall("Driving Licence in Paderu")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Apply Driving Licence
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Vehicle RC Transfer & NOC</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Vehicle Ownership Transfer, State/District NOC issuing, Duplicate RC card, and address change in RC.</p>
            <button onClick={() => onOpenCall("RC Transfer in Paderu")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Apply RC Transfer
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Fitness & Commercial Permit</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Commercial vehicle Fitness Certificate renewal, Tourist taxi permits, and HP termination (Bank Loan NOC clearance).</p>
            <button onClick={() => onOpenCall("RTO Fitness Certificate")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              RTO Permit Assistance
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
