import React from 'react';
import { Calculator, FileText, CheckCircle2, Phone, MessageCircle, ShieldCheck } from 'lucide-react';
import { SEO } from '../../components/SEO';
import { NEARFIX_CONTACT } from '../../data/contactInfo';

interface ITRTaxServicePageProps {
  onOpenCall: (serviceName?: string) => void;
  onOpenWhatsApp: (serviceName?: string) => void;
  onOpenLead: (serviceName?: string) => void;
}

export const ITRTaxServicePage: React.FC<ITRTaxServicePageProps> = ({
  onOpenCall,
  onOpenWhatsApp,
  onOpenLead
}) => {
  return (
    <div className="bg-slate-50 min-h-screen pb-20">
      <SEO 
        title="ITR Filing Services in Paderu & Andhra Pradesh | Since T20 Tax Consultants"
        description="Fast & accurate Income Tax Return (ITR) filing services, ITR-1, ITR-2, ITR-3, ITR-4, TDS refund, Tax Audit & Income Tax Consultant in Paderu & AP."
        keywords="ITR Filing, Income Tax Return Filing, ITR Filing Services, Online ITR Filing, ITR Filing in Paderu, ITR Filing in Andhra Pradesh, Income Tax Consultant, Tax Filing Services, Tax Consultant in Paderu, Online Tax Services, ITR Filing in ASR District"
        canonical="https://sincet20services.com/professional-services/itr-tax-filing"
      />

      <section className="bg-gradient-to-br from-emerald-950 via-teal-900 to-slate-950 text-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-emerald-500/20 border border-emerald-400/30 text-emerald-300 font-semibold text-xs uppercase tracking-wide">
            <Calculator className="w-4 h-4" /> Trusted Income Tax Return Filing
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
            Income Tax Return (ITR) Filing Services
          </h1>
          <p className="max-w-3xl mx-auto text-slate-300 text-base sm:text-lg">
            File your income tax returns accurately with maximum refund guarantees. Serving salaried employees, businessmen, traders & contractors across Paderu, ASR District & AP.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Salaried Employee ITR</h2>
            <p className="text-slate-600 text-xs sm:text-sm">ITR-1 / Form 16 filing with HRA deductions, home loan interest benefit & maximum TDS tax refund.</p>
            <button onClick={() => onOpenCall("ITR Filing in Paderu")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              File Salaried ITR
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">Business & Presumptive Tax</h2>
            <p className="text-slate-600 text-xs sm:text-sm">ITR-3 & ITR-4 (44AD / 44ADA) tax filing for traders, shop owners, freelancers & government contractors.</p>
            <button onClick={() => onOpenCall("Business ITR Filing")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              File Business ITR
            </button>
          </div>

          <div className="bg-white p-6 rounded-3xl border border-slate-200 shadow-sm space-y-4">
            <h2 className="text-xl font-bold text-slate-900">TDS Claim & Tax Consultation</h2>
            <p className="text-slate-600 text-xs sm:text-sm">Expert consultation for income tax notices, capital gain calculations & refund status tracking.</p>
            <button onClick={() => onOpenCall("Income Tax Consultant")} className="w-full bg-emerald-600 text-white font-bold py-2.5 rounded-xl text-xs">
              Talk to Tax Consultant
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
