import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ClipboardList, Phone, MessageCircle, Clock, ShieldCheck, ArrowRight, Trash2 } from 'lucide-react';
import { SubmittedLead } from '../components/LeadModal';
import { NEARFIX_CONTACT } from '../data/contactInfo';

export const MyLeadsPage: React.FC = () => {
  const [leads, setLeads] = useState<SubmittedLead[]>([]);

  useEffect(() => {
    try {
      const stored = localStorage.getItem('nearfix_leads');
      if (stored) {
        setLeads(JSON.parse(stored));
      }
    } catch (err) {
      console.error(err);
    }
  }, []);

  const handleClear = () => {
    localStorage.removeItem('nearfix_leads');
    setLeads([]);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-8">
      
      {/* Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-2 max-w-xl">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
            <ClipboardList className="w-4 h-4" /> Lead Tracking & Request History
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight">Your Service Requests</h1>
          <p className="text-slate-300 text-sm sm:text-base">
            You can track your submitted requirements and connection history here.
          </p>
        </div>

        {leads.length > 0 && (
          <button
            onClick={handleClear}
            className="flex items-center gap-1.5 py-2 px-4 bg-red-500/20 hover:bg-red-500/30 text-red-300 border border-red-500/40 rounded-xl text-xs font-bold transition-colors"
          >
            <Trash2 className="w-4 h-4" /> Clear History
          </button>
        )}
      </div>

      {/* Content Body */}
      {leads.length > 0 ? (
        <div className="space-y-4">
          <h2 className="text-xl font-bold text-slate-900">Submitted Requirements ({leads.length})</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {leads.map((lead) => (
              <div key={lead.id} className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card space-y-4">
                <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                  <span className="text-xs font-extrabold text-nearfix-blue bg-blue-50 px-2.5 py-1 rounded-lg">
                    {lead.id}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {new Date(lead.createdAt).toLocaleDateString()}
                  </span>
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Service Needed:</span>
                    <span className="font-bold text-slate-900">{lead.service}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Customer Name:</span>
                    <span className="font-semibold text-slate-800">{lead.name}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Phone Number:</span>
                    <span className="font-semibold text-slate-800">{lead.phone}</span>
                  </div>

                  <div className="flex justify-between text-sm">
                    <span className="text-slate-500 font-medium">Location:</span>
                    <span className="font-semibold text-slate-800">{lead.location}</span>
                  </div>

                  {lead.message && (
                    <div className="pt-2 text-xs text-slate-600 bg-slate-50 p-3 rounded-xl border border-slate-100">
                      <strong>Details:</strong> {lead.message}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs">
                  <span className="text-emerald-700 font-semibold flex items-center gap-1">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" /> Connecting via {lead.contactMethod}
                  </span>

                  <a
                    href={lead.contactMethod === 'WhatsApp' ? NEARFIX_CONTACT.whatsappUrl : NEARFIX_CONTACT.phoneTel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-nearfix-orange hover:underline flex items-center gap-1"
                  >
                    Follow up <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        /* Empty State */
        <div className="bg-white rounded-3xl p-12 text-center border border-slate-100 shadow-sm max-w-lg mx-auto space-y-4">
          <div className="w-16 h-16 mx-auto bg-blue-50 text-nearfix-blue rounded-full flex items-center justify-center">
            <ClipboardList className="w-8 h-8 text-nearfix-orange" />
          </div>

          <h3 className="text-2xl font-bold text-slate-900">No Submitted Requirements Yet</h3>

          <p className="text-slate-600 text-sm leading-relaxed">
            You can track your submitted requirements here whenever you request a local service provider through NEARFIX.
          </p>

          <Link
            to="/services"
            className="inline-flex items-center gap-2 py-3 px-6 bg-nearfix-blue text-white font-bold text-sm rounded-xl shadow-md"
          >
            Browse Services <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

    </div>
  );
};
