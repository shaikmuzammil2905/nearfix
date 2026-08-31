import React from 'react';
import { Briefcase, FileText, CheckCircle2, Phone, MessageCircle, ShieldCheck, Landmark } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface GSTBusinessServicePageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const GSTBusinessServicePage: React.FC<GSTBusinessServicePageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  const schemaData = {
    "@context": "https://schema.org",
    "@type": "AccountingService",
    "name": "GST & Business Registration Services - Since T20 Services",
    "description": "GST Registration, GST Return Filing, Business Registration, FSSAI, MSME Udyam Registration in Paderu, Visakhapatnam & Andhra Pradesh.",
    "telephone": NEARFIX_CONTACT.phonePrimary
  };

  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="GST Registration & Filing, Udyam, Business Services in Paderu & AP | Since T20"
        description="Trusted GST Registration, GST Return Filing, Company Registration, Udyam MSME, FSSAI Food License, Trade License & Business Services in Paderu, ASR District, Visakhapatnam & AP."
        keywords="GST Registration, GST Registration Services, GST Return Filing, GST Filing Services, GST Consultant, GST Consultant in Paderu, GST Services in Visakhapatnam, GST Registration in Andhra Pradesh, GST Return Filing in Andhra Pradesh, Business Registration Services, Company Registration Services, Trade License Services, FSSAI Registration, MSME Registration, Udyam Registration, Udyam Registration Online, Udyam Registration in Paderu, Business License Services, Business Services in Paderu, Business Services in ASR District"
        canonical="https://sincet20services.com/professional-services/gst-business-services"
        schema={schemaData}
      />

      {/* Hero Header */}
      <section className="bg-gradient-to-br from-slate-900 via-indigo-950 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 font-semibold text-xs uppercase tracking-wide">
            <Landmark className="w-4 h-4" /> Professional Business & Taxation Support
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            GST Registration & Business Services in Paderu & AP
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            Complete business registration, GST return filing, Udyam MSME certificate, FSSAI license, and trade licensing for business owners in Paderu, ASR District, Visakhapatnam & Andhra Pradesh.
          </p>
        </div>
      </section>

      {/* Grid of Key Services */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-5 h-5 text-emerald-600" /> GST Registration & Filing
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">New GST TIN allotment, monthly GSTR-1 & GSTR-3B filings, GST LUT, and GST audit support by expert consultants in Paderu.</p>
            <button onClick={() => onOpenCall("GST Registration in Paderu")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Apply GST Registration
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <Briefcase className="w-5 h-5 text-blue-600" /> Udyam MSME Registration
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">Instant government MSME Udyam registration certificate for small and micro businesses to get bank loans & subsidies.</p>
            <button onClick={() => onOpenCall("Udyam Registration in Paderu")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Get Udyam Certificate
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" /> FSSAI Food & Trade License
            </h2>
            <p className="text-slate-600 text-xs sm:text-sm">Food Safety license for restaurants, tea stalls, grocery stores, bakery shops, and municipal trade licenses.</p>
            <button onClick={() => onOpenCall("FSSAI Registration")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Get FSSAI License
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
