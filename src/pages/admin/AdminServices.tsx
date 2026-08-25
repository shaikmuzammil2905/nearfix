import React, { useState, useEffect } from 'react';
import { Plus, Search, Filter, Edit, Trash2, Eye, EyeOff, Wrench, CheckCircle, Save, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService } from '../../services/cmsService';
import { ServiceItem, CategoryItem } from '../../data/categories';

export const AdminServices: React.FC = () => {
  const [services, setServices] = useState<(ServiceItem & { isActive?: boolean; displayOrder?: number })[]>([]);
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [isLoading, setIsLoading] = useState(true);

  // Modal / Form state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingService, setEditingService] = useState<Partial<ServiceItem & { isActive?: boolean; displayOrder?: number }> | null>(null);

  // Delete modal state
  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const [svcs, cats] = await Promise.all([
        CMSService.getAllServices(),
        CMSService.getCategories()
      ]);
      setServices(svcs);
      setCategories(cats);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleActive = async (svc: ServiceItem & { isActive?: boolean; displayOrder?: number }) => {
    const updated = await CMSService.saveService({ ...svc, isActive: !(svc.isActive !== false) });
    setServices(updated);
  };

  const handleOpenForm = (svc?: ServiceItem & { isActive?: boolean; displayOrder?: number }) => {
    if (svc) {
      setEditingService(svc);
    } else {
      setEditingService({
        name: '',
        categorySlug: categories[0]?.slug || 'home-services',
        categoryName: categories[0]?.name || 'Home Services',
        shortDesc: '',
        description: '',
        iconName: 'Wrench',
        benefits: ["Fast response time", "Verified local technicians", "Transparent pricing"],
        commonRequirements: ["General inspection", "Repair or replacement"],
        isEmergency: false,
        isActive: true
      });
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingService?.name) return;

    const catObj = categories.find(c => c.slug === editingService.categorySlug);
    const payload = {
      ...editingService,
      categoryName: catObj ? catObj.name : editingService.categoryName || 'Home Services'
    };

    const updated = await CMSService.saveService(payload);
    setServices(updated);
    setIsFormOpen(false);
    setEditingService(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteService(deleteTargetId);
      setServices(updated);
      setDeleteTargetId(null);
    }
  };

  // Filter & Search
  const filteredServices = services.filter((s) => {
    const matchesCategory = selectedCategory === 'all' || s.categorySlug === selectedCategory;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.categoryName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <AdminLayout
      title="Services Management CMS"
      subtitle={`Manage all ${services.length} services displayed across NearFix`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add New Service
        </button>
      }
    >
      <div className="space-y-6">

        {/* SEARCH & FILTERS BAR */}
        <div className="bg-white rounded-3xl p-4 border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="relative w-full sm:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search service name..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-medium focus:outline-none focus:border-nearfix-orange"
            />
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto">
            <Filter className="w-4 h-4 text-slate-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-3 py-2 bg-slate-50 border border-slate-200 rounded-xl text-xs font-semibold text-slate-700 focus:outline-none cursor-pointer w-full sm:w-auto"
            >
              <option value="all">All Categories ({services.length})</option>
              {categories.map((cat) => (
                <option key={cat.id} value={cat.slug}>{cat.name}</option>
              ))}
            </select>
          </div>
        </div>

        {/* SERVICES TABLE / CARDS */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden">
          {filteredServices.length === 0 ? (
            <div className="py-12 text-center text-slate-400 text-xs font-semibold">
              No services found matching your filter criteria.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-extrabold text-slate-400 uppercase bg-slate-50/50">
                    <th className="py-3.5 px-4">Service Name</th>
                    <th className="py-3.5 px-4">Category</th>
                    <th className="py-3.5 px-4">Short Description</th>
                    <th className="py-3.5 px-4">Status</th>
                    <th className="py-3.5 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {filteredServices.map((svc) => {
                    const isActive = svc.isActive !== false;
                    return (
                      <tr key={svc.id} className={`hover:bg-slate-50/80 transition-colors ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}>
                        <td className="py-3.5 px-4 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <Wrench className="w-4 h-4 text-nearfix-orange flex-shrink-0" />
                            <span>{svc.name}</span>
                            {svc.isEmergency && (
                              <span className="bg-red-100 text-red-700 text-[10px] font-black px-2 py-0.5 rounded-full">
                                Emergency
                              </span>
                            )}
                          </div>
                        </td>
                        <td className="py-3.5 px-4 font-semibold text-slate-600">{svc.categoryName}</td>
                        <td className="py-3.5 px-4 text-slate-500 max-w-xs truncate">{svc.shortDesc || svc.description}</td>
                        <td className="py-3.5 px-4">
                          <button
                            onClick={() => handleToggleActive(svc)}
                            className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[11px] font-extrabold cursor-pointer transition-all ${
                              isActive ? 'bg-emerald-100 text-emerald-800 hover:bg-emerald-200' : 'bg-slate-200 text-slate-600 hover:bg-slate-300'
                            }`}
                          >
                            {isActive ? (
                              <>
                                <Eye className="w-3.5 h-3.5 text-emerald-600" /> Active
                              </>
                            ) : (
                              <>
                                <EyeOff className="w-3.5 h-3.5 text-slate-500" /> Hidden
                              </>
                            )}
                          </button>
                        </td>
                        <td className="py-3.5 px-4 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button
                              onClick={() => handleOpenForm(svc)}
                              className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                              title="Edit Service"
                            >
                              <Edit className="w-4 h-4" />
                            </button>
                            <button
                              onClick={() => setDeleteTargetId(svc.id)}
                              className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                              title="Delete Service"
                            >
                              <Trash2 className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>

      {/* CREATE / EDIT MODAL */}
      {isFormOpen && editingService && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/60 backdrop-blur-sm animate-fadeIn">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 shadow-2xl border border-slate-100 space-y-4 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-lg font-black text-slate-900">
                {editingService.id ? 'Edit Service' : 'Add New Service'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Service Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Electrician Wiring & Repairs"
                  value={editingService.name || ''}
                  onChange={(e) => setEditingService({ ...editingService, name: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category *</label>
                <select
                  value={editingService.categorySlug || ''}
                  onChange={(e) => {
                    const catObj = categories.find(c => c.slug === e.target.value);
                    setEditingService({
                      ...editingService,
                      categorySlug: e.target.value,
                      categoryName: catObj ? catObj.name : editingService.categoryName
                    });
                  }}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold cursor-pointer"
                >
                  {categories.map((c) => (
                    <option key={c.id} value={c.slug}>{c.name}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Short Description</label>
                <input
                  type="text"
                  placeholder="Wiring, repairs, light & fan installations"
                  value={editingService.shortDesc || ''}
                  onChange={(e) => setEditingService({ ...editingService, shortDesc: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Detailed Description</label>
                <textarea
                  rows={3}
                  placeholder="Full description of the service offered in Araku Valley..."
                  value={editingService.description || ''}
                  onChange={(e) => setEditingService({ ...editingService, description: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
                />
              </div>

              <div className="flex items-center gap-6 pt-1">
                <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingService.isActive !== false}
                    onChange={(e) => setEditingService({ ...editingService, isActive: e.target.checked })}
                    className="w-4 h-4 rounded text-nearfix-orange"
                  />
                  Active (Visible publicly)
                </label>

                <label className="flex items-center gap-2 text-xs font-bold text-red-600 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={editingService.isEmergency ?? false}
                    onChange={(e) => setEditingService({ ...editingService, isEmergency: e.target.checked })}
                    className="w-4 h-4 rounded text-red-600"
                  />
                  Emergency 24/7 Service
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
                  Save Service
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete Service"
        message="Are you sure you want to delete this service? This action will remove it from the CMS and public site."
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
