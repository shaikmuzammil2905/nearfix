import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, Settings, Globe, ShieldAlert } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CMSService, SiteSettingsCMSData } from '../../services/cmsService';

export const AdminSettings: React.FC = () => {
  const [siteSettings, setSiteSettings] = useState<SiteSettingsCMSData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const loadSettings = async () => {
      try {
        const data = await CMSService.getSiteSettings();
        setSiteSettings(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadSettings();
  }, []);

  if (!siteSettings) {
    return (
      <AdminLayout title="Website Settings" subtitle="Loading site settings...">
        <div className="py-12 text-center text-slate-400 font-semibold">Loading...</div>
      </AdminLayout>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await CMSService.updateSiteSettings(siteSettings);
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
      title="Website & SEO Settings"
      subtitle="Manage global business profile, SEO meta tags, and site status"
      actions={
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Save className="w-4 h-4" /> Save Global Settings
        </button>
      }
    >
      <div className="space-y-6">

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Website & SEO settings updated!</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          {/* BUSINESS INFO */}
          <div className="space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 border-b border-slate-100 pb-2">Business Profile</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Business / Platform Name</label>
                <input
                  type="text"
                  value={siteSettings.businessName}
                  onChange={(e) => setSiteSettings({ ...siteSettings, businessName: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Tagline</label>
                <input
                  type="text"
                  value={siteSettings.tagline}
                  onChange={(e) => setSiteSettings({ ...siteSettings, tagline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Primary Phone Number</label>
                <input
                  type="text"
                  value={siteSettings.phone}
                  onChange={(e) => setSiteSettings({ ...siteSettings, phone: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Number</label>
                <input
                  type="text"
                  value={siteSettings.whatsapp}
                  onChange={(e) => setSiteSettings({ ...siteSettings, whatsapp: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Contact Email</label>
                <input
                  type="email"
                  value={siteSettings.email}
                  onChange={(e) => setSiteSettings({ ...siteSettings, email: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">District</label>
                <input
                  type="text"
                  value={siteSettings.district}
                  onChange={(e) => setSiteSettings({ ...siteSettings, district: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Full Head Office Address</label>
              <textarea
                rows={2}
                value={siteSettings.fullAddress}
                onChange={(e) => setSiteSettings({ ...siteSettings, fullAddress: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
              />
            </div>
          </div>

          {/* SEO SETTINGS */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <Globe className="w-4 h-4 text-nearfix-blue" /> Search Engine Optimization (SEO)
            </h3>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Site Title Tag</label>
              <input
                type="text"
                value={siteSettings.seoTitle}
                onChange={(e) => setSiteSettings({ ...siteSettings, seoTitle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Meta Description</label>
              <textarea
                rows={2}
                value={siteSettings.metaDescription}
                onChange={(e) => setSiteSettings({ ...siteSettings, metaDescription: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Keywords (Comma Separated)</label>
              <input
                type="text"
                value={siteSettings.keywords}
                onChange={(e) => setSiteSettings({ ...siteSettings, keywords: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium"
              />
            </div>
          </div>

          {/* MAINTENANCE MODE */}
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <h3 className="text-base font-extrabold text-slate-900 flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-amber-500" /> Website Status
            </h3>

            <label className="flex items-center gap-3 p-4 bg-amber-50/50 rounded-2xl border border-amber-200 cursor-pointer">
              <input
                type="checkbox"
                checked={siteSettings.maintenanceMode}
                onChange={(e) => setSiteSettings({ ...siteSettings, maintenanceMode: e.target.checked })}
                className="w-5 h-5 rounded text-nearfix-orange"
              />
              <div>
                <span className="text-xs font-extrabold text-slate-900 block">Enable Maintenance Mode</span>
                <span className="text-[11px] text-slate-500 font-medium">Show maintenance banner to public visitors while working on major updates.</span>
              </div>
            </label>
          </div>

          <div className="pt-4 border-t border-slate-100 flex items-center justify-end">
            <button
              type="submit"
              disabled={isSaving}
              className="px-6 py-3 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
            >
              <Save className="w-4 h-4" /> Save Global Settings
            </button>
          </div>

        </form>
      </div>
    </AdminLayout>
  );
};
