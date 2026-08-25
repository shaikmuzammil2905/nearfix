import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, Sliders } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { CMSService, HeaderCMSData } from '../../services/cmsService';

export const AdminHeader: React.FC = () => {
  const [headerData, setHeaderData] = useState<HeaderCMSData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await CMSService.getHeader();
        setHeaderData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  if (!headerData) {
    return (
      <AdminLayout title="Header CMS" subtitle="Loading header configuration...">
        <div className="py-12 text-center text-slate-400 font-semibold">Loading...</div>
      </AdminLayout>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await CMSService.updateHeader(headerData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err) {
      console.error(err);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout
      title="Header CMS"
      subtitle="Manage website logo, navigation links, and call to action buttons"
      actions={
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Save className="w-4 h-4" /> Save Header CMS
        </button>
      }
    >
      <div className="space-y-6">

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Header navigation settings saved!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Branding & Search</h3>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={headerData.isActive !== false}
                onChange={(e) => setHeaderData({ ...headerData, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-nearfix-orange"
              />
              Header Active
            </label>
          </div>

          <div>
            <ImageUploader
              label="Website Logo Image"
              value={headerData.logoUrl}
              onChange={(url) => setHeaderData({ ...headerData, logoUrl: url })}
              helperText="Upload transparent PNG logo"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">CTA Call Button Text</label>
              <input
                type="text"
                value={headerData.ctaCallText}
                onChange={(e) => setHeaderData({ ...headerData, ctaCallText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">CTA WhatsApp Button Text</label>
              <input
                type="text"
                value={headerData.ctaWhatsappText}
                onChange={(e) => setHeaderData({ ...headerData, ctaWhatsappText: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>
          </div>

          {/* NAVIGATION LINKS TABLE */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">Navigation Links ({headerData.navLinks.length})</h3>
            <div className="space-y-2">
              {headerData.navLinks.map((link, idx) => (
                <div key={idx} className="flex items-center gap-3 p-3 bg-slate-50 rounded-2xl border border-slate-200">
                  <input
                    type="text"
                    className="w-1/3 px-3 py-1.5 bg-white border border-slate-300 text-xs font-bold rounded-xl"
                    value={link.name}
                    onChange={(e) => {
                      const copy = [...headerData.navLinks];
                      copy[idx].name = e.target.value;
                      setHeaderData({ ...headerData, navLinks: copy });
                    }}
                  />
                  <input
                    type="text"
                    className="flex-1 px-3 py-1.5 bg-white border border-slate-300 text-xs font-mono rounded-xl text-slate-600"
                    value={link.path}
                    onChange={(e) => {
                      const copy = [...headerData.navLinks];
                      copy[idx].path = e.target.value;
                      setHeaderData({ ...headerData, navLinks: copy });
                    }}
                  />
                  <label className="flex items-center gap-1.5 text-xs font-bold text-slate-700 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={link.isVisible}
                      onChange={(e) => {
                        const copy = [...headerData.navLinks];
                        copy[idx].isVisible = e.target.checked;
                        setHeaderData({ ...headerData, navLinks: copy });
                      }}
                      className="w-4 h-4 rounded text-nearfix-orange"
                    />
                    Visible
                  </label>
                </div>
              ))}
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Header CMS
            </button>
          </div>

        </form>
      </div>
    </AdminLayout>
  );
};
