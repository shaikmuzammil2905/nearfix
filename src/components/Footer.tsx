import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-nearfix-blue text-white pt-12 pb-24 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md">
              <img src="/logo.png" alt="NEARFIX" className="h-10 w-auto object-contain" />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              NEARFIX is Araku Valley's trusted local service discovery and lead platform. Connecting customers with verified local professionals quickly and transparently via Call & WhatsApp.
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-nearfix-green" /> 100% Verified Local Network
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-nearfix-orange transition-colors">Home</Link></li>
              <li><Link to="/categories" className="hover:text-nearfix-orange transition-colors">Categories</Link></li>
              <li><Link to="/services" className="hover:text-nearfix-orange transition-colors">Services Catalog</Link></li>
              <li><Link to="/about" className="hover:text-nearfix-orange transition-colors">About NEARFIX</Link></li>
              <li><Link to="/business-information" className="hover:text-nearfix-orange transition-colors">Business Information</Link></li>
              <li><Link to="/contact" className="hover:text-nearfix-orange transition-colors">Contact Us</Link></li>
              <li><Link to="/list-your-business" className="hover:text-nearfix-orange transition-colors">List Your Business</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Services */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Popular Services</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/services/electrician" className="hover:text-white transition-colors">Electrician Services</Link></li>
              <li><Link to="/services/plumber" className="hover:text-white transition-colors">Plumbing Repairs</Link></li>
              <li><Link to="/services/ac-repair" className="hover:text-white transition-colors">AC Repair & Service</Link></li>
              <li><Link to="/services/local-taxi" className="hover:text-white transition-colors">Local Taxi & Araku Tours</Link></li>
              <li><Link to="/services/hotels" className="hover:text-white transition-colors">Hotels & Resort Booking</Link></li>
              <li><Link to="/services/roadside-assistance" className="hover:text-white transition-colors">24/7 Roadside Assistance</Link></li>
              <li><Link to="/services/building-contractors" className="hover:text-white transition-colors">Construction & House Builders</Link></li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Contact Office</h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a href={NEARFIX_CONTACT.phoneTel} className="flex items-center gap-3 hover:text-nearfix-green transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-nearfix-green flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span>Call: <strong>{NEARFIX_CONTACT.phoneDisplay}</strong></span>
              </a>

              <a href={NEARFIX_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-nearfix-whatsapp transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-nearfix-whatsapp flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span>WhatsApp: <strong>{NEARFIX_CONTACT.whatsappDisplay}</strong></span>
              </a>

              <a href={`mailto:${NEARFIX_CONTACT.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{NEARFIX_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-3 pt-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-nearfix-orange flex-shrink-0 mt-0.5" />
                <span>
                  Semon Residency, 2nd Floor, Room No 3, ZP Colony, Near Govt Hospital, Araku Valley, AP - 531151
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>© {new Date().getFullYear()} NEARFIX. All rights reserved.</p>
          <div className="flex items-center gap-1 text-slate-400">
            Designed for local communities in <span className="text-white font-semibold">Araku Valley & AP</span> <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
