import React, { useState } from 'react';
import { Wrench, Send, CheckCircle, Info } from 'lucide-react';
import { CATEGORIES } from '../data/categories';
import { BackButton } from '../components/BackButton';

export const ListYourBusinessPage: React.FC = () => {
  const [businessName, setBusinessName] = useState('');
  const [ownerName, setOwnerName] = useState('');
  const [phone, setPhone] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [category, setCategory] = useState(CATEGORIES[0].name);
  const [services, setServices] = useState('');
  const [location, setLocation] = useState('Araku Valley');
  const [description, setDescription] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (businessName.trim() && ownerName.trim() && phone.trim()) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">Business Registration</span>
      </div>

      {/* Header Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl space-y-4">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
          <Wrench className="w-4 h-4" /> Provider Opportunity
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Are You a Local Service Provider?
        </h1>
        <p className="text-slate-300 text-base max-w-xl leading-relaxed">
          Get discovered by customers in your area through NEARFIX. Partner with us to receive quality phone & WhatsApp leads.
        </p>
      </div>

      {/* Form Container */}
      <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 sm:p-10 border border-slate-100 shadow-card">
        
        {/* Verification Disclosure */}
        <div className="bg-blue-50 border border-blue-200/80 rounded-2xl p-4 mb-6 flex items-start gap-3">
          <Info className="w-5 h-5 text-nearfix-blue flex-shrink-0 mt-0.5" />
          <p className="text-xs text-slate-700 leading-relaxed font-medium">
            <strong>Verification Notice:</strong> Submitting your business details initiates our local verification process. Your business listing will be activated once physical or document verification is completed by NEARFIX team.
          </p>
        </div>

        {!isSubmitted ? (
          <form onSubmit={handleSubmit} className="space-y-4">
            <h3 className="text-2xl font-extrabold text-slate-900 mb-4">Business Registration Form</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Sri Lakshmi Electricals"
                  value={businessName}
                  onChange={(e) => setBusinessName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Owner / Contact Person *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. K. Ramu"
                  value={ownerName}
                  onChange={(e) => setOwnerName(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Phone Number *</label>
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
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
                <input
                  type="tel"
                  placeholder="e.g. 9493XXXXXX"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Category *</label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm bg-white"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.id} value={c.name}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location / Service Area *</label>
                <input
                  type="text"
                  required
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Specific Services Offered</label>
              <input
                type="text"
                placeholder="e.g. House wiring, MCB repair, Fan installation"
                value={services}
                onChange={(e) => setServices(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business Description / Experience</label>
              <textarea
                rows={3}
                placeholder="Describe your experience, shop address, and specialties..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue outline-none text-sm resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 px-6 bg-nearfix-blue hover:bg-nearfix-navy text-white font-bold text-base rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2"
            >
              <Send className="w-5 h-5 text-nearfix-orange" /> Submit Business Enquiries
            </button>
          </form>
        ) : (
          <div className="text-center py-12 space-y-4">
            <div className="w-16 h-16 mx-auto bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="text-2xl font-bold text-slate-900">Application Submitted!</h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto">
              Thank you for registering <span className="font-bold text-slate-900">{businessName}</span> with NEARFIX. Our local verification agent will contact you shortly on {phone}.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="py-2.5 px-6 bg-slate-100 text-slate-700 font-semibold text-sm rounded-xl"
            >
              Submit Another Business
            </button>
          </div>
        )}

      </div>

    </div>
  );
};
