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
      <section className="relative min-h-[520px] lg:min-h-[580px] flex items-center justify-center rounded-3xl overflow-hidden shadow-2xl mx-3 sm:mx-6 lg:mx-8 mt-4 border border-white/20 bg-emerald-950/20">
        <HeroVideo />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 text-white">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* LEFT COLUMN: Main Info, Coverage, Features & Search */}
            <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
              
              {/* Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-amber-400/40 text-xs sm:text-sm font-extrabold text-amber-300 uppercase tracking-wider animate-fadeIn shadow-xl">
                <ShieldCheck className="w-4 h-4 text-nearfix-orange flex-shrink-0 animate-pulse" /> 
                #1 Service Platform in Alluri Seetha Ramaraju, Visakhapatnam & Anakapalli
              </div>

              {/* Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight drop-shadow-[0_4px_16px_rgba(0,0,0,0.95)]">
                Find Trusted Local Services <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 via-amber-300 to-orange-500 drop-shadow-lg">Near You</span>
              </h1>

              {/* Subtitle */}
              <p className="text-white font-semibold text-sm sm:text-base lg:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed drop-shadow-[0_3px_10px_rgba(0,0,0,0.95)]">
                Actively serving <span className="font-extrabold text-amber-300">Alluri Seetha Ramaraju District (Araku Valley, Paderu, Chinthapalli)</span>, <span className="font-extrabold text-amber-300">Visakhapatnam District</span> & <span className="font-extrabold text-amber-300">Anakapalli District</span>. Connect with verified local professionals instantly.
              </p>

              {/* 4 Feature Badges (from Image 31) */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 pt-1 max-w-xl mx-auto lg:mx-0">
                <div className="bg-black/55 backdrop-blur-md border border-white/20 p-2.5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-100 shadow-xl hover:border-orange-500/50 transition-colors">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                  <span>Verified Professionals</span>
                </div>
                <div className="bg-black/55 backdrop-blur-md border border-white/20 p-2.5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-100 shadow-xl hover:border-orange-500/50 transition-colors">
                  <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                  <span>Quick Response</span>
                </div>
                <div className="bg-black/55 backdrop-blur-md border border-white/20 p-2.5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-100 shadow-xl hover:border-orange-500/50 transition-colors">
                  <Wrench className="w-4 h-4 text-sky-400 flex-shrink-0" />
                  <span>Wide Range of Services</span>
                </div>
                <div className="bg-black/55 backdrop-blur-md border border-white/20 p-2.5 rounded-xl flex items-center gap-2 text-xs font-bold text-slate-100 shadow-xl hover:border-orange-500/50 transition-colors">
                  <MessageCircle className="w-4 h-4 text-green-400 flex-shrink-0" />
                  <span>Call or WhatsApp Support</span>
                </div>
              </div>

              {/* District & Location Hierarchy Chips */}
              <div className="space-y-2 text-xs sm:text-sm pt-1">
                <div className="text-xs font-extrabold uppercase tracking-wider text-amber-300 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)] flex items-center justify-center lg:justify-start gap-1.5">
                  <MapPin className="w-4 h-4 text-nearfix-orange" /> Verified Coverage Areas
                </div>

                <div className="space-y-2">
                  <div className="bg-black/55 backdrop-blur-md p-3 rounded-2xl border border-white/20 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 shadow-xl">
                    <span className="font-extrabold text-amber-300 flex items-center gap-1.5 drop-shadow">
                      <MapPin className="w-4 h-4 text-nearfix-orange flex-shrink-0" /> Alluri Seetha Ramaraju District
                    </span>
                    <div className="flex flex-wrap items-center gap-1.5 font-bold text-white">
                      <span className="bg-nearfix-orange px-2.5 py-0.5 rounded-lg text-xs shadow-md">Araku Valley</span>
                      <span className="bg-nearfix-orange px-2.5 py-0.5 rounded-lg text-xs shadow-md">Paderu</span>
                      <span className="bg-nearfix-orange px-2.5 py-0.5 rounded-lg text-xs shadow-md">Chinthapalli</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/20 flex items-center justify-between shadow-xl">
                      <span className="font-extrabold text-emerald-300 text-xs flex items-center gap-1.5 drop-shadow">
                        <MapPin className="w-3.5 h-3.5 text-emerald-400 flex-shrink-0" /> Visakhapatnam District
                      </span>
                      <span className="text-[11px] font-bold bg-emerald-600/90 text-white px-2 py-0.5 rounded-md">Active</span>
                    </div>

                    <div className="bg-black/55 backdrop-blur-md p-2.5 rounded-xl border border-white/20 flex items-center justify-between shadow-xl">
                      <span className="font-extrabold text-sky-300 text-xs flex items-center gap-1.5 drop-shadow">
                        <MapPin className="w-3.5 h-3.5 text-sky-400 flex-shrink-0" /> Anakapalli District
                      </span>
                      <span className="text-[11px] font-bold bg-sky-600/90 text-white px-2 py-0.5 rounded-md">Active</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Interactive Search Bar (from Image 31) */}
              <div className="bg-black/60 backdrop-blur-lg p-3 rounded-2xl border border-white/25 shadow-2xl flex flex-col sm:flex-row items-center gap-2.5">
                <div className="w-full sm:w-1/2 relative">
                  <select
                    id="hero-service-select"
                    onChange={(e) => e.target.value && onOpenLead(e.target.value)}
                    className="w-full py-2.5 px-3 bg-slate-950/90 text-white font-medium text-xs sm:text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-nearfix-orange cursor-pointer shadow-inner"
                  >
                    <option value="">Select a Service...</option>
                    {CATEGORIES.slice(0, 12).map((cat) => (
                      <option key={cat.id} value={cat.name}>{cat.name}</option>
                    ))}
                  </select>
                </div>

                <div className="w-full sm:w-1/2 relative">
                  <select
                    id="hero-location-select"
                    className="w-full py-2.5 px-3 bg-slate-950/90 text-white font-medium text-xs sm:text-sm rounded-xl border border-slate-700 focus:outline-none focus:border-nearfix-orange cursor-pointer shadow-inner"
                  >
                    <option value="">Select Location / Area...</option>
                    <option value="Araku Valley">Araku Valley</option>
                    <option value="Paderu">Paderu</option>
                    <option value="Chinthapalli">Chinthapalli</option>
                    <option value="Visakhapatnam">Visakhapatnam</option>
                    <option value="Anakapalli">Anakapalli</option>
                  </select>
                </div>

                <button
                  onClick={() => onOpenLead()}
                  className="w-full sm:w-auto py-2.5 px-5 bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-extrabold text-xs sm:text-sm rounded-xl shadow-xl transition-all hover:scale-105 active:scale-95 flex-shrink-0 flex items-center justify-center gap-1.5"
                >
                  <Wrench className="w-4 h-4" />
                  Search Services
                </button>
              </div>

              {/* CTA Buttons Row */}
              <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-1">
                <button
                  onClick={onOpenCall}
                  className="flex items-center justify-center gap-2.5 w-full sm:w-auto py-3.5 px-8 bg-nearfix-green hover:bg-emerald-700 text-white font-extrabold text-base rounded-2xl shadow-xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 animate-pulse-glow"
                >
                  <Phone className="w-5 h-5 fill-current" />
                  Call Now
                </button>

                <button
                  onClick={onOpenWhatsApp}
                  className="flex items-center justify-center gap-2.5 w-full sm:w-auto py-3.5 px-8 bg-black/70 hover:bg-black/90 text-emerald-400 border-2 border-emerald-400 font-extrabold text-base rounded-2xl shadow-xl transition-all hover:scale-105 active:scale-95 backdrop-blur-md"
                >
                  <MessageCircle className="w-5 h-5 fill-current" />
                  WhatsApp
                </button>
              </div>

            </div>

            {/* RIGHT COLUMN: Clean Floating Technician & Phone Visual (from Image 31) */}
            <div className="lg:col-span-5 relative mt-4 lg:mt-0 flex items-center justify-center">
              <div className="relative max-w-sm sm:max-w-md lg:max-w-none mx-auto group animate-float-slow">
                
                {/* Soft natural radial glow behind visual */}
                <div className="absolute -inset-2 bg-gradient-to-r from-emerald-400/15 via-orange-400/15 to-amber-400/15 rounded-full blur-2xl opacity-60 group-hover:opacity-85 transition duration-700" />

                {/* Clean Floating Image without any box border, white background, or dark patch work */}
                <img
                  src="/hero-technician-visual.png"
                  alt="Nearfix Verified Technician & Smartphone App"
                  className="relative z-10 w-full h-auto object-contain max-h-[460px] filter drop-shadow-[0_18px_28px_rgba(0,0,0,0.55)] transform transition-transform duration-700 group-hover:scale-105"
                />

              </div>
            </div>

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
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {CATEGORIES.map((cat) => {
            const IconComponent = iconMap[cat.iconName] || Wrench;
            return (
              <Link
                key={cat.id}
                to={`/categories/${cat.slug}`}
                className={`group relative overflow-hidden bg-white rounded-2xl sm:rounded-3xl border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col ${cat.isEmergency ? 'ring-2 ring-red-500/80' : ''}`}
              >
                {/* Category Photo Image Banner */}
                <div className="relative h-32 sm:h-44 w-full overflow-hidden bg-slate-900">
                  <img
                    src={cat.image || '/hero-bg-custom.png'}
                    alt={cat.name}
                    className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 via-transparent to-transparent" />
                  
                  {cat.badge && (
                    <span className={`absolute top-2.5 right-2.5 z-10 text-[10px] sm:text-xs font-extrabold uppercase px-2.5 py-1 rounded-full shadow-md ${cat.isEmergency ? 'bg-red-600 text-white' : 'bg-nearfix-orange text-white'}`}>
                      {cat.badge}
                    </span>
                  )}

                  {/* Icon Overlay Badge */}
                  <div className={`absolute bottom-2.5 left-3 w-9 h-9 sm:w-11 sm:h-11 rounded-xl flex items-center justify-center shadow-lg border border-white/30 backdrop-blur-md ${cat.bgColor}`}>
                    <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 ${cat.color}`} />
                  </div>
                </div>

                {/* Card Text Content */}
                <div className="p-3.5 sm:p-4 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-sm sm:text-base font-extrabold text-slate-900 group-hover:text-nearfix-orange transition-colors line-clamp-1">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-slate-500 mt-1 line-clamp-2 leading-relaxed">
                      {cat.description}
                    </p>
                  </div>

                  <div className="mt-3 flex items-center justify-between pt-2 border-t border-slate-100 text-xs font-bold text-slate-600">
                    <span className="text-slate-500">{cat.services?.length || 0} Services</span>
                    <span className="inline-flex items-center gap-0.5 text-nearfix-orange group-hover:translate-x-1 transition-transform">
                      Explore <ChevronRight className="w-3.5 h-3.5" />
                    </span>
                  </div>
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
