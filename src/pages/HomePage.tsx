import React from 'react';
import { Link } from 'react-router-dom';
import { 
  MapPin, Phone, MessageCircle, ShieldCheck, Zap, 
  IndianRupee, ThumbsUp, Heart, ArrowRight, CheckCircle2, 
  Wrench, Wind, Car, Navigation, Building, HardHat, Home, 
  Camera, Monitor, GraduationCap, AlertTriangle, Briefcase, ChevronRight,
  FileText, Receipt, Truck, Users, Drill, Scissors, ShoppingBag, Landmark, Scale, DollarSign, Package, Tractor, Droplet, Sparkles, Calculator
} from 'lucide-react';
import { CATEGORIES, CategoryItem } from '../data/categories';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { HeroVideo } from '../components/HeroVideo';
import { MapSection } from '../components/MapSection';

interface HomePageProps {
  onOpenCall: () => void;
  onOpenWhatsApp: () => void;
  onOpenLead: (serviceName?: string) => void;
}

// Icon Map helper
const iconMap: { [key: string]: React.ComponentType<{ className?: string }> } = {
  Wrench,
  Wind,
  Car,
  Navigation,
  Building,
  HardHat,
  Home,
  Camera,
  Monitor,
  GraduationCap,
  AlertTriangle,
  Briefcase,
  FileText,
  Receipt,
  Truck,
  Users,
  Drill,
  Scissors,
  ShoppingBag,
  Landmark,
  Scale,
  DollarSign,
  Package,
  Tractor,
  Droplet,
  Sparkles,
  Calculator,
  Zap
};

