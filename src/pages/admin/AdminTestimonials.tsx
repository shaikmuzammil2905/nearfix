import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Star, MessageSquareQuote, Eye, EyeOff, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService, TestimonialCMSData } from '../../services/cmsService';

export const AdminTestimonials: React.FC = () => {
  const [testimonials, setTestimonials] = useState<TestimonialCMSData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<TestimonialCMSData> | null>(null);

  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getTestimonials();
      setTestimonials(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleActive = async (item: TestimonialCMSData) => {
    const updated = await CMSService.saveTestimonial({ ...item, isActive: !item.isActive });
    setTestimonials(updated);
  };

  const handleOpenForm = (item?: TestimonialCMSData) => {
    if (item) {
      setEditingItem(item);
    } else {
      setEditingItem({
        customerName: '',
        roleLocation: 'Araku Valley Resident',
        reviewText: '',
        rating: 5,
        profileImage: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
        isActive: true
      });
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.customerName) return;

    const updated = await CMSService.saveTestimonial(editingItem);
    setTestimonials(updated);
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteTestimonial(deleteTargetId);
      setTestimonials(updated);
      setDeleteTargetId(null);
    }
  };

  return (
    <AdminLayout
      title="Testimonials & Reviews CMS"
      subtitle={`Manage customer feedback and ratings displayed on NearFix (${testimonials.length})`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Testimonial
        </button>
      }
    >
      <div className="space-y-6">

        {/* TESTIMONIALS LIST */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((item) => {
            const isActive = item.isActive !== false;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm p-5 space-y-3 flex flex-col justify-between transition-all ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <img
                        src={item.profileImage}
                        alt={item.customerName}
                        className="w-10 h-10 rounded-full object-cover border border-slate-200"
                      />
                      <div>
                        <div className="font-extrabold text-slate-900 text-xs">{item.customerName}</div>
                        <div className="text-[10px] text-slate-400 font-medium">{item.roleLocation}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-0.5 text-amber-400">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-3.5 h-3.5 fill-current" />
                      ))}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 leading-relaxed italic">
                    "{item.reviewText}"
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleToggleActive(item)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black cursor-pointer ${
                      isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <Eye className="w-3 h-3 text-emerald-600" /> Approved
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 text-slate-500" /> Hidden
                      </>
                    )}
                  </button>

                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => handleOpenForm(item)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                      title="Edit Review"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTargetId(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                      title="Delete Review"
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

      {/* FORM MODAL */}
      {isFormOpen && editingItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingItem.id ? 'Edit Testimonial' : 'Add Testimonial'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Customer Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Anand Kumar"
                  value={editingItem.customerName || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, customerName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Location / Role</label>
                  <input
                    type="text"
                    placeholder="e.g. Araku Valley Resident"
                    value={editingItem.roleLocation || ''}
                    onChange={(e) => setEditingItem({ ...editingItem, roleLocation: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Star Rating (1-5)</label>
                  <select
                    value={editingItem.rating || 5}
                    onChange={(e) => setEditingItem({ ...editingItem, rating: Number(e.target.value) })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold cursor-pointer"
                  >
                    <option value={5}>5 Stars ⭐⭐⭐⭐⭐</option>
                    <option value={4}>4 Stars ⭐⭐⭐⭐</option>
                    <option value={3}>3 Stars ⭐⭐⭐</option>
                    <option value={2}>2 Stars ⭐⭐</option>
                    <option value={1}>1 Star ⭐</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Review Text *</label>
                <textarea
                  rows={3}
                  required
                  placeholder="Write customer review..."
                  value={editingItem.reviewText || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, reviewText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div>
                <ImageUploader
                  label="Customer Avatar Photo"
                  value={editingItem.profileImage || ''}
                  onChange={(url) => setEditingItem({ ...editingItem, profileImage: url })}
                  helperText="Upload profile photo"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="test-active-check"
                  checked={editingItem.isActive !== false}
                  onChange={(e) => setEditingItem({ ...editingItem, isActive: e.target.checked })}
                  className="w-4 h-4 rounded text-nearfix-orange"
                />
                <label htmlFor="test-active-check" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Approved & Active Publicly
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
                  Save Testimonial
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Testimonial"
        message="Are you sure you want to delete this customer review?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
