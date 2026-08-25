import React, { useState, useEffect } from 'react';
import { Save, CheckCircle, Info, Eye } from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CMSService, AboutCMSData } from '../../services/cmsService';

export const AdminAbout: React.FC = () => {
  const [aboutData, setAboutData] = useState<AboutCMSData | null>(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);

  useEffect(() => {
    const loadAbout = async () => {
      try {
        const data = await CMSService.getAbout();
        setAboutData(data);
      } catch (err) {
        console.error(err);
      }
    };
    loadAbout();
  }, []);

  if (!aboutData) {
    return (
      <AdminLayout title="About Section CMS" subtitle="Loading about content...">
        <div className="py-12 text-center text-slate-400 font-semibold">Loading...</div>
      </AdminLayout>
    );
  }

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);
    setSaveSuccess(false);

    try {
      await CMSService.updateAbout(aboutData);
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
      title="About Section CMS"
      subtitle="Edit vision, mission, core values, and company overview displayed on /about"
      actions={
        <button
          onClick={handleSave}
          disabled={isSaving}
          className="flex items-center gap-2 px-5 py-2.5 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-xs rounded-xl shadow-md transition-all cursor-pointer"
        >
          <Save className="w-4 h-4" /> Save About Content
        </button>
      }
    >
      <div className="space-y-6">

        {saveSuccess && (
          <div className="p-4 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>About content saved! The public /about page has been updated.</span>
          </div>
        )}

        <form onSubmit={handleSave} className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
          
          <div className="flex items-center justify-between border-b border-slate-100 pb-3">
            <h3 className="text-base font-extrabold text-slate-900">Main Banner & Overview</h3>
            <label className="flex items-center gap-2 text-xs font-bold text-slate-700 cursor-pointer">
              <input
                type="checkbox"
                checked={aboutData.isActive !== false}
                onChange={(e) => setAboutData({ ...aboutData, isActive: e.target.checked })}
                className="w-4 h-4 rounded text-nearfix-orange"
              />
              Active on Public Site
            </label>
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Banner Heading</label>
            <input
              type="text"
              value={aboutData.heading}
              onChange={(e) => setAboutData({ ...aboutData, heading: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-semibold"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Main Overview Description</label>
            <textarea
              rows={3}
              value={aboutData.description}
              onChange={(e) => setAboutData({ ...aboutData, description: e.target.value })}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Vision Statement</label>
              <textarea
                rows={4}
                value={aboutData.vision}
                onChange={(e) => setAboutData({ ...aboutData, vision: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
              />
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 uppercase mb-1">Mission Statement</label>
              <textarea
                rows={4}
                value={aboutData.mission}
                onChange={(e) => setAboutData({ ...aboutData, mission: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl border border-slate-300 focus:border-nearfix-orange outline-none text-xs font-medium leading-relaxed"
              />
            </div>
          </div>

          {/* CORE VALUES EDIT GRID */}
          <div className="pt-4 border-t border-slate-100 space-y-4">
            <h3 className="text-base font-extrabold text-slate-900">Core Values ({aboutData.coreValues.length})</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {aboutData.coreValues.map((val, idx) => (
                <div key={val.id} className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2">
                    <input
                      type="text"
                      className="w-12 px-2 py-1 bg-white border border-slate-300 text-center text-sm rounded-lg"
                      value={val.icon}
                      onChange={(e) => {
                        const copy = [...aboutData.coreValues];
                        copy[idx].icon = e.target.value;
                        setAboutData({ ...aboutData, coreValues: copy });
                      }}
                    />
                    <input
                      type="text"
                      className="flex-1 px-3 py-1 bg-white border border-slate-300 font-bold text-xs rounded-lg"
                      value={val.title}
                      onChange={(e) => {
                        const copy = [...aboutData.coreValues];
                        copy[idx].title = e.target.value;
                        setAboutData({ ...aboutData, coreValues: copy });
                      }}
                    />
                  </div>
                  <textarea
                    rows={2}
                    className="w-full px-3 py-1.5 bg-white border border-slate-300 text-xs font-medium rounded-lg"
                    value={val.description}
                    onChange={(e) => {
                      const copy = [...aboutData.coreValues];
                      copy[idx].description = e.target.value;
                      setAboutData({ ...aboutData, coreValues: copy });
                    }}
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
              <Save className="w-4 h-4" /> Save About Page Changes
            </button>
          </div>

        </form>
      </div>
    </AdminLayout>
  );
};
