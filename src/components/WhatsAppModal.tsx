import React from 'react';
import { MessageCircle, X, CheckCircle2 } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, serviceName }) => {
  if (!isOpen) return null;

  const customText = serviceName 
    ? `Hello NEARFIX, I need help with ${serviceName} in Araku Valley.`
    : `Hello NEARFIX, I need help finding a local service in Araku Valley.`;
    
  const customWhatsappUrl = `https://wa.me/919493192020?text=${encodeURIComponent(customText)}`;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-emerald-500 to-nearfix-whatsapp p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-16 h-16 mx-auto mb-3 bg-white text-nearfix-whatsapp rounded-full flex items-center justify-center shadow-lg">
            <MessageCircle className="w-9 h-9 fill-current" />
          </div>

          <h3 className="text-2xl font-bold">Need Help?</h3>
          <p className="text-emerald-50 text-sm mt-1">Connect with NEARFIX on WhatsApp.</p>
        </div>

        {/* Modal Body */}
        <div className="p-6 text-center">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 mb-6 text-left space-y-2">
            <div className="flex items-center justify-between text-xs text-slate-500 font-semibold uppercase tracking-wider">
              <span>Official WhatsApp</span>
              <span className="inline-flex items-center gap-1 text-emerald-600 text-xs font-bold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" /> Online Now
              </span>
            </div>

            <div className="text-2xl font-extrabold text-slate-900 tracking-tight">{NEARFIX_CONTACT.whatsappDisplay}</div>

            <div className="flex items-center gap-1.5 text-xs text-slate-600">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 flex-shrink-0" />
              <span>Instant response for local service bookings</span>
            </div>
          </div>

          <div className="space-y-3">
            <a
              href={customWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-bold text-lg rounded-2xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              Chat on WhatsApp
            </a>

            <button
              onClick={onClose}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-2xl transition-colors text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
