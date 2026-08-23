import React, { useState, useEffect } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, MapPin, Search } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

interface HeaderProps {
  onOpenCall: () => void;
  onOpenWhatsApp: () => void;
  onOpenLead: () => void;
}

export const Header: React.FC<HeaderProps> = ({ onOpenCall, onOpenWhatsApp, onOpenLead }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('All Districts');
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/services?q=${encodeURIComponent(searchQuery.trim())}`);
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Categories', path: '/categories' },
    { name: 'Services', path: '/services' },
    { name: 'Business Information', path: '/business-information' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className={`sticky top-0 z-40 w-full transition-all duration-300 ${isScrolled ? 'bg-white/95 backdrop-blur-md shadow-header py-2.5' : 'bg-white border-b border-slate-100 py-3'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          
          {/* Left: Mobile Hamburger & NEARFIX Logo */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl text-slate-700 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
              <img
                src="/logo.png"
                alt="NEARFIX Logo"
                className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              />
            </Link>
          </div>

          {/* Center: Search & Location (DESKTOP ONLY - hidden on mobile to prevent scroll overlap) */}
          <div className="hidden lg:flex items-center gap-3 flex-1 max-w-md mx-4">
            <form onSubmit={handleSearchSubmit} className="relative w-full flex items-center gap-2">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search for any service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 bg-slate-100 focus:bg-white rounded-full border border-slate-200 focus:border-nearfix-blue focus:ring-2 focus:ring-nearfix-blue/20 outline-none text-xs text-slate-800 transition-all"
                />
                <Search className="w-3.5 h-3.5 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </div>
              
              <div className="flex items-center gap-1.5 text-xs font-bold bg-slate-100 hover:bg-slate-200 border border-slate-200 px-3 py-2 rounded-full text-slate-700 shadow-xs cursor-pointer flex-shrink-0">
                <MapPin className="w-3.5 h-3.5 text-nearfix-orange flex-shrink-0" />
                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="bg-transparent outline-none text-xs font-bold text-slate-700 cursor-pointer pr-1"
                >
                  <option value="All Districts">All Districts</option>
                  <option value="Visakhapatnam District">Visakhapatnam</option>
                  <option value="Anakapalli District">Anakapalli</option>
                  <option value="Alluri Seetha Ramaraju District">Alluri Seetha Ramaraju</option>
                  <option value="Araku Valley">Araku Valley</option>
                </select>
              </div>
            </form>
          </div>

          {/* Right: Contact Actions (Desktop) */}
          <div className="hidden lg:flex items-center gap-4">
            <button
              onClick={onOpenCall}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-nearfix-green border border-emerald-200/80 font-bold text-xs transition-all hover:scale-[1.02]"
            >
              <div className="w-7 h-7 rounded-full bg-nearfix-green text-white flex items-center justify-center shadow-xs">
                <Phone className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">Call Us</div>
                <div className="text-slate-900 font-extrabold">{NEARFIX_CONTACT.phoneDisplay}</div>
              </div>
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="flex items-center gap-2.5 px-4 py-2 rounded-full bg-emerald-50 hover:bg-emerald-100 text-nearfix-whatsapp border border-emerald-200/80 font-bold text-xs transition-all hover:scale-[1.02]"
            >
              <div className="w-7 h-7 rounded-full bg-nearfix-whatsapp text-white flex items-center justify-center shadow-xs">
                <MessageCircle className="w-3.5 h-3.5 fill-current" />
              </div>
              <div className="text-left leading-tight">
                <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">WhatsApp</div>
                <div className="text-slate-900 font-extrabold">{NEARFIX_CONTACT.whatsappDisplay}</div>
              </div>
            </button>
          </div>

          {/* Mobile Right Quick Action Icons (Clean & Compact) */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              onClick={onOpenCall}
              className="p-2.5 rounded-full bg-emerald-100 text-nearfix-green hover:bg-emerald-200 transition-colors shadow-xs"
              aria-label="Call NEARFIX"
            >
              <Phone className="w-5 h-5 fill-current" />
            </button>
            <button
              onClick={onOpenWhatsApp}
              className="p-2.5 rounded-full bg-emerald-100 text-nearfix-whatsapp hover:bg-emerald-200 transition-colors shadow-xs"
              aria-label="WhatsApp NEARFIX"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
            </button>
          </div>

        </div>

        {/* Desktop Navigation Links Row */}
        <nav className="hidden lg:flex items-center justify-between border-t border-slate-100 mt-3 pt-2.5 text-sm font-semibold text-slate-700">
          <div className="flex items-center gap-6">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative py-1.5 transition-colors ${isActive ? 'text-nearfix-orange font-bold' : 'hover:text-nearfix-blue'}`}
                >
                  {link.name}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-nearfix-orange rounded-full" />
                  )}
                </Link>
              );
            })}
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/list-your-business"
              className="text-xs font-bold text-nearfix-blue hover:text-white hover:bg-nearfix-blue px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-lg transition-colors"
            >
              List Your Business
            </Link>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 top-[60px] z-30 bg-slate-950/50 backdrop-blur-xs lg:hidden animate-fadeIn">
          <div className="bg-white w-4/5 max-w-sm h-full shadow-2xl p-6 overflow-y-auto flex flex-col justify-between">
            <div className="space-y-6">
              {/* Search inside Mobile Drawer */}
              <form onSubmit={handleSearchSubmit} className="relative">
                <input
                  type="text"
                  placeholder="Search for a service..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2.5 bg-slate-100 rounded-xl text-sm outline-none border border-slate-200"
                />
                <Search className="w-4 h-4 text-slate-400 absolute left-3 top-1/2 -translate-y-1/2" />
              </form>

              {/* Navigation Items */}
              <div className="space-y-1">
                <div className="text-xs font-bold text-slate-400 uppercase tracking-wider px-3 mb-2">Navigation</div>
                {navLinks.map((link) => {
                  const isActive = location.pathname === link.path;
                  return (
                    <Link
                      key={link.path}
                      to={link.path}
                      className={`flex items-center justify-between px-4 py-3 rounded-xl font-semibold text-sm transition-colors ${isActive ? 'bg-orange-50 text-nearfix-orange font-bold' : 'text-slate-700 hover:bg-slate-50'}`}
                    >
                      <span>{link.name}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Mobile Drawer Bottom Contact Card */}
            <div className="bg-slate-50 rounded-2xl p-4 border border-slate-200 mt-6 space-y-3">
              <div className="text-xs font-bold text-slate-500 uppercase tracking-wider">Quick Direct Action</div>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenCall(); }}
                className="w-full py-2.5 px-4 bg-nearfix-green text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4 fill-current" /> Call {NEARFIX_CONTACT.phoneDisplay}
              </button>
              <button
                onClick={() => { setIsMobileMenuOpen(false); onOpenWhatsApp(); }}
                className="w-full py-2.5 px-4 bg-nearfix-whatsapp text-white font-bold text-xs rounded-xl flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4 fill-current" /> WhatsApp {NEARFIX_CONTACT.whatsappDisplay}
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
