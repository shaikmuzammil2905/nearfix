import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { MobileBottomNav } from './components/MobileBottomNav';
import { FloatingActions } from './components/FloatingActions';

import { CallModal } from './components/CallModal';
import { WhatsAppModal } from './components/WhatsAppModal';
import { LeadModal } from './components/LeadModal';

import { HomePage } from './pages/HomePage';
import { CategoriesPage } from './pages/CategoriesPage';
import { CategoryDetailPage } from './pages/CategoryDetailPage';
import { ServicesPage } from './pages/ServicesPage';
import { ServiceDetailPage } from './pages/ServiceDetailPage';
import { AboutPage } from './pages/AboutPage';
import { BusinessInfoPage } from './pages/BusinessInfoPage';
import { ContactPage } from './pages/ContactPage';
import { RequestServicePage } from './pages/RequestServicePage';
import { ListYourBusinessPage } from './pages/ListYourBusinessPage';

// Admin CMS Context & Pages
import { AdminAuthProvider } from './context/AdminAuthContext';
import { ProtectedRoute } from './components/admin/ProtectedRoute';
import { AdminLogin } from './pages/admin/AdminLogin';
import { AdminDashboard } from './pages/admin/AdminDashboard';
import { AdminHero } from './pages/admin/AdminHero';
import { AdminServices } from './pages/admin/AdminServices';
import { AdminCategories } from './pages/admin/AdminCategories';
import { AdminProviders } from './pages/admin/AdminProviders';
import { AdminAbout } from './pages/admin/AdminAbout';
import { AdminTestimonials } from './pages/admin/AdminTestimonials';
import { AdminFaqs } from './pages/admin/AdminFaqs';
import { AdminGallery } from './pages/admin/AdminGallery';
import { AdminContacts } from './pages/admin/AdminContacts';
import { AdminHeader } from './pages/admin/AdminHeader';
import { AdminFooter } from './pages/admin/AdminFooter';
import { AdminSettings } from './pages/admin/AdminSettings';

// Scroll to top helper
const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

export const AppContent: React.FC = () => {
  const [isCallOpen, setIsCallOpen] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);
  const [isLeadOpen, setIsLeadOpen] = useState(false);
  const [activeServiceName, setActiveServiceName] = useState<string | undefined>(undefined);
  const location = useLocation();

  const isAdminRoute = location.pathname.startsWith('/admin');

  const handleOpenCall = (serviceName?: string) => {
    setActiveServiceName(serviceName);
    setIsCallOpen(true);
  };

  const handleOpenWhatsApp = (serviceName?: string) => {
    setActiveServiceName(serviceName);
    setIsWhatsAppOpen(true);
  };

  const handleOpenLead = (serviceName?: string) => {
    setActiveServiceName(serviceName);
    setIsLeadOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-slate-800 font-sans selection:bg-nearfix-orange selection:text-white">
      <ScrollToTop />

      {/* Render Public Header only on non-admin routes */}
      {!isAdminRoute && (
        <Header
          onOpenCall={() => handleOpenCall()}
          onOpenWhatsApp={() => handleOpenWhatsApp()}
          onOpenLead={() => handleOpenLead()}
        />
      )}

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
          {/* Public Website Routes */}
          <Route 
            path="/" 
            element={
              <HomePage
                onOpenCall={handleOpenCall}
                onOpenWhatsApp={handleOpenWhatsApp}
                onOpenLead={handleOpenLead}
              />
            } 
          />
          
          <Route path="/categories" element={<CategoriesPage />} />
          
          <Route 
            path="/categories/:categorySlug" 
            element={
              <CategoryDetailPage
                onOpenCall={handleOpenCall}
                onOpenWhatsApp={handleOpenWhatsApp}
                onOpenLead={handleOpenLead}
              />
            } 
          />

          <Route 
            path="/services" 
            element={
              <ServicesPage
                onOpenCall={handleOpenCall}
                onOpenWhatsApp={handleOpenWhatsApp}
                onOpenLead={handleOpenLead}
              />
            } 
          />

          <Route 
            path="/services/:serviceSlug" 
            element={
              <ServiceDetailPage
                onOpenCall={handleOpenCall}
                onOpenWhatsApp={handleOpenWhatsApp}
                onOpenLead={handleOpenLead}
              />
            } 
          />

          <Route path="/about" element={<AboutPage />} />
          <Route path="/business-information" element={<BusinessInfoPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/request-service" element={<RequestServicePage />} />
          <Route path="/list-your-business" element={<ListYourBusinessPage />} />

          {/* Admin Authentication Route */}
          <Route path="/admin/login" element={<AdminLogin />} />

          {/* Protected Admin CMS Routes */}
          <Route path="/admin" element={<ProtectedRoute><AdminDashboard /></ProtectedRoute>} />
          <Route path="/admin/hero" element={<ProtectedRoute><AdminHero /></ProtectedRoute>} />
          <Route path="/admin/services" element={<ProtectedRoute><AdminServices /></ProtectedRoute>} />
          <Route path="/admin/categories" element={<ProtectedRoute><AdminCategories /></ProtectedRoute>} />
          <Route path="/admin/providers" element={<ProtectedRoute><AdminProviders /></ProtectedRoute>} />
          <Route path="/admin/about" element={<ProtectedRoute><AdminAbout /></ProtectedRoute>} />
          <Route path="/admin/testimonials" element={<ProtectedRoute><AdminTestimonials /></ProtectedRoute>} />
          <Route path="/admin/faqs" element={<ProtectedRoute><AdminFaqs /></ProtectedRoute>} />
          <Route path="/admin/gallery" element={<ProtectedRoute><AdminGallery /></ProtectedRoute>} />
          <Route path="/admin/contacts" element={<ProtectedRoute><AdminContacts /></ProtectedRoute>} />
          <Route path="/admin/header" element={<ProtectedRoute><AdminHeader /></ProtectedRoute>} />
          <Route path="/admin/footer" element={<ProtectedRoute><AdminFooter /></ProtectedRoute>} />
          <Route path="/admin/settings" element={<ProtectedRoute><AdminSettings /></ProtectedRoute>} />
        </Routes>
      </main>

      {/* Render Public Controls only on non-admin routes */}
      {!isAdminRoute && (
        <>
          <FloatingActions
            onOpenCall={() => handleOpenCall()}
            onOpenWhatsApp={() => handleOpenWhatsApp()}
          />
          <MobileBottomNav />
          <Footer />

          {/* Global Modals */}
          <CallModal
            isOpen={isCallOpen}
            onClose={() => setIsCallOpen(false)}
            serviceName={activeServiceName}
          />

          <WhatsAppModal
            isOpen={isWhatsAppOpen}
            onClose={() => setIsWhatsAppOpen(false)}
            serviceName={activeServiceName}
          />

          <LeadModal
            isOpen={isLeadOpen}
            onClose={() => setIsLeadOpen(false)}
            initialService={activeServiceName}
          />
        </>
      )}
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AdminAuthProvider>
        <AppContent />
      </AdminAuthProvider>
    </BrowserRouter>
  );
}
