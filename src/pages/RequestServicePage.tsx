import React, { useState } from 'react';
import { ShieldCheck, Send, CheckCircle, Phone, MessageCircle } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { SubmittedLead } from '../components/LeadModal';
import { BackButton } from '../components/BackButton';

export const RequestServicePage: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState('');
  const [location, setLocation] = useState('Araku Valley');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState<'Call' | 'WhatsApp'>('Call');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !service.trim()) return;

    const newLead: SubmittedLead = {
      id: `LEAD-${Date.now()}`,
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim(),
      location: location.trim() || 'Araku Valley',
      message: message.trim(),
      contactMethod,
      createdAt: new Date().toISOString()
    };

    try {
      const existingStr = localStorage.getItem('nearfix_leads');
      const existing: SubmittedLead[] = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem('nearfix_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error(err);
    }

    // Direct WhatsApp Dispatch
    const wpText = `Hello NEARFIX, I want to submit a service request:\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Service Needed:* ${service.trim()}\n*Location/District:* ${location.trim() || 'Araku Valley'}\n*Preferred Contact:* ${contactMethod}${message.trim() ? `\n*Details:* ${message.trim()}` : ''}`;
    const wpUrl = `https://wa.me/919493192020?text=${encodeURIComponent(wpText)}`;
    window.open(wpUrl, '_blank');

    setIsSubmitted(true);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">Request Form</span>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> Service Request Desk
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Request Service / Get Help
        </h1>
        <p className="text-slate-300 text-base max-w-xl leading-relaxed">
          Submit your requirements and NEARFIX will help connect you with verified local service providers in Araku Valley.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-2xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card">
        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-2">Tell Us What Help You Need</h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Full Name *</label>
              <input
                type="text"
                required
                placeholder="e.g. Anand Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
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
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Needed *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Plumber, AC Repair, Taxi"
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Select Location / District *</label>
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm bg-white"
              >
                <option value="Visakhapatnam District">Visakhapatnam District</option>
                <option value="Anakapalli District">Anakapalli District</option>
                <option value="Alluri Seetha Ramaraju District">Alluri Seetha Ramaraju District</option>
                <option value="Araku Valley">Araku Valley</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Requirement Details</label>
              <textarea
                rows={3}
                placeholder="Describe your issue or timing requirement..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm resize-none"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-2">Preferred Contact Method</label>
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setContactMethod('Call')}
                  className={`py-3 px-4 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 ${contactMethod === 'Call' ? 'bg-nearfix-blue text-white border-nearfix-blue' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
                >
                  <Phone className="w-4 h-4" /> Phone Call
                </button>
                <button
                  type="button"
                  onClick={() => setContactMethod('WhatsApp')}
                  className={`py-3 px-4 rounded-xl border font-semibold text-xs flex items-center justify-center gap-2 ${contactMethod === 'WhatsApp' ? 'bg-nearfix-whatsapp text-white border-nearfix-whatsapp' : 'bg-slate-50 text-slate-700 border-slate-200'}`}
                >
                  <MessageCircle className="w-4 h-4" /> WhatsApp
                </button>
              </div>
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-5 h-5" /> Submit Requirement
            </button>
          </form>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-3xl font-extrabold text-slate-900">Request Received!</h3>
            <p className="text-slate-600 text-sm max-w-sm mx-auto">
              Thank you for contacting NEARFIX. We will help connect you with the right local service provider.
            </p>
            <div className="flex justify-center gap-3 pt-2">
              <a
                href={NEARFIX_CONTACT.phoneTel}
                className="py-2.5 px-5 bg-nearfix-green text-white font-bold text-xs rounded-xl flex items-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" /> Call Helpline
              </a>
              <a
                href={NEARFIX_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 px-5 bg-nearfix-whatsapp text-white font-bold text-xs rounded-xl flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>
            </div>
          </div>
        )}
      </div>

    </div>
  );
};
