import React from 'react';
import { Phone, X, ShieldCheck } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose, serviceName }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Accent Gradient Header */}
        <div className="bg-gradient-to-r from-emerald-600 to-nearfix-green p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-16 h-16 mx-auto mb-3 bg-white text-nearfix-green rounded-full flex items-center justify-center shadow-lg animate-bounce">
            <Phone className="w-8 h-8 fill-current" />
          </div>

          <h3 className="text-2xl font-bold">Need Help Now?</h3>
          <p className="text-emerald-100 text-sm mt-1">
            {serviceName ? `Connecting you for ${serviceName}` : "Call NEARFIX and connect with us quickly."}
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 text-center">
          <div className="bg-emerald-50 rounded-2xl p-4 border border-emerald-100 mb-6">
            <div className="text-xs font-semibold uppercase tracking-wider text-emerald-700 mb-1">Direct Helpline Number</div>
            <div className="text-3xl font-extrabold text-slate-900 tracking-tight">{NEARFIX_CONTACT.phoneDisplay}</div>
            <div className="flex items-center justify-center gap-1.5 text-xs text-emerald-800 font-medium mt-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600" /> Verified Local Service Desk — Araku Valley
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={NEARFIX_CONTACT.phoneTel}
              className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call {NEARFIX_CONTACT.phoneDisplay}
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl transition-colors text-sm"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
