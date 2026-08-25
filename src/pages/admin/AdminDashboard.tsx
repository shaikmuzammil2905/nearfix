import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench, Layers, UserCheck, MessageSquareQuote, HelpCircle,
  Image as ImageIcon, Inbox, Sparkles, CheckCircle2, XCircle, ArrowRight
} from 'lucide-react';
import { AdminLayout } from '../../components/admin/AdminLayout';
import { CMSService, ContactRequestCMSData } from '../../services/cmsService';

export const AdminDashboard: React.FC = () => {
  const [stats, setStats] = useState({
    totalServices: 0,
    activeServices: 0,
    inactiveServices: 0,
    totalCategories: 0,
    totalProviders: 0,
    totalTestimonials: 0,
    totalFaqs: 0,
    totalGallery: 0,
    totalContacts: 0,
    unreadContacts: 0
  });

  const [recentContacts, setRecentContacts] = useState<ContactRequestCMSData[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadDashboard = async () => {
      setIsLoading(true);
      try {
        const [services, categories, providers, testimonials, faqs, gallery, contacts] = await Promise.all([
          CMSService.getAllServices(),
          CMSService.getCategories(),
          CMSService.getProviders(),
          CMSService.getTestimonials(),
          CMSService.getFaqs(),
          CMSService.getGallery(),
          CMSService.getContactRequests()
        ]);

        const activeSvc = services.filter(s => s.isActive !== false).length;

        setStats({
          totalServices: services.length,
          activeServices: activeSvc,
          inactiveServices: services.length - activeSvc,
          totalCategories: categories.length,
          totalProviders: providers.length,
          totalTestimonials: testimonials.length,
          totalFaqs: faqs.length,
          totalGallery: gallery.length,
          totalContacts: contacts.length,
          unreadContacts: contacts.filter(c => !c.isRead).length
        });

        setRecentContacts(contacts.slice(0, 5));
      } catch (err) {
        console.error('Error loading dashboard stats:', err);
      } finally {
        setIsLoading(false);
      }
    };

    loadDashboard();
  }, []);

  return (
    <AdminLayout
      title="Admin Control Center"
      subtitle="Overview of your NearFix website content, statistics, and enquiries"
    >
      <div className="space-y-6">
        
        {/* STATS CARDS GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          
          {/* Services */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-blue-600">
              <div className="w-10 h-10 rounded-2xl bg-blue-50 flex items-center justify-center font-bold">
                <Wrench className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalServices}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Total Services</div>
              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-2">
                <span className="text-emerald-600 font-bold">{stats.activeServices} Active</span>
                <span>•</span>
                <span className="text-red-500 font-bold">{stats.inactiveServices} Hidden</span>
              </div>
            </div>
          </div>

          {/* Categories */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-amber-600">
              <div className="w-10 h-10 rounded-2xl bg-amber-50 flex items-center justify-center font-bold">
                <Layers className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalCategories}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Categories</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Primary service sectors</div>
            </div>
          </div>

          {/* Providers */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-emerald-600">
              <div className="w-10 h-10 rounded-2xl bg-emerald-50 flex items-center justify-center font-bold">
                <UserCheck className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalProviders}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Service Providers</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Verified local experts</div>
            </div>
          </div>

          {/* Contact Requests */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-purple-600">
              <div className="w-10 h-10 rounded-2xl bg-purple-50 flex items-center justify-center font-bold">
                <Inbox className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalContacts}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Contact Requests</div>
              <div className="text-[11px] text-slate-500 mt-0.5 flex items-center gap-1.5">
                {stats.unreadContacts > 0 ? (
                  <span className="text-purple-600 font-bold bg-purple-100 px-2 py-0.5 rounded-md">
                    {stats.unreadContacts} Unread
                  </span>
                ) : (
                  <span className="text-slate-400">All read</span>
                )}
              </div>
            </div>
          </div>

          {/* Testimonials */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-rose-600">
              <div className="w-10 h-10 rounded-2xl bg-rose-50 flex items-center justify-center font-bold">
                <MessageSquareQuote className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalTestimonials}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Testimonials</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Customer reviews</div>
            </div>
          </div>

          {/* FAQs */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-sky-600">
              <div className="w-10 h-10 rounded-2xl bg-sky-50 flex items-center justify-center font-bold">
                <HelpCircle className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalFaqs}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">FAQs</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Help & questions</div>
            </div>
          </div>

          {/* Gallery */}
          <div className="bg-white rounded-3xl p-5 border border-slate-200 shadow-sm space-y-2">
            <div className="flex items-center justify-between text-teal-600">
              <div className="w-10 h-10 rounded-2xl bg-teal-50 flex items-center justify-center font-bold">
                <ImageIcon className="w-5 h-5" />
              </div>
              <span className="text-2xl font-black text-slate-900">{stats.totalGallery}</span>
            </div>
            <div>
              <div className="text-xs font-extrabold text-slate-900">Gallery Photos</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Media items</div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-gradient-to-br from-nearfix-blue to-slate-900 text-white rounded-3xl p-5 shadow-sm space-y-2 flex flex-col justify-between">
            <div className="text-xs font-bold text-nearfix-orange uppercase">Quick Action</div>
            <div className="text-sm font-extrabold">Manage Website Hero & Settings</div>
            <Link
              to="/admin/hero"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-nearfix-orange hover:underline"
            >
              Edit Hero Section <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>

        {/* RECENT CONTACT ENQUIRIES TABLE */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-sm p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="text-base font-extrabold text-slate-900">Recent Customer Requests</h3>
              <p className="text-xs text-slate-500 mt-0.5">Latest service leads submitted from the public site</p>
            </div>

            <Link
              to="/admin/contacts"
              className="text-xs font-bold text-nearfix-blue hover:text-nearfix-orange flex items-center gap-1"
            >
              View All Enquiries <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          {recentContacts.length === 0 ? (
            <div className="text-center py-8 text-slate-400 text-xs font-medium bg-slate-50 rounded-2xl border border-dashed border-slate-200">
              No service enquiries received yet. Submissions from the public site will appear here automatically.
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-100 text-[11px] font-extrabold text-slate-400 uppercase">
                    <th className="py-3 px-4">Customer</th>
                    <th className="py-3 px-4">Service Needed</th>
                    <th className="py-3 px-4">Location</th>
                    <th className="py-3 px-4">Method</th>
                    <th className="py-3 px-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-xs font-medium text-slate-700">
                  {recentContacts.map((c) => (
                    <tr key={c.id} className="hover:bg-slate-50 transition-colors">
                      <td className="py-3 px-4 font-bold text-slate-900">
                        <div>{c.name}</div>
                        <div className="text-[11px] text-slate-400 font-mono">{c.phone}</div>
                      </td>
                      <td className="py-3 px-4 font-bold text-nearfix-blue">{c.service}</td>
                      <td className="py-3 px-4">{c.location}</td>
                      <td className="py-3 px-4">
                        <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${c.contactMethod === 'WhatsApp' ? 'bg-emerald-100 text-emerald-700' : 'bg-blue-100 text-blue-700'}`}>
                          {c.contactMethod}
                        </span>
                      </td>
                      <td className="py-3 px-4 text-slate-400">
                        {new Date(c.createdAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

      </div>
    </AdminLayout>
  );
};
