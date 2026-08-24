import React, { useState } from 'react';
import { MessageCircle, X, ShieldCheck, MapPin, User } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface WhatsAppModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const WhatsAppModal: React.FC<WhatsAppModalProps> = ({ isOpen, onClose, serviceName = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(serviceName);
  const [location, setLocation] = useState('Araku Valley');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmitAndWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    const newErrors: { [key: string]: string } = {};

    if (!name.trim()) newErrors.name = 'Please enter your name';
    if (!phone.trim() || phone.length < 10) newErrors.phone = 'Enter valid 10-digit mobile number';

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Save lead into localStorage for lead tracking
    try {
      const newLead = {
        id: `LEAD-${Date.now()}`,
        name: name.trim(),
        phone: phone.trim(),
        service: service.trim() || 'General Service Booking',
        location,
        message: note.trim(),
        contactMethod: 'WhatsApp',
        createdAt: new Date().toISOString()
      };
      const existingStr = localStorage.getItem('nearfix_leads');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem('nearfix_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error('Failed to save lead', err);
    }

    // Generate pre-filled WhatsApp message
    const messageText = `Hello NEARFIX! I am submitting a service request:
👤 Name: ${name.trim()}
📱 Phone: ${phone.trim()}
📍 Location: ${location}
🛠️ Service Needed: ${service.trim() || 'General Assistance'}${note.trim() ? `\n📝 Note: ${note.trim()}` : ''}`;

    const waUrl = `https://wa.me/919493192020?text=${encodeURIComponent(messageText)}`;
    window.open(waUrl, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={onClose}
    >
      <div 
        className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100 transform transition-all duration-300 scale-100 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header Bar */}
        <div className="bg-gradient-to-r from-emerald-500 via-nearfix-whatsapp to-emerald-600 p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="w-14 h-14 mx-auto mb-2 bg-white text-nearfix-whatsapp rounded-2xl flex items-center justify-center shadow-lg">
            <MessageCircle className="w-8 h-8 fill-current" />
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight">Visitor WhatsApp Booking</h3>
          <p className="text-emerald-50 text-xs sm:text-sm mt-1">Connect with NEARFIX instantly on WhatsApp</p>
        </div>

        {/* Modal Form Body */}
        <form onSubmit={handleSubmitAndWhatsApp} className="p-6 space-y-4">
          <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-3 flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-emerald-600 flex-shrink-0" />
            <div className="text-xs text-slate-700 font-medium">
              Official WhatsApp Helpdesk: <strong className="text-slate-900">{NEARFIX_CONTACT.whatsappDisplay}</strong> (Instant reply)
            </div>
          </div>

          {/* Visitor Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Priya Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.name ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
            </div>
            {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
          </div>

          {/* Mobile Number */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mobile Phone Number *</label>
            <div className="relative">
              <MessageCircle className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="tel"
                placeholder="e.g. 9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className={`w-full pl-10 pr-4 py-2.5 bg-slate-50 border ${errors.phone ? 'border-red-500' : 'border-slate-200'} rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500`}
              />
            </div>
            {errors.phone && <p className="text-red-500 text-xs mt-1">{errors.phone}</p>}
          </div>

          {/* Location / District */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Location / District *</label>
            <div className="relative">
              <MapPin className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <select
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
              >
                <option value="Araku Valley">Araku Valley</option>
                <option value="Paderu">Paderu</option>
                <option value="Chinthapalli">Chinthapalli</option>
                <option value="Visakhapatnam District">Visakhapatnam District</option>
                <option value="Anakapalli District">Anakapalli District</option>
                <option value="Alluri Seetha Ramaraju District">Alluri Seetha Ramaraju District</option>
              </select>
            </div>
          </div>

          {/* Service Needed */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Needed (Optional)</label>
            <input
              type="text"
              placeholder="e.g. Electrician, Taxi, Hotel Booking, Plumbing"
              value={service}
              onChange={(e) => setService(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>

          {/* Additional Notes */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Requirements / Note (Optional)</label>
            <textarea
              rows={2}
              placeholder="Tell us what you need help with..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-nearfix-whatsapp hover:bg-emerald-600 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-500/25 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <MessageCircle className="w-6 h-6 fill-current" />
              Submit & Chat on WhatsApp
            </button>

            <button
              type="button"
              onClick={onClose}
              className="w-full py-2.5 px-4 bg-slate-100 hover:bg-slate-200 text-slate-700 font-semibold rounded-xl transition-colors text-xs"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
