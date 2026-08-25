import React, { useState, useEffect } from 'react';
import { Search, Filter, Mail, Phone, MessageCircle, CheckCircle, Trash2, Eye, Inbox, MapPin, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService, ContactRequestCMSData } from '../../services/cmsService';

export const AdminContacts: React.FC = () => {
  const [requests, setRequests] = useState<ContactRequestCMSData[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filterStatus, setFilterStatus] = useState<'all' | 'unread' | 'read'>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Selected lead for detail view modal
  const [selectedLead, setSelectedLead] = useState<ContactRequestCMSData | null>(null);

  // Delete modal state
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadRequests = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getContactRequests();
      setRequests(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadRequests();
  }, []);

  const handleToggleRead = async (req: ContactRequestCMSData) => {
    const updated = await CMSService.toggleContactRead(req.id, !req.isRead);
    setRequests(updated);
    if (selectedLead?.id === req.id) {
      setSelectedLead({ ...selectedLead, isRead: !req.isRead });
    }
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteContactRequest(deleteTargetId);
      setRequests(updated);
      setDeleteTargetId(null);
      if (selectedLead?.id === deleteTargetId) {
        setSelectedLead(null);
      }
    }
  };

  // Filter & Search
  const filteredRequests = requests.filter((r) => {
    const matchesFilter = filterStatus === 'all' ||
      (filterStatus === 'unread' && !r.isRead) ||
      (filterStatus === 'read' && r.isRead);

    const matchesSearch = r.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.phone.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.service.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          r.location.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesFilter && matchesSearch;
  });

  return (
    <AdminLayout
      title="Contact Enquiries & Service Leads"
      subtitle={`View and manage all customer service requests submitted from NearFix (${requests.length})`}
    >
      <div className="space-y-6">

        {/* SEARCH & FILTERS BAR */}
        <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search customer, phone, service..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-nearfix-orange"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <div className="flex items-center gap-1 bg-slate-100 p-1 rounded-xl w-full sm:w-auto">
              <button
                onClick={() => setFilterStatus('all')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${filterStatus === 'all' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
              >
                All ({requests.length})
              </button>
              <button
                onClick={() => setFilterStatus('unread')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${filterStatus === 'unread' ? 'bg-white text-purple-700 shadow-xs' : 'text-slate-600'}`}
              >
                Unread ({requests.filter(r => !r.isRead).length})
              </button>
              <button
                onClick={() => setFilterStatus('read')}
                className={`px-3 py-1 text-xs font-bold rounded-lg transition-all ${filterStatus === 'read' ? 'bg-white text-slate-900 shadow-xs' : 'text-slate-600'}`}
              >
                Read ({requests.filter(r => r.isRead).length})
              </button>
            </div>
          </div>
        </div>

        {/* ENQUIRIES TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {filteredRequests.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs font-semibold">
              No contact requests found matching your search.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-extrabold text-slate-400 uppercase bg-slate-50/50">
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4">Customer Name</th>
                    <th className="py-3.5 px-4">Service Needed</th>
                    <th className="py-3.5 px-4">Location</th>
                    <th className="py-3.5 px-4">Method</th>
                    <th className="py-3.5 px-4">Date</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {filteredRequests.map((req) => (
                    <tr key={req.id} className={`hover:bg-slate-50 transition-colors ${!req.isRead ? 'bg-purple-50/30 font-semibold' : ''}`}>
                      <td className="py-3.5 px-4">
                        <button
                          onClick={() => handleToggleRead(req)}
                          className={`w-2.5 h-2.5 rounded-full ${!req.isRead ? 'bg-purple-600 ring-4 ring-purple-100 animate-pulse' : 'bg-slate-300'}`}
                          title={req.isRead ? 'Mark as Unread' : 'Mark as Read'}
                        />
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <div>{req.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{req.phone}</div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-nearfix-blue">{req.service}</td>
                      <td className="py-3.5 px-4">{req.location}</td>
                      <td className="py-3.5 px-4">
                        <span className={`px-2.5 py-0.5 rounded-full text-[10px] font-extrabold ${req.contactMethod === 'WhatsApp' ? 'bg-emerald-100 text-emerald-800' : 'bg-blue-100 text-blue-800'}`}>
                          {req.contactMethod}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-slate-400">
                        {new Date(req.createdAt).toLocaleDateString()}
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <div className="flex items-center justify-end gap-2">
                          <button
                            onClick={() => setSelectedLead(req)}
                            className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                            title="View Lead Details"
                          >
                            <Eye className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteTargetId(req.id)}
                            className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                            title="Delete Lead"
                          >
                            <Trash2 className="w-4 h-4" />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* DETAIL MODAL */}
      {selectedLead && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div>
                <h3 className="text-lg font-black text-slate-900">Enquiry Details</h3>
                <p className="text-xs text-slate-400 font-mono">ID: {selectedLead.id}</p>
              </div>
              <button onClick={() => setSelectedLead(null)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-2 gap-4 bg-slate-50 p-4 rounded-2xl border border-slate-200">
                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Customer Name</span>
                  <span className="font-extrabold text-slate-900 text-sm">{selectedLead.name}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Phone / Mobile</span>
                  <a href={`tel:${selectedLead.phone}`} className="font-extrabold text-nearfix-green text-sm hover:underline flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5" /> {selectedLead.phone}
                  </a>
                </div>

                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Service Requested</span>
                  <span className="font-extrabold text-nearfix-blue text-sm">{selectedLead.service}</span>
                </div>

                <div>
                  <span className="text-slate-400 font-bold block uppercase text-[10px]">Location</span>
                  <span className="font-extrabold text-slate-800 flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5 text-nearfix-orange" /> {selectedLead.location}
                  </span>
                </div>
              </div>

              {selectedLead.message && (
                <div className="space-y-1">
                  <span className="text-slate-400 font-bold uppercase text-[10px]">Customer Message / Requirements</span>
                  <div className="p-3 bg-slate-50 rounded-xl text-slate-700 font-medium leading-relaxed border border-slate-200">
                    {selectedLead.message}
                  </div>
                </div>
              )}

              <div className="flex items-center justify-between text-slate-400 text-[11px] pt-2 border-t border-slate-100">
                <span>Submitted on: {new Date(selectedLead.createdAt).toLocaleString()}</span>
                <button
                  onClick={() => handleToggleRead(selectedLead)}
                  className="text-nearfix-blue font-bold hover:underline"
                >
                  {selectedLead.isRead ? 'Mark as Unread' : 'Mark as Read'}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-3 border-t border-slate-100">
              <a
                href={`https://wa.me/91${selectedLead.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-emerald-600 text-white font-bold text-xs rounded-xl flex items-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> Reply on WhatsApp
              </a>
              <button
                onClick={() => setSelectedLead(null)}
                className="px-4 py-2 bg-slate-100 text-slate-800 font-bold text-xs rounded-xl"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Enquiry"
        message="Are you sure you want to delete this enquiry record?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
