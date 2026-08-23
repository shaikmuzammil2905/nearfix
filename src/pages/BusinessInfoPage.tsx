import React from 'react';
import { MapPin, Phone, MessageCircle, Mail, Calendar, ShieldCheck, Navigation, ExternalLink } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { MapSection } from '../components/MapSection';
import { BackButton } from '../components/BackButton';

export const BusinessInfoPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">Business Profile</span>
      </div>

      {/* Page Title */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Official Business Documentation
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          NEARFIX Business Information
        </h1>
        <p className="text-slate-300 text-base max-w-2xl leading-relaxed">
          Comprehensive company details, registered address, leadership vision, mission, and direct contacts.
        </p>
      </div>

      {/* Grid: Information Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        
        {/* Card 1: Experience & Credentials */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-orange-50 text-nearfix-orange flex items-center justify-center font-bold">
            <Calendar className="w-6 h-6" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Platform Experience</h3>
          <div className="text-3xl font-extrabold text-nearfix-blue">{NEARFIX_CONTACT.experience}</div>
          <p className="text-slate-600 text-sm leading-relaxed">
            Continuously serving the community of Araku Valley and surrounding districts with verified local service discovery.
          </p>
        </div>

        {/* Card 2: Registered Address */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card space-y-4 md:col-span-2">
          <div className="w-12 h-12 rounded-2xl bg-blue-50 text-nearfix-blue flex items-center justify-center font-bold">
            <MapPin className="w-6 h-6 text-nearfix-orange" />
          </div>
          <h3 className="text-xl font-bold text-slate-900">Registered Office Address</h3>
          
          <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-slate-800 text-sm font-medium leading-relaxed">
            <p className="font-bold text-slate-900 text-base">{NEARFIX_CONTACT.name}</p>
            <p>{NEARFIX_CONTACT.addressLines[0]}</p>
            <p>{NEARFIX_CONTACT.addressLines[1]}</p>
            <p>{NEARFIX_CONTACT.addressLines[2]}</p>
            <p>{NEARFIX_CONTACT.addressLines[3]}</p>
            <p className="font-semibold text-nearfix-blue">{NEARFIX_CONTACT.addressLines[4]}</p>
            <p>{NEARFIX_CONTACT.addressLines[5]}</p>
            <p className="font-bold text-slate-900">{NEARFIX_CONTACT.addressLines[6]}</p>
            <p>{NEARFIX_CONTACT.addressLines[7]}</p>
          </div>

          <a
            href={NEARFIX_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-xs font-bold text-nearfix-orange hover:underline pt-1"
          >
            <Navigation className="w-4 h-4" /> Open in Google Maps Navigation <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>

      </div>

      {/* Direct Contact Details Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        <a
          href={NEARFIX_CONTACT.phoneTel}
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex items-center gap-4 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-nearfix-green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Phone className="w-7 h-7 fill-current" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">Phone Helpline</div>
            <div className="text-xl font-extrabold text-slate-900">{NEARFIX_CONTACT.phoneDisplay}</div>
          </div>
        </a>

        <a
          href={NEARFIX_CONTACT.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex items-center gap-4 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-nearfix-whatsapp flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <MessageCircle className="w-7 h-7 fill-current" />
          </div>
          <div>
            <div className="text-xs text-slate-500 font-bold uppercase">WhatsApp Desk</div>
            <div className="text-xl font-extrabold text-slate-900">{NEARFIX_CONTACT.whatsappDisplay}</div>
          </div>
        </a>

        <a
          href={`mailto:${NEARFIX_CONTACT.email}`}
          className="bg-white p-6 rounded-3xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all flex items-center gap-4 group"
        >
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-nearfix-blue flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
            <Mail className="w-7 h-7" />
          </div>
          <div className="overflow-hidden">
            <div className="text-xs text-slate-500 font-bold uppercase">Email Support</div>
            <div className="text-sm font-extrabold text-slate-900 truncate">{NEARFIX_CONTACT.email}</div>
          </div>
        </a>
      </div>

      {/* Map Section */}
      <MapSection />

    </div>
  );
};
