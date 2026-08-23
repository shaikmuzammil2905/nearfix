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
import { MyLeadsPage } from './pages/MyLeadsPage';
import { ListYourBusinessPage } from './pages/ListYourBusinessPage';

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

      {/* Responsive Header */}
      <Header
        onOpenCall={() => handleOpenCall()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
        onOpenLead={() => handleOpenLead()}
      />

      {/* Main Content Area */}
      <main className="flex-1">
        <Routes>
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
          <Route path="/my-leads" element={<MyLeadsPage />} />
          <Route path="/list-your-business" element={<ListYourBusinessPage />} />
        </Routes>
      </main>

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions
        onOpenCall={() => handleOpenCall()}
        onOpenWhatsApp={() => handleOpenWhatsApp()}
      />

      {/* Mobile Fixed Bottom Navigation */}
      <MobileBottomNav />

      {/* Footer */}
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
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
