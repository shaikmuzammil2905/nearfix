import React, { useState } from 'react';
import { Phone, X, ShieldCheck, MapPin, User } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface CallModalProps {
  isOpen: boolean;
  onClose: () => void;
  serviceName?: string;
}

export const CallModal: React.FC<CallModalProps> = ({ isOpen, onClose, serviceName = '' }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [service, setService] = useState(serviceName);
  const [location, setLocation] = useState('Araku Valley');
  const [note, setNote] = useState('');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  if (!isOpen) return null;

  const handleSubmitAndCall = (e: React.FormEvent) => {
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
        service: service.trim() || 'General Inquiry',
        location,
        message: note.trim(),
        contactMethod: 'Call',
        createdAt: new Date().toISOString()
      };
      const existingStr = localStorage.getItem('nearfix_leads');
      const existing = existingStr ? JSON.parse(existingStr) : [];
      localStorage.setItem('nearfix_leads', JSON.stringify([newLead, ...existing]));
    } catch (err) {
      console.error('Failed to save lead', err);
    }

    // Initiate Call
    window.location.href = NEARFIX_CONTACT.phoneTel;
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
        {/* Top Accent Gradient Header */}
        <div className="bg-gradient-to-r from-emerald-600 via-nearfix-green to-emerald-700 p-6 text-white text-center relative">
          <button 
            onClick={onClose}
            className="absolute top-4 right-4 p-2 rounded-full bg-white/20 text-white hover:bg-white/30 transition-colors"
            aria-label="Close dialog"
          >
            <X className="w-5 h-5" />
          </button>
          
          <div className="w-14 h-14 mx-auto mb-2 bg-white text-nearfix-green rounded-2xl flex items-center justify-center shadow-lg animate-bounce">
            <Phone className="w-7 h-7 fill-current" />
          </div>

          <h3 className="text-2xl font-extrabold tracking-tight">Visitor Service Call Request</h3>
          <p className="text-emerald-100 text-xs sm:text-sm mt-1">
            Fill in your details below to connect with NEARFIX Helpline ({NEARFIX_CONTACT.phoneDisplay})
          </p>
        </div>

        {/* Content Body / Visitor Form */}
        <form onSubmit={handleSubmitAndCall} className="p-6 space-y-4">
          <div className="bg-emerald-50/80 border border-emerald-100 p-3 rounded-2xl flex items-center gap-3">
            <ShieldCheck className="w-6 h-6 text-nearfix-green flex-shrink-0" />
            <p className="text-xs text-emerald-900 font-medium">
              Verified Local Helpline for <strong>Visakhapatnam, Anakapalli, Alluri Seetha Ramaraju & Araku Valley</strong>.
            </p>
          </div>

          {/* Visitor Name */}
          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Your Name *</label>
            <div className="relative">
              <User className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
              <input
                type="text"
                placeholder="e.g. Ramesh Kumar"
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
              <Phone className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
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
              placeholder="e.g. Electrician, Plumbing leak, Taxi, AC Repair"
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
              placeholder="Brief details about your problem..."
              value={note}
              onChange={(e) => setNote(e.target.value)}
              className="w-full px-4 py-2.5 bg-slate-50 border border-slate-200 rounded-xl text-sm focus:bg-white focus:outline-none focus:ring-2 focus:ring-emerald-500 resize-none"
            />
          </div>

          {/* Action Buttons */}
          <div className="pt-2 space-y-2">
            <button
              type="submit"
              className="flex items-center justify-center gap-2.5 w-full py-4 px-6 bg-nearfix-green hover:bg-emerald-700 text-white font-extrabold text-base rounded-2xl shadow-lg shadow-emerald-600/30 transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Phone className="w-5 h-5 fill-current" />
              Submit & Call Now ({NEARFIX_CONTACT.phoneDisplay})
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
