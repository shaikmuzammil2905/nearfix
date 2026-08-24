import React, { useState, useEffect } from 'react';
import { Phone, MessageCircle, ArrowUp } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface FloatingActionsProps {
  onOpenCall: () => void;
  onOpenWhatsApp: () => void;
}

export const FloatingActions: React.FC<FloatingActionsProps> = ({ onOpenCall, onOpenWhatsApp }) => {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-20 lg:bottom-8 right-3 sm:right-6 z-40 flex flex-col gap-3 items-end pointer-events-none">
      {/* Floating Call Button */}
      <button
        onClick={onOpenCall}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nearfix-green text-white shadow-xl shadow-emerald-700/30 hover:bg-emerald-700 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Call NEARFIX"
      >
        <Phone className="w-5 h-5 sm:w-6 sm:h-6 fill-current animate-pulse" />
        <span className="absolute right-16 hidden lg:group-hover:flex items-center px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
          Call Now ({NEARFIX_CONTACT.phoneDisplay})
        </span>
      </button>

      {/* Floating WhatsApp Button */}
      <button
        onClick={onOpenWhatsApp}
        className="pointer-events-auto group relative flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 rounded-full bg-nearfix-whatsapp text-white shadow-xl shadow-emerald-600/30 hover:bg-emerald-600 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-emerald-400"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle className="w-6 h-6 sm:w-7 sm:h-7 fill-current" />
        <span className="absolute right-16 hidden lg:group-hover:flex items-center px-3 py-1.5 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg whitespace-nowrap animate-fadeIn">
          WhatsApp Us ({NEARFIX_CONTACT.whatsappDisplay})
        </span>
      </button>

      {/* Floating Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-slate-900/90 text-white shadow-lg border border-slate-700 hover:bg-slate-800 hover:scale-110 active:scale-95 transition-all duration-300 focus:outline-none animate-fadeIn"
          aria-label="Scroll to Top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};
