import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, Sliders } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CMSService, FooterCMSData } from '../../services/cmsService';

export const AdminFooter: React.FC = () => {
  const [footerData, setFooterData] = useState<FooterCMSData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const loadData = async () => {
      try {
        const data = await CMSService.getFooter();
        setFooterData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadData();
  }, []);

  if (!footerData) {
    return (
      <AdminLayout title="Footer CMS" subtitle="Loading footer settings...">
        <div className="py-12 text-center text-slate-400 font-semibold">Loading...</div>
      </AdminLayout>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await CMSService.updateFooter(footerData);
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
      title="Footer CMS"
      subtitle="Manage footer text, contact details, social links, and copyright text"
      actions={
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Save className="w-4 h-4" /> Save Footer Settings
        </button>
      }
    >
      <div className="space-y-6">

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Footer CMS settings saved!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Brand Description & Copyright</h3>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={footerData.isActive !== false}
                onChange={(e) => setFooterData({ ...footerData, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-nearfix-orange"
              />
              Footer Active
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Footer Brand Paragraph</label>
            <textarea
              rows={3}
              value={footerData.description}
              onChange={(e) => setFooterData({ ...footerData, description: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Phone Display</label>
              <input
                type="text"
                value={footerData.phoneDisplay}
                onChange={(e) => setFooterData({ ...footerData, phoneDisplay: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Display</label>
              <input
                type="text"
                value={footerData.whatsappDisplay}
                onChange={(e) => setFooterData({ ...footerData, whatsappDisplay: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Email Application</label>
            <input
              type="email"
              value={footerData.email}
              onChange={(e) => setFooterData({ ...footerData, email: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Office Address</label>
            <textarea
              rows={2}
              value={footerData.fullAddress}
              onChange={(e) => setFooterData({ ...footerData, fullAddress: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Copyright Statement</label>
            <input
              type="text"
              value={footerData.copyrightText}
              onChange={(e) => setFooterData({ ...footerData, copyrightText: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
            />
          </div>

          {/* SOCIAL LINKS */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-base font-extrabold text-slate-900">Social Media Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {footerData.socialLinks.map((s, idx) => (
                <div key={idx} className="flex items-center gap-2 p-2.5 bg-slate-50 rounded-xl border border-slate-200">
                  <span className="w-24 font-bold text-xs text-slate-700">{s.platform}</span>
                  <input
                    type="url"
                    value={s.url}
                    onChange={(e) => {
                      const copy = [...footerData.socialLinks];
                      copy[idx].url = e.target.value;
                      setFooterData({ ...footerData, socialLinks: copy });
                    }}
                    className="flex-1 px-3 py-1 bg-white border border-slate-300 text-xs font-mono rounded-lg text-slate-600"
                  />
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
              <Save className="w-4 h-4" /> Save Footer Settings
            </button>
          </div>

        </form>
      </div>
    </AdminLayout>
  );
};
