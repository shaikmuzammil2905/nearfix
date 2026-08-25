import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Image as ImageIcon, Eye, EyeOff, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService, GalleryCMSData } from '../../services/cmsService';

export const AdminGallery: React.FC = () => {
  const [galleryItems, setGalleryItems] = useState<GalleryCMSData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<GalleryCMSData> | null>(null);

  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getGallery();
      setGalleryItems(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleActive = async (item: GalleryCMSData) => {
    const updated = await CMSService.saveGalleryItem({ ...item, isActive: !item.isActive });
    setGalleryItems(updated);
  };

  const handleOpenForm = (item?: GalleryCMSData) => {
    if (item) {
      setEditingItem(item);
    } else {
      setEditingItem({
        title: '',
        category: 'General',
        imageUrl: '',
        caption: '',
        isActive: true
      });
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.title || !editingItem?.imageUrl) return;

    const updated = await CMSService.saveGalleryItem(editingItem);
    setGalleryItems(updated);
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteGalleryItem(deleteTargetId);
      setGalleryItems(updated);
      setDeleteTargetId(null);
    }
  };

  return (
    <AdminLayout
      title="Gallery & Media CMS"
      subtitle={`Upload, manage, and replace photos displayed across NearFix (${galleryItems.length})`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Upload New Photo
        </button>
      }
    >
      <div className="space-y-6">

        {/* GALLERY GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item) => {
            const isActive = item.isActive !== false;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}
              >
                <div>
                  <div className="relative h-44 w-full bg-slate-900 overflow-hidden">
                    <img
                      src={item.imageUrl || '/hero-technician-visual.png'}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-3 left-3 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full">
                      {item.category}
                    </div>
                  </div>

                  <div className="p-4 space-y-1">
                    <h3 className="font-extrabold text-slate-900 text-sm truncate">{item.title}</h3>
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {item.caption}
                    </p>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleToggleActive(item)}
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
                      onClick={() => handleOpenForm(item)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                      title="Edit Photo"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTargetId(item.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                      title="Delete Photo"
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
                {editingItem.id ? 'Edit Photo' : 'Upload New Photo'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Photo Title *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Araku Technician At Work"
                  value={editingItem.title || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, title: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category Tag</label>
                <input
                  type="text"
                  placeholder="e.g. Home Services, Electrical, Travel"
                  value={editingItem.category || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <ImageUploader
                  label="Upload / Replace Photo *"
                  value={editingItem.imageUrl || ''}
                  onChange={(url) => setEditingItem({ ...editingItem, imageUrl: url })}
                  helperText="Upload image to Cloudinary"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Caption / Notes</label>
                <textarea
                  rows={2}
                  placeholder="Photo caption details..."
                  value={editingItem.caption || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, caption: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="gal-active-check"
                  checked={editingItem.isActive !== false}
                  onChange={(e) => setEditingItem({ ...editingItem, isActive: e.target.checked })}
                  className="w-4 h-4 rounded text-nearfix-orange"
                />
                <label htmlFor="gal-active-check" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Active (Visible publicly)
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
                  Save Photo
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Photo"
        message="Are you sure you want to remove this photo from the gallery?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
