import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, Layers, Eye, EyeOff, X, Save } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService } from '../../services/cmsService';
import { CategoryItem } from '../../data/categories';

export const AdminCategories: React.FC = () => {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState<Partial<CategoryItem> | null>(null);

  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadCategories = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getCategories();
      setCategories(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadCategories();
  }, []);

  const handleToggleActive = async (cat: CategoryItem) => {
    const isCurrentlyActive = (cat as any).isActive !== false;
    const updated = await CMSService.saveCategory({ ...cat, isActive: !isCurrentlyActive } as any);
    setCategories(updated);
  };

  const handleOpenForm = (cat?: CategoryItem) => {
    if (cat) {
      setEditingCategory(cat);
    } else {
      setEditingCategory({
        name: '',
        slug: '',
        description: '',
        iconName: 'Wrench',
        color: 'text-blue-600',
        bgColor: 'bg-blue-50 border-blue-100',
        image: '/categories/home-services.jpg',
        badge: '',
        isEmergency: false,
        services: [],
        isActive: true
      } as any);
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCategory?.name) return;

    const updated = await CMSService.saveCategory(editingCategory);
    setCategories(updated);
    setIsFormOpen(false);
    setEditingCategory(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteCategory(deleteTargetId);
      setCategories(updated);
      setDeleteTargetId(null);
    }
  };

  return (
    <AdminLayout
      title="Service Categories CMS"
      subtitle={`Manage all ${categories.length} primary category sectors on NearFix`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add Category
        </button>
      }
    >
      <div className="space-y-6">

        {/* CATEGORIES GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => {
            const isActive = (cat as any).isActive !== false;
            return (
              <div
                key={cat.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden flex flex-col justify-between transition-all ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}
              >
                <div>
                  <div className="relative h-36 w-full bg-slate-900">
                    <img
                      src={cat.image || '/categories/home-services.jpg'}
                      alt={cat.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
                    
                    {cat.badge && (
                      <span className="absolute top-3 right-3 text-[10px] font-black uppercase px-2.5 py-1 rounded-full bg-nearfix-orange text-white">
                        {cat.badge}
                      </span>
                    )}

                    <div className="absolute bottom-3 left-4 font-black text-white text-base drop-shadow-md">
                      {cat.name}
                    </div>
                  </div>

                  <div className="p-4 space-y-2">
                    <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                      {cat.description}
                    </p>
                    <div className="text-[11px] font-bold text-slate-400">
                      {cat.services?.length || 0} Sub-services included
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-slate-100 flex items-center justify-between">
                  <button
                    onClick={() => handleToggleActive(cat)}
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
                      onClick={() => handleOpenForm(cat)}
                      className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                      title="Edit Category"
                    >
                      <Edit className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setDeleteTargetId(cat.id)}
                      className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                      title="Delete Category"
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
      {isFormOpen && editingCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-md w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingCategory.id ? 'Edit Category' : 'Add Category'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Home Services"
                  value={editingCategory.name || ''}
                  onChange={(e) => setEditingCategory({ ...editingCategory, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Description</label>
                <textarea
                  rows={2}
                  placeholder="Category description..."
                  value={editingCategory.description || ''}
                  onChange={(e) => setEditingCategory({ ...editingCategory, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Badge Text (Optional)</label>
                <input
                  type="text"
                  placeholder="e.g. POPULAR, 24/7"
                  value={editingCategory.badge || ''}
                  onChange={(e) => setEditingCategory({ ...editingCategory, badge: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <ImageUploader
                  label="Category Cover Photo"
                  value={editingCategory.image || ''}
                  onChange={(url) => setEditingCategory({ ...editingCategory, image: url })}
                  helperText="Upload category card banner image"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="cat-active-check"
                  checked={(editingCategory as any).isActive !== false}
                  onChange={(e) => setEditingCategory({ ...editingCategory, isActive: e.target.checked } as any)}
                  className="w-4 h-4 rounded text-nearfix-orange"
                />
                <label htmlFor="cat-active-check" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Active on Public Website
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
                  Save Category
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Category"
        message="Are you sure you want to delete this category?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
