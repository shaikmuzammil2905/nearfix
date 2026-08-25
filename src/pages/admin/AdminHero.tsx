import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, RefreshCw, Eye } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { ImageUploader } from '../../components/admin/ImageUploader';
import { CMSService, HeroCMSData } from '../../services/cmsService';

export const AdminHero: React.FC = () => {
  const [heroData, setHeroData] = useState<HeroCMSData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  useEffect(() => {
    const loadHero = async () => {
      try {
        const data = await CMSService.getHero();
        setHeroData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadHero();
  }, []);

  if (!heroData) {
    return (
      <AdminLayout title="Hero Section CMS" subtitle="Loading hero content...">
        <div className="py-12 text-center text-slate-400 font-semibold">Loading content...</div>
      </AdminLayout>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setErrorMsg('');
    setSaveSuccess(false);

    try {
      await CMSService.updateHero(heroData);
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 4000);
    } catch (err: any) {
      setErrorMsg(err.message || 'Failed to save changes');
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <AdminLayout
      title="Hero Section CMS"
      subtitle="Manage the primary homepage hero text, buttons, and visual graphics"
      actions={
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          {isSaving ? (
            <span>Saving...</span>
          ) : (
            <>
              <Save className="w-4 h-4" /> Save Changes
            </>
          )}
        </button>
      }
    >
      <div className="space-y-6">

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>Hero section successfully updated! Changes are live on the public website.</span>
          </div>
        )}

        {errorMsg && (
          <div className="p-4 rounded-2xl bg-red-50 border border-red-200 text-red-700 text-xs font-bold">
            {errorMsg}
          </div>
        )}

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* EDIT FORM (LEFT 7 COLS) */}
          <form onSubmit={handleSave} className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-5">
            
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="text-base font-extrabold text-slate-900">Edit Content</h3>
              <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
                <input
                  type="checkbox"
                  checked={heroData.isActive}
                  onChange={(e) => setHeroData({ ...heroData, isActive: e.target.checked })}
                  className="w-4 h-4 rounded text-nearfix-orange"
                />
                Active on Website
              </label>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Top Badge Text</label>
              <input
                type="text"
                value={heroData.badge}
                onChange={(e) => setHeroData({ ...heroData, badge: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Main Headline Text</label>
                <input
                  type="text"
                  value={heroData.headline}
                  onChange={(e) => setHeroData({ ...heroData, headline: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Highlighted Gradient Words</label>
                <input
                  type="text"
                  value={heroData.headlineGradient}
                  onChange={(e) => setHeroData({ ...heroData, headlineGradient: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Subtitle / Description</label>
              <textarea
                rows={3}
                value={heroData.subtitle}
                onChange={(e) => setHeroData({ ...heroData, subtitle: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Call Button Label</label>
                <input
                  type="text"
                  value={heroData.buttonCallText}
                  onChange={(e) => setHeroData({ ...heroData, buttonCallText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase mb-1">WhatsApp Button Label</label>
                <input
                  type="text"
                  value={heroData.buttonWhatsappText}
                  onChange={(e) => setHeroData({ ...heroData, buttonWhatsappText: e.target.value })}
                  className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
                />
              </div>
            </div>

            <div>
              <ImageUploader
                label="Hero Floating Visual Image"
                value={heroData.heroImage}
                onChange={(url) => setHeroData({ ...heroData, heroImage: url })}
                helperText="Upload technician graphic or banner photo (Cloudinary)"
              />
            </div>

            <div className="pt-3 border-t border-slate-100 flex items-center justify-end">
              <button
                type="submit"
                disabled={isSaving}
                className="px-6 py-3 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
              >
                <Save className="w-4 h-4" /> Save Hero Settings
              </button>
            </div>

          </form>

          {/* LIVE PREVIEW (RIGHT 5 COLS) */}
          <div className="lg:col-span-5 space-y-4">
            <div className="bg-slate-900 text-white rounded-3xl p-6 border border-slate-800 shadow-xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-nearfix-orange border-b border-slate-800 pb-3">
                <Eye className="w-4 h-4" /> Live Component Preview
              </div>

              <div className="space-y-3">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 border border-amber-400/30 text-[10px] font-extrabold text-amber-300">
                  {heroData.badge}
                </div>

                <h2 className="text-xl font-black text-white leading-tight">
                  {heroData.headline} <span className="text-amber-400">{heroData.headlineGradient}</span>
                </h2>

                <p className="text-xs text-slate-300 leading-relaxed">
                  {heroData.subtitle}
                </p>

                <div className="flex items-center gap-2 pt-2">
                  <span className="px-4 py-2 bg-nearfix-green text-white font-bold text-xs rounded-xl">
                    {heroData.buttonCallText}
                  </span>
                  <span className="px-4 py-2 bg-black/70 text-emerald-400 border border-emerald-400 font-bold text-xs rounded-xl">
                    {heroData.buttonWhatsappText}
                  </span>
                </div>
              </div>

              {heroData.heroImage && (
                <div className="pt-3 border-t border-slate-800 text-center">
                  <img
                    src={heroData.heroImage}
                    alt="Hero Visual"
                    className="max-h-48 object-contain mx-auto rounded-xl"
                  />
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
    </AdminLayout>
  );
};
