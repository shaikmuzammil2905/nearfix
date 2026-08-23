import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send, CheckCircle, ShieldCheck } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { MapSection } from '../components/MapSection';
import { BackButton } from '../components/BackButton';

export const ContactPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && phone.trim()) {
      setIsSent(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">Contact Us</span>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Official Support
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Contact NEARFIX
        </h1>
        <p className="text-slate-300 text-base max-w-xl leading-relaxed">
          Have questions or need immediate service help? Reach out to us via Call, WhatsApp, Email, or the form below.
        </p>
      </div>

      {/* Grid: Contact Methods & Form */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        
        {/* Left 5 Cols: Quick Action Buttons & Address */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card space-y-6">
            <h3 className="text-xl font-extrabold text-slate-900">Direct Contacts</h3>

            <div className="space-y-4">
              <a
                href={NEARFIX_CONTACT.phoneTel}
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 text-nearfix-green border border-emerald-100 hover:bg-emerald-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-nearfix-green text-white flex items-center justify-center shadow-md">
                  <Phone className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">Call Us Directly</div>
                  <div className="text-xl font-extrabold text-slate-900">{NEARFIX_CONTACT.phoneDisplay}</div>
                </div>
              </a>

              <a
                href={NEARFIX_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 rounded-2xl bg-emerald-50 text-nearfix-whatsapp border border-emerald-100 hover:bg-emerald-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-nearfix-whatsapp text-white flex items-center justify-center shadow-md">
                  <MessageCircle className="w-6 h-6 fill-current" />
                </div>
                <div>
                  <div className="text-xs text-slate-500 font-bold uppercase">WhatsApp Instant Chat</div>
                  <div className="text-xl font-extrabold text-slate-900">{NEARFIX_CONTACT.whatsappDisplay}</div>
                </div>
              </a>

              <a
                href={`mailto:${NEARFIX_CONTACT.email}`}
                className="flex items-center gap-4 p-4 rounded-2xl bg-blue-50 text-nearfix-blue border border-blue-100 hover:bg-blue-100 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-nearfix-blue text-white flex items-center justify-center shadow-md">
                  <Mail className="w-6 h-6" />
                </div>
                <div className="overflow-hidden">
                  <div className="text-xs text-slate-500 font-bold uppercase">Email Application</div>
                  <div className="text-sm font-extrabold text-slate-900 truncate">{NEARFIX_CONTACT.email}</div>
                </div>
              </a>
            </div>

            {/* Address Details */}
            <div className="border-t border-slate-100 pt-6 space-y-2">
              <h4 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                <MapPin className="w-4 h-4 text-nearfix-orange" /> Main Address
              </h4>
              <p className="text-xs text-slate-600 leading-relaxed pl-6">
                Semon Residency, Second Floor, Room No 3,<br />
                ZP Colony, Near Govt Hospital,<br />
                Araku Valley, Alluri Seetha Ramaraju District,<br />
                Andhra Pradesh - 531151, India
              </p>
            </div>
          </div>
        </div>

        {/* Right 7 Cols: Contact Form */}
        <div className="lg:col-span-7">
          <div className="bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card">
            {!isSent ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Send Us a Message</h3>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Suresh Varma"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-sm"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile / WhatsApp *</label>
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 9493XXXXXX"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-sm"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Address</label>
                    <input
                      type="email"
                      placeholder="e.g. name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-sm"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Message / Inquiry *</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Tell us what help you need..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-5 h-5" /> Send Message
                </button>
              </form>
            ) : (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900">Message Received!</h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto">
                  Thank you for contacting NEARFIX. We have received your inquiry and will reach out to you shortly.
                </p>
                <button
                  onClick={() => setIsSent(false)}
                  className="py-2.5 px-6 bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl"
                >
                  Send Another Message
                </button>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Interactive Map */}
      <MapSection />

    </div>
  );
};
