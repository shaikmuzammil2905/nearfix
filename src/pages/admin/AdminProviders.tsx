import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Phone, MapPin, Star, UserCheck, Eye, EyeOff, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService, ProviderCMSData } from '../../services/cmsService';

export const AdminProviders: React.FC = () => {
  const [providers, setProviders] = useState<ProviderCMSData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingProvider, setEditingProvider] = useState<Partial<ProviderCMSData> | null>(null);

  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadProviders = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getProviders();
      setProviders(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadProviders();
  }, []);

  const handleToggleActive = async (prov: ProviderCMSData) => {
    const updated = await CMSService.saveProvider({ ...prov, isActive: !prov.isActive });
    setProviders(updated);
  };

  const handleOpenForm = (prov?: ProviderCMSData) => {
    if (prov) {
      setEditingProvider(prov);
    } else {
      setEditingProvider({
        name: '',
        phone: '9493416030',
        location: 'Araku Valley',
        description: '',
        servicesOffered: ["Electrician"],
        profileImage: '/hero-technician-visual.png',
        rating: 5.0,
        isActive: true
      });
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingProvider?.name) return;

    const updated = await CMSService.saveProvider(editingProvider);
    setProviders(updated);
    setIsFormOpen(false);
    setEditingProvider(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteProvider(deleteTargetId);
      setProviders(updated);
      setDeleteTargetId(null);
    }
  };

  return (
    <AdminLayout
      title="Service Providers CMS"
      subtitle={`Manage verified local service professionals and businesses (${providers.length})`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Service Provider
        </button>
      }
    >
      <div className="space-y-6">

        {/* PROVIDERS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {providers.map((prov) => {
            const isActive = prov.isActive !== false;
            return (
              <div
                key={prov.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm p-5 space-y-4 flex flex-col justify-between transition-all ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}
              >
                <div className="space-y-3">
                  <div className="flex items-start gap-4">
                    <img
                      src={prov.profileImage || '/hero-technician-visual.png'}
                      alt={prov.name}
                      className="w-16 h-16 rounded-2xl object-cover border border-slate-200 bg-slate-100 flex-shrink-0"
                    />
                    <div className="min-w-0 flex-1">
                      <div className="flex items-center justify-between">
                        <h3 className="font-extrabold text-slate-900 text-sm truncate">{prov.name}</h3>
                        <div className="flex items-center gap-1 text-xs font-bold text-amber-500 bg-amber-50 px-2 py-0.5 rounded-md">
                          <Star className="w-3.5 h-3.5 fill-current" /> {prov.rating}
                        </div>
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                        <Phone className="w-3.5 h-3.5 text-nearfix-green" /> {prov.phone}
                      </div>

                      <div className="flex items-center gap-2 text-xs text-slate-500 mt-0.5">
                        <MapPin className="w-3.5 h-3.5 text-nearfix-orange" /> {prov.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-2">
                    {prov.description}
                  </p>

                  {prov.servicesOffered?.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {prov.servicesOffered.map((s, idx) => (
                        <span key={idx} className="bg-slate-100 text-slate-700 text-[10px] font-bold px-2 py-0.5 rounded-md">
                          {s}
                        </span>
                      ))}
                    </div>
                  )}
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleToggleActive(prov)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black cursor-pointer ${
                      isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <Eye className="w-3 h-3 text-emerald-600" /> Active
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 text-slate-500" /> Hidden
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenForm(prov)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                      title="Edit Provider"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTargetId(prov.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                      title="Delete Provider"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* CREATE / EDIT MODAL */}
      {isFormOpen && editingProvider && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingProvider.id ? 'Edit Provider' : 'Add Service Provider'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Provider / Business Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Raju Electricals & Repairs"
                  value={editingProvider.name || ''}
                  onChange={(e) => setEditingProvider({ ...editingProvider, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Number *</label>
                  <input
                    type="tel"
                    required
                    value={editingProvider.phone || ''}
                    onChange={(e) => setEditingProvider({ ...editingProvider, phone: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location / Town *</label>
                  <input
                    type="text"
                    required
                    value={editingProvider.location || ''}
                    onChange={(e) => setEditingProvider({ ...editingProvider, location: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Services Offered (Comma Separated)</label>
                <input
                  type="text"
                  placeholder="e.g. Electrician, AC Repair, Plumbing"
                  value={editingProvider.servicesOffered?.join(', ') || ''}
                  onChange={(e) => setEditingProvider({ ...editingProvider, servicesOffered: e.target.value.split(',').map(s => s.trim()).filter(Boolean) })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Bio / Description</label>
                <textarea
                  rows={2}
                  value={editingProvider.description || ''}
                  onChange={(e) => setEditingProvider({ ...editingProvider, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div>
                <ImageUploader
                  label="Provider Profile Photo"
                  value={editingProvider.profileImage || ''}
                  onChange={(url) => setEditingProvider({ ...editingProvider, profileImage: url })}
                  helperText="Upload provider profile photo (Cloudinary)"
                />
              </div>

              <div className="flex items-center justify-between pt-1">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingProvider.isActive !== false}
                    onChange={(e) => setEditingProvider({ ...editingProvider, isActive: e.target.checked })}
                    className="w-4 h-4 rounded text-nearfix-orange"
                  />
                  Active Provider
                </label>
              </div>

              <div className="flex items-center justify-end gap-3 pt-4 border-t border-slate-100">
                <button
                  type="button"
                  onClick={() => setIsFormOpen(false)}
                  className="px-4 py-2 rounded-xl text-xs font-bold border border-slate-200 text-slate-700"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-xl text-xs font-bold bg-nearfix-orange hover:bg-nearfix-orangeHover text-white shadow-md"
                >
                  Save Provider
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Provider"
        message="Are you sure you want to remove this service provider?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
