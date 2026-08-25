import React, { useState } from 'react';
import { X, CheckCircle, Phone, MessageCircle, Send, ShieldCheck } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { CATEGORIES } from '../data/categories';
import { CMSService } from '../services/cmsService';

interface LeadModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
  initialCategory?: string;
}

export interface SubmittedLead {
  id: string;
  name: string;
  phone: string;
  service: string;
  location: string;
  message: string;
  contactMethod: 'Call' | 'WhatsApp';
  createdAt: string;
}

export const LeadModal: React.FC<LeadModalProps> = ({
  isOpen,
  onClose,
  initialService = '',
  initialCategory = ''
}) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(initialService);
  const [location, setLocation] = useState('Araku Valley');
  const [message, setMessage] = useState('');
  const [contactMethod, setContactMethod] = useState<'Call' | 'WhatsApp'>('Call');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim() || phone.length < 10) newErrors.phone = 'Please enter a valid 10-digit phone number';
    if (!service.trim()) newErrors.service = 'Please specify or select a service';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

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

    // Save to LocalStorage & Supabase via CMSService
    CMSService.submitContactRequest({
      name: name.trim(),
      phone: phone.trim(),
      service: service.trim(),
      location: location.trim() || 'Araku Valley',
      message: message.trim(),
      contactMethod
    });

    // Direct WhatsApp Dispatch
    const wpText = `Hello NEARFIX, I want to submit a service request details:\n\n*Name:* ${name.trim()}\n*Phone:* ${phone.trim()}\n*Service Needed:* ${service.trim()}\n*Location/District:* ${location.trim() || 'Araku Valley'}\n*Preferred Contact:* ${contactMethod}${message.trim() ? `\n*Details:* ${message.trim()}` : ''}`;
    const wpUrl = `https://wa.me/919493192020?text=${encodeURIComponent(wpText)}`;
    
    // Open WhatsApp in new tab
    window.open(wpUrl, '_blank');

    setIsSubmitted(true);
  };

  const handleResetAndClose = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setMessage('');
    setErrors({});
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn"
      onClick={handleResetAndClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={handleResetAndClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-slate-100 text-slate-500 hover:text-slate-800 hover:bg-slate-200 transition-colors z-10"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            {/* Header */}
            <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy p-6 text-white">
              <div className="flex items-center gap-2 text-nearfix-orange text-xs font-bold uppercase tracking-wider mb-1">
                <ShieldCheck className="w-4 h-4" /> Official Lead Generation Request
              </div>
              <h3 className="text-2xl font-bold">Request Service / Get Help</h3>
              <p className="text-slate-300 text-sm mt-1">
                Tell us what you need and NEARFIX will connect you with a verified local service provider.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Your Full Name *</label>
                <input
                  type="text"
                  placeholder="e.g. Rajesh Kumar"
                  value={name}
                  onChange={(e) => { setName(e.target.value); setErrors(prev => ({ ...prev, name: '' })); }}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.name ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-nearfix-blue'} focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-slate-800 text-sm transition-all`}
                />
                {errors.name && <p className="text-xs text-red-500 mt-1">{errors.name}</p>}
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Mobile / WhatsApp Number *</label>
                <input
                  type="tel"
                  placeholder="e.g. 9493XXXXXX"
                  value={phone}
                  onChange={(e) => { setPhone(e.target.value); setErrors(prev => ({ ...prev, phone: '' })); }}
                  className={`w-full px-4 py-3 rounded-xl border ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-nearfix-blue'} focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-slate-800 text-sm transition-all`}
                />
                {errors.phone && <p className="text-xs text-red-500 mt-1">{errors.phone}</p>}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Service Required *</label>
                  <input
                    type="text"
                    placeholder="e.g. Electrician, AC Repair, Taxi"
                    value={service}
                    onChange={(e) => { setService(e.target.value); setErrors(prev => ({ ...prev, service: '' })); }}
                    className={`w-full px-4 py-3 rounded-xl border ${errors.service ? 'border-red-500 bg-red-50' : 'border-slate-300 focus:border-nearfix-blue'} focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-slate-800 text-sm transition-all`}
                  />
                  {errors.service && <p className="text-xs text-red-500 mt-1">{errors.service}</p>}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-slate-700 mb-1">Select Location / District *</label>
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-slate-800 text-sm transition-all bg-white"
                  >
                    <optgroup label="Alluri Seetha Ramaraju District">
                      <option value="Araku Valley">Araku Valley</option>
                      <option value="Paderu">Paderu</option>
                      <option value="Chinthapalli">Chinthapalli</option>
                    </optgroup>
                    <option value="Visakhapatnam District">Visakhapatnam District</option>
                    <option value="Anakapalli District">Anakapalli District</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-1">Requirement / Details</label>
                <textarea
                  rows={3}
                  placeholder="Describe your issue or timing requirement (optional)..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-slate-800 text-sm transition-all resize-none"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">Preferred Contact Method</label>
                <div className="grid grid-cols-2 gap-3">
                  <button
                    type="button"
                    onClick={() => setContactMethod('Call')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-medium text-sm transition-all ${contactMethod === 'Call' ? 'bg-nearfix-blue text-white border-nearfix-blue shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                  >
                    <Phone className="w-4 h-4" /> Phone Call
                  </button>

                  <button
                    type="button"
                    onClick={() => setContactMethod('WhatsApp')}
                    className={`flex items-center justify-center gap-2 py-3 px-4 rounded-xl border font-medium text-sm transition-all ${contactMethod === 'WhatsApp' ? 'bg-nearfix-whatsapp text-white border-nearfix-whatsapp shadow-sm' : 'bg-slate-50 text-slate-700 border-slate-200 hover:bg-slate-100'}`}
                  >
                    <MessageCircle className="w-4 h-4" /> WhatsApp
                  </button>
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-4 px-6 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-bold text-base rounded-2xl shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.01] active:scale-[0.99] flex items-center justify-center gap-2 mt-2"
              >
                <Send className="w-5 h-5" /> Submit Requirement
              </button>
            </form>
          </div>
        ) : (
          /* Success Popup state */
          <div className="p-8 text-center animate-fadeIn">
            <div className="w-20 h-20 mx-auto mb-4 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center shadow-inner">
              <CheckCircle className="w-10 h-10" />
            </div>

            <h3 className="text-3xl font-extrabold text-slate-900 mb-2">Request Received!</h3>
            <p className="text-slate-600 text-base max-w-sm mx-auto mb-6">
              Thank you for contacting NEARFIX. We will help connect you with the right local service provider in <span className="font-semibold text-slate-900">{location}</span>.
            </p>

            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 text-left mb-6 space-y-2 text-sm">
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Service Requested:</span>
                <span className="font-bold text-slate-900">{service}</span>
              </div>
              <div className="flex justify-between border-b border-slate-200 pb-2">
                <span className="text-slate-500 font-medium">Contact Number:</span>
                <span className="font-bold text-slate-900">{phone}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500 font-medium">Preferred Contact:</span>
                <span className="font-bold text-emerald-600">{contactMethod}</span>
              </div>
            </div>

            <p className="text-xs text-slate-500 mb-4">Want immediate help? Connect with us directly:</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-4">
              <a
                href={NEARFIX_CONTACT.phoneTel}
                className="flex items-center justify-center gap-2 py-3 px-4 bg-nearfix-green hover:bg-emerald-700 text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <Phone className="w-4 h-4 fill-current" /> Call {NEARFIX_CONTACT.phoneDisplay}
              </a>

              <a
                href={NEARFIX_CONTACT.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 px-4 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-bold text-sm rounded-xl transition-all shadow-md"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp
              </a>
            </div>

            <button
              onClick={handleResetAndClose}
              className="w-full py-3 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold text-sm rounded-xl transition-colors"
            >
              Done & Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
