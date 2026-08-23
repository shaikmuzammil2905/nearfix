import React from 'react';
import { Phone, MessageCircle } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface FloatingActionsProps {
  onOpenCall: () => void;
  onOpenWhatsApp: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenCall, onOpenWhatsApp }) => {
  return (
    <div className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 z-30 flex flex-col gap-3 pointer-events-auto">
      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsApp}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-nearfix-whatsapp text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-7 h-7 fill-current" />
        <span className="absolute right-16 hidden lg:group-hover:flex items-center px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
          WhatsApp Us ({NEARFIX_CONTACT.whatsappDisplay})
        </span>
      </button>

      {/* Floating Call Button */}
      <button
        onClick={onOpenCall}
        className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-nearfix-green text-white shadow-xl shadow-emerald-700/30 hover:bg-emerald-700 hover:scale-110 active:scale-95 transition-all duration-300"
        aria-label="Call NEARFIX"
      >
        <Phone className="w-6 h-6 fill-current animate-pulse" />
        <span className="absolute right-16 hidden lg:group-hover:flex items-center px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
          Call Now ({NEARFIX_CONTACT.phoneDisplay})
        </span>
      </button>
    </div>
  );
};
