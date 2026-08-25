import React, { useState, useEffect } from 'react';
import { Plus, Edit, Trash2, HelpCircle, Eye, EyeOff, X } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ConfirmModal } from '../../components/admin/ConfirmModal';
import { CMSService, FaqCMSData } from '../../services/cmsService';

export const AdminFaqs: React.FC = () => {
  const [faqs, setFaqs] = useState<FaqCMSData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const [isFormOpen, setIsFormOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Partial<FaqCMSData> | null>(null);

  const [deleteTargetId, setDeleteTargetId] = useState<string | null>(null);

  const loadData = async () => {
    setIsLoading(true);
    try {
      const data = await CMSService.getFaqs();
      setFaqs(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  const handleToggleActive = async (item: FaqCMSData) => {
    const updated = await CMSService.saveFaq({ ...item, isActive: !item.isActive });
    setFaqs(updated);
  };

  const handleOpenForm = (item?: FaqCMSData) => {
    if (item) {
      setEditingItem(item);
    } else {
      setEditingItem({
        question: '',
        answer: '',
        category: 'General',
        isActive: true
      });
    }
    setIsFormOpen(true);
  };

  const handleSaveForm = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingItem?.question || !editingItem?.answer) return;

    const updated = await CMSService.saveFaq(editingItem);
    setFaqs(updated);
    setIsFormOpen(false);
    setEditingItem(null);
  };

  const handleDeleteConfirm = async () => {
    if (deleteTargetId) {
      const updated = await CMSService.deleteFaq(deleteTargetId);
      setFaqs(updated);
      setDeleteTargetId(null);
    }
  };

  return (
    <AdminLayout
      title="Frequently Asked Questions (FAQ) CMS"
      subtitle={`Manage help questions and answers on NearFix (${faqs.length})`}
      actions={
        <button
          onClick={() => handleOpenForm()}
          className="flex items-center gap-2 px-4 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Plus className="w-4 h-4" /> Add FAQ
        </button>
      }
    >
      <div className="space-y-6">

        {/* FAQS LIST */}
        <div className="space-y-4">
          {faqs.map((item) => {
            const isActive = item.isActive !== false;
            return (
              <div
                key={item.id}
                className={`bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-3 flex flex-col sm:flex-row sm:items-center justify-between gap-4 transition-all ${!isActive ? 'opacity-60 bg-slate-50' : ''}`}
              >
                <div className="space-y-1.5 flex-1 min-w-0">
                  <div className="flex items-center gap-2">
                    <HelpCircle className="w-4 h-4 text-nearfix-orange flex-shrink-0" />
                    <h3 className="font-extrabold text-slate-900 text-sm">{item.question}</h3>
                    <span className="bg-slate-100 text-slate-600 text-[10px] font-bold px-2 py-0.5 rounded-full">
                      {item.category}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed pl-6">
                    {item.answer}
                  </p>
                </div>

                <div className="flex items-center gap-3 justify-end flex-shrink-0 pt-2 sm:pt-0 border-t sm:border-t-0 border-slate-100">
                  <button
                    onClick={() => handleToggleActive(item)}
                    className={`inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-[10px] font-black cursor-pointer ${
                      isActive ? 'bg-emerald-100 text-emerald-800' : 'bg-slate-200 text-slate-600'
                    }`}
                  >
                    {isActive ? (
                      <>
                        <Eye className="w-3 h-3 text-emerald-600" /> Visible
                      </>
                    ) : (
                      <>
                        <EyeOff className="w-3 h-3 text-slate-500" /> Hidden
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => handleOpenForm(item)}
                    className="p-1.5 rounded-lg text-slate-600 hover:text-nearfix-blue hover:bg-blue-50 cursor-pointer"
                    title="Edit FAQ"
                  >
                    <Edit className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setDeleteTargetId(item.id)}
                    className="p-1.5 rounded-lg text-slate-400 hover:text-red-600 hover:bg-red-50 cursor-pointer"
                    title="Delete FAQ"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
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
                {editingItem.id ? 'Edit FAQ' : 'Add New FAQ'}
              </h3>
              <button onClick={() => setIsFormOpen(false)} className="p-1 text-slate-400 hover:text-slate-600">
                <X className="w-5 h-5" />
              </button>
            </div>

            <form onSubmit={handleSaveForm} className="space-y-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Question *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. How do I request a local service on NearFix?"
                  value={editingItem.question || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, question: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Category Tag</label>
                <input
                  type="text"
                  placeholder="e.g. General, Verification, Pricing"
                  value={editingItem.category || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, category: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Answer *</label>
                <textarea
                  rows={4}
                  required
                  placeholder="Detailed answer text..."
                  value={editingItem.answer || ''}
                  onChange={(e) => setEditingItem({ ...editingItem, answer: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
                />
              </div>

              <div className="flex items-center gap-2 pt-1">
                <input
                  type="checkbox"
                  id="faq-active-check"
                  checked={editingItem.isActive !== false}
                  onChange={(e) => setEditingItem({ ...editingItem, isActive: e.target.checked })}
                  className="w-4 h-4 rounded text-nearfix-orange"
                />
                <label htmlFor="faq-active-check" className="text-xs font-bold text-slate-700 cursor-pointer">
                  Active (Visible in FAQ section)
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
                  Save FAQ
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* CONFIRM DELETE MODAL */}
      <ConfirmModal
        isOpen={!!deleteTargetId}
        title="Delete FAQ"
        message="Are you sure you want to remove this question?"
        onConfirm={handleDeleteConfirm}
        onCancel={() => setDeleteTargetId(null)}
      />

    </AdminLayout>
  );
};