export const HomePage: React.FC<HomePageProps> = ({ onOpenCall, onOpenWhatsApp, onOpenLead }) => {

  return (
    <div className="space-y-12 pb-12">
      
      {/* 1. HERO SECTION */}
      <section className="relative min-h-[480px] lg:min-h-[540px] flex items-center justify-center rounded-3xl overflow-hidden shadow-xl mx-4 sm:mx-6 lg:mx-8 mt-4 border border-slate-800">
        <HeroVideo />

        <div className="relative z-10 w-full max-w-5xl mx-auto px-6 py-12 sm:py-16 text-center text-white space-y-6">
          
          {/* Main Heading */}
          <div className="space-y-3">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-black/40 backdrop-blur-sm border border-white/20 text-xs sm:text-sm font-extrabold text-white uppercase tracking-wider animate-fadeIn shadow-md">
              <ShieldCheck className="w-4 h-4 text-nearfix-orange flex-shrink-0" /> #1 Service Platform in Alluri Seetha Ramaraju, Visakhapatnam & Anakapalli Districts
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">
              Find Trusted Local Services <span className="text-nearfix-orange drop-shadow-[0_3px_10px_rgba(0,0,0,0.9)]">Near You</span>
            </h1>

            <p className="text-white font-medium text-base sm:text-lg max-w-3xl mx-auto leading-relaxed drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
              Actively serving <span className="font-bold text-amber-300">Alluri Seetha Ramaraju District (Araku Valley, Paderu, Chinthapalli)</span>, <span className="font-bold text-amber-300">Visakhapatnam District</span> & <span className="font-bold text-amber-300">Anakapalli District</span>. Connect with verified local professionals instantly via Call or WhatsApp.
            </p>
          </div>

          {/* Line-wise District & Location Hierarchy - Clear View, No Heavy Shadow Box */}
          <div className="max-w-3xl mx-auto space-y-2.5 text-left sm:text-center text-white">
            <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 drop-shadow flex items-center justify-center gap-1.5">
              <MapPin className="w-4 h-4 text-nearfix-orange" /> Verified Local Service Coverage Areas
            </div>

            <div className="space-y-2 text-xs sm:text-sm">
              {/* Line 1: Alluri Seetha Ramaraju District with sub-places */}
              <div className="bg-black/35 backdrop-blur-sm p-3 rounded-2xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-md">
                <span className="font-extrabold text-amber-300 drop-shadow flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-nearfix-orange flex-shrink-0" /> Alluri Seetha Ramaraju District
                </span>
                <div className="flex flex-wrap items-center gap-1.5 font-bold text-white">
                  <span className="bg-nearfix-orange px-2.5 py-1 rounded-lg text-xs shadow-md">Araku Valley</span>
                  <span className="bg-nearfix-orange px-2.5 py-1 rounded-lg text-xs shadow-md">Paderu</span>
                  <span className="bg-nearfix-orange px-2.5 py-1 rounded-lg text-xs shadow-md">Chinthapalli</span>
                </div>
              </div>

              {/* Line 2: Visakhapatnam District */}
              <div className="bg-black/35 backdrop-blur-sm p-3 rounded-2xl border border-white/20 flex items-center justify-between shadow-md">
                <span className="font-extrabold text-emerald-300 drop-shadow flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-emerald-400 flex-shrink-0" /> Visakhapatnam District
                </span>
                <span className="text-xs font-bold bg-emerald-600/90 text-white px-2.5 py-1 rounded-lg shadow-xs">Active Coverage</span>
              </div>

              {/* Line 3: Anakapalli District */}
              <div className="bg-black/35 backdrop-blur-sm p-3 rounded-2xl border border-white/20 flex items-center justify-between shadow-md">
                <span className="font-extrabold text-sky-300 drop-shadow flex items-center gap-1.5">
                  <MapPin className="w-4 h-4 text-sky-400 flex-shrink-0" /> Anakapalli District
                </span>
                <span className="text-xs font-bold bg-sky-600/90 text-white px-2.5 py-1 rounded-lg shadow-xs">Active Coverage</span>
              </div>
            </div>
          </div>

          {/* CTA Buttons Row */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <button
              onClick={onOpenCall}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto py-3.5 px-8 bg-nearfix-green hover:bg-emerald-700 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95"
            >
              <Phone className="w-5 h-5 fill-current" />
              Call Now
            </button>

            <button
              onClick={onOpenWhatsApp}
              className="flex items-center justify-center gap-2.5 w-full sm:w-auto py-3.5 px-8 bg-white hover:bg-slate-100 text-nearfix-whatsapp border-2 border-nearfix-whatsapp font-extrabold text-base rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-current" />
              WhatsApp
            </button>
          </div>

        </div>
      </section>

      {/* 2. POPULAR CATEGORIES SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              Popular Categories
            </h2>
            <p className="text-slate-500 text-sm mt-1">Browse all {CATEGORIES.length} service categories available across Visakhapatnam, Anakapalli & Alluri Seetha Ramaraju Districts</p>
          </div>

          <Link
            to="/categories"
            className="hidden sm:flex items-center gap-1 text-sm font-bold text-nearfix-blue hover:text-nearfix-orange transition-colors"
          >
            View All Categories <ChevronRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Categories Grid (2 Columns on mobile matching UI, 4 on desktop) */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Wrench;
            return (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug}`}
                className={`group relative p-4 sm:p-6 bg-white rounded-2xl sm:rounded-3xl border border-slate-100 shadow-card hover:shadow-cardHover transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center ${cat.isEmergency ? 'ring-2 ring-red-400/50 bg-red-50/30' : ''}`}
              >
                {cat.badge && (
                  <span className={`absolute top-2 right-2 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full ${cat.isEmergency ? 'bg-red-600 text-white' : 'bg-nearfix-orange text-white'}`}>
                    {cat.badge}
                  </span>
                )}

                <div className={`w-14 h-14 sm:w-16 sm:h-16 rounded-2xl flex items-center justify-center mb-3 sm:mb-4 transition-transform group-hover:scale-110 shadow-xs ${cat.bgColor}`}>
                  <IconComponent className={`w-7 h-7 sm:w-8 sm:h-8 ${cat.color}`} />
                </div>

                <h3 className="text-sm sm:text-base font-bold text-slate-900 group-hover:text-nearfix-blue transition-colors line-clamp-1">
                  {cat.name}
                </h3>
                
                <p className="text-xs text-slate-500 mt-1 line-clamp-2 hidden sm:block">
                  {cat.description}
                </p>

                <div className="mt-3 flex items-center gap-1 text-xs font-semibold text-nearfix-orange opacity-0 group-hover:opacity-100 transition-opacity">
                  Explore Services <ArrowRight className="w-3.5 h-3.5" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* 3. VERIFIED & TRUSTED PROFESSIONALS SECTION (Matching UI reference) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-blue-50 via-sky-50 to-blue-100 border border-blue-200/80 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-nearfix-blue text-white flex items-center justify-center flex-shrink-0 shadow-lg">
              <ShieldCheck className="w-8 h-8 text-nearfix-orange" />
            </div>
            <div>
              <h3 className="text-xl sm:text-2xl font-extrabold text-nearfix-blue">
                Verified & Trusted Professionals
              </h3>
              <p className="text-slate-600 text-sm mt-1">
                All service providers are verified for your safety and satisfaction.
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 w-full md:w-auto">
            <button
              onClick={() => onOpenLead()}
              className="flex-1 md:flex-initial py-3 px-6 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-bold text-sm rounded-xl shadow-md transition-all text-center"
            >
              Request a Verified Service
            </button>
          </div>
        </div>
      </section>

      {/* 4. WHY CHOOSE NEARFIX (5 Benefit cards matching UI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-xl mx-auto mb-10">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Why Choose NEARFIX?
          </h2>
          <p className="text-slate-500 text-sm mt-1">
            Built for speed, transparency, and local community trust.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-6">
          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card text-center hover:shadow-cardHover transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center">
              <Zap className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Quick Response</h4>
            <p className="text-xs text-slate-500 mt-1">Connect with local services quickly.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card text-center hover:shadow-cardHover transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center">
              <CheckCircle2 className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Verified Pros</h4>
            <p className="text-xs text-slate-500 mt-1">Find reliable service providers.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card text-center hover:shadow-cardHover transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center">
              <IndianRupee className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Transparent Pricing</h4>
            <p className="text-xs text-slate-500 mt-1">Clear communication & no surprises.</p>
          </div>

          <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-card text-center hover:shadow-cardHover transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center">
              <ThumbsUp className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Quality Service</h4>
            <p className="text-xs text-slate-500 mt-1">Focus on capable local experts.</p>
          </div>

          <div className="col-span-2 sm:col-span-1 bg-white rounded-2xl p-5 border border-slate-100 shadow-card text-center hover:shadow-cardHover transition-all">
            <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-rose-50 text-rose-600 flex items-center justify-center">
              <Heart className="w-6 h-6" />
            </div>
            <h4 className="font-bold text-slate-900 text-sm sm:text-base">Customer First</h4>
            <p className="text-xs text-slate-500 mt-1">Every decision starts with you.</p>
          </div>
        </div>
      </section>

      {/* 5. HOW NEARFIX WORKS (3-step flow) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 relative overflow-hidden">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-wider text-nearfix-orange">Simple Process</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mt-1">How NEARFIX Works</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
            {NEARFIX_CONTACT.howItWorks.map((item, idx) => (
              <div key={item.step} className="bg-slate-800/80 border border-slate-700 rounded-2xl p-6 relative">
                <div className="text-3xl font-black text-nearfix-orange mb-2">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-slate-300 text-sm leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. BUSINESS INFORMATION SECTION (Side-by-side desktop card matching UI) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-card">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-4">
              <h3 className="text-xl sm:text-2xl font-extrabold text-nearfix-blue">
                NEARFIX Business Information
              </h3>
              
              <div className="space-y-2 text-sm text-slate-700">
                <div className="flex items-start gap-2.5">
                  <MapPin className="w-5 h-5 text-nearfix-blue flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="font-semibold block">Semon Residency, Second Floor, Room No 3</span>
                    <span className="text-slate-500">ZP Colony, Near Govt Hospital, Araku Valley, AP - 531151</span>
                  </div>
                </div>

                <div className="flex items-center gap-2.5 pt-1">
                  <Phone className="w-4 h-4 text-nearfix-green" />
                  <a href={NEARFIX_CONTACT.phoneTel} className="font-bold text-slate-900 hover:text-nearfix-green">
                    Call: {NEARFIX_CONTACT.phoneDisplay}
                  </a>
                </div>

                <div className="flex items-center gap-2.5">
                  <MessageCircle className="w-4 h-4 text-nearfix-whatsapp" />
                  <a href={NEARFIX_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="font-bold text-slate-900 hover:text-nearfix-whatsapp">
                    WhatsApp: {NEARFIX_CONTACT.whatsappDisplay}
                  </a>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/business-information"
                  className="inline-flex items-center gap-2 font-bold text-sm text-nearfix-orange hover:underline"
                >
                  View Full Business Profile & Core Values <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Illustration graphic representing mobile map & phone */}
            <div className="w-full md:w-80 h-44 bg-gradient-to-tr from-blue-100 to-sky-50 rounded-2xl border border-blue-200/60 p-4 flex flex-col items-center justify-center text-center">
              <div className="w-12 h-12 rounded-full bg-nearfix-blue text-white flex items-center justify-center shadow-lg mb-2">
                <MapPin className="w-6 h-6 text-nearfix-orange animate-bounce" />
              </div>
              <div className="font-extrabold text-slate-900 text-sm">Araku Valley HQ</div>
              <p className="text-xs text-slate-500 mt-0.5">3 Years Local Service Excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. INTERACTIVE MAP SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <MapSection />
      </section>

    </div>
  );
};
