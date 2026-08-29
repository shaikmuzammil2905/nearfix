import { supabase } from '../lib/supabase';
import { CATEGORIES, CategoryItem, ServiceItem } from '../data/categories';
import { NEARFIX_CONTACT } from '../data/contactInfo';

// --- TYPES ---

export interface HeroCMSData {
  id?: string;
  badge: string;
  headline: string;
  headlineGradient: string;
  subtitle: string;
  buttonCallText: string;
  buttonWhatsappText: string;
  heroImage: string;
  featureBadges: { title: string; icon: string }[];
  coverageAreas: { district: string; towns: string[]; active: boolean }[];
  isActive: boolean;
  updatedAt?: string;
}

export interface ProviderCMSData {
  id: string;
  name: string;
  phone: string;
  location: string;
  description: string;
  servicesOffered: string[];
  profileImage: string;
  rating: number;
  isActive: boolean;
  displayOrder: number;
  createdAt?: string;
}

export interface TestimonialCMSData {
  id: string;
  customerName: string;
  roleLocation: string;
  reviewText: string;
  rating: number;
  profileImage: string;
  isActive: boolean;
  displayOrder: number;
  createdAt?: string;
}

export interface FaqCMSData {
  id: string;
  question: string;
  answer: string;
  category: string;
  isActive: boolean;
  displayOrder: number;
  createdAt?: string;
}

export interface GalleryCMSData {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  caption: string;
  isActive: boolean;
  displayOrder: number;
  createdAt?: string;
}

export interface ContactRequestCMSData {
  id: string;
  name: string;
  phone: string;
  email?: string;
  service: string;
  location: string;
  message?: string;
  contactMethod: 'Call' | 'WhatsApp';
  isRead: boolean;
  createdAt: string;
}

export interface AboutCMSData {
  heading: string;
  description: string;
  vision: string;
  mission: string;
  coreValues: typeof NEARFIX_CONTACT.coreValues;
  whyChooseUs: typeof NEARFIX_CONTACT.whyChooseUs;
  howItWorks: typeof NEARFIX_CONTACT.howItWorks;
  isActive: boolean;
  updatedAt?: string;
}

export interface HeaderCMSData {
  logoUrl: string;
  navLinks: { name: string; path: string; isVisible: boolean }[];
  ctaCallText: string;
  ctaWhatsappText: string;
  showSearch: boolean;
  isActive: boolean;
}

export interface FooterCMSData {
  description: string;
  phoneDisplay: string;
  whatsappDisplay: string;
  email: string;
  location: string;
  fullAddress: string;
  socialLinks: { platform: string; url: string }[];
  copyrightText: string;
  isActive: boolean;
}

export interface SiteSettingsCMSData {
  businessName: string;
  tagline: string;
  experience: string;
  phone: string;
  whatsapp: string;
  email: string;
  location: string;
  district: string;
  fullAddress: string;
  pincode: string;
  seoTitle: string;
  metaDescription: string;
  keywords: string;
  maintenanceMode: boolean;
}

// --- INITIAL DEFAULTS ---

const INITIAL_HERO: HeroCMSData = {
  badge: "#1 Service Platform in Alluri Seetha Ramaraju, Visakhapatnam & Anakapalli",
  headline: "Find Trusted Local Services",
  headlineGradient: "Near You",
  subtitle: "Actively serving Alluri Seetha Ramaraju District (Araku Valley, Paderu, Chinthapalli), Visakhapatnam District & Anakapalli District. Connect with verified local professionals instantly.",
  buttonCallText: "Call Now",
  buttonWhatsappText: "WhatsApp",
  heroImage: "/hero-technician-visual.png",
  featureBadges: [
    { title: "Verified Professionals", icon: "ShieldCheck" },
    { title: "Quick Response", icon: "Zap" },
    { title: "Wide Range of Services", icon: "Wrench" },
    { title: "Call or WhatsApp Support", icon: "MessageCircle" }
  ],
  coverageAreas: [
    { district: "Alluri Seetha Ramaraju District", towns: ["Araku Valley", "Paderu", "Chinthapalli"], active: true },
    { district: "Visakhapatnam District", towns: ["Visakhapatnam City", "Gajuwaka"], active: true },
    { district: "Anakapalli District", towns: ["Anakapalli Town"], active: true }
  ],
  isActive: true
};

const INITIAL_PROVIDERS: ProviderCMSData[] = [
  {
    id: "prov-1",
    name: "Raju Electricals & Repairs",
    phone: "9493416030",
    location: "Araku Valley",
    description: "Verified electrician with 5+ years of experience in domestic and commercial wiring, short circuit fixes, and appliance installation.",
    servicesOffered: ["Electrician", "AC Repair & Service"],
    profileImage: "/hero-technician-visual.png",
    rating: 4.9,
    isActive: true,
    displayOrder: 1
  },
  {
    id: "prov-2",
    name: "Araku Express Plumbing Services",
    phone: "9493192020",
    location: "Araku Valley",
    description: "Fast response pipe leak sealing, tap replacement, and complete bathroom sanitary fitting experts.",
    servicesOffered: ["Plumber"],
    profileImage: "/categories/home-services.jpg",
    rating: 4.8,
    isActive: true,
    displayOrder: 2
  },
  {
    id: "prov-3",
    name: "Visakha Local Taxi Network",
    phone: "9493416030",
    location: "Visakhapatnam & Araku Valley",
    description: "24/7 tourist taxi service, Araku sightseeing tours, and station drop services.",
    servicesOffered: ["Local Taxi & Araku Tours"],
    profileImage: "/categories/travel.jpg",
    rating: 5.0,
    isActive: true,
    displayOrder: 3
  }
];

const INITIAL_TESTIMONIALS: TestimonialCMSData[] = [
  {
    id: "test-1",
    customerName: "Anand Kumar",
    roleLocation: "Araku Valley Resident",
    reviewText: "Found a reliable electrician in Araku Valley within 15 minutes of sending a WhatsApp message. Excellent and quick work!",
    rating: 5,
    profileImage: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150",
    isActive: true,
    displayOrder: 1
  },
  {
    id: "test-2",
    customerName: "Priya Reddy",
    roleLocation: "Visakhapatnam Tourist",
    reviewText: "SINCE T20 SERVICES helped us book a local cab driver for our Araku Valley family trip. Clear communication and transparent pricing.",
    rating: 5,
    profileImage: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    isActive: true,
    displayOrder: 2
  },
  {
    id: "test-3",
    customerName: "Suresh Verma",
    roleLocation: "Paderu",
    reviewText: "Emergency plumbing repair handled professionally. Verified worker arrived quickly and solved the leak.",
    rating: 5,
    profileImage: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?auto=format&fit=crop&q=80&w=150",
    isActive: true,
    displayOrder: 3
  }
];

const INITIAL_FAQS: FaqCMSData[] = [
  {
    id: "faq-1",
    question: "How do I request a local service on SINCE T20 SERVICES?",
    answer: "You can choose a service on SINCE T20 SERVICES and either call us directly, send an instant WhatsApp message, or fill out the quick lead request form.",
    category: "General",
    isActive: true,
    displayOrder: 1
  },
  {
    id: "faq-2",
    question: "Are all service providers on SINCE T20 SERVICES verified?",
    answer: "Yes, all our local service providers undergo background verification to ensure safety, reliability, and quality service.",
    category: "Verification",
    isActive: true,
    displayOrder: 2
  },
  {
    id: "faq-3",
    question: "Which locations do you currently serve?",
    answer: "We actively serve Alluri Seetha Ramaraju District (Araku Valley, Paderu, Chinthapalli), Visakhapatnam District, and Anakapalli District.",
    category: "Coverage",
    isActive: true,
    displayOrder: 3
  },
  {
    id: "faq-4",
    question: "Is there any extra fee to use SINCE T20 SERVICES?",
    answer: "No, using SINCE T20 SERVICES to search, discover, and connect with verified local service providers is 100% free for customers.",
    category: "Pricing",
    isActive: true,
    displayOrder: 4
  },
  {
    id: "faq-5",
    question: "How fast will a service provider respond?",
    answer: "Most verified local service providers respond within 10 to 30 minutes of receiving your call or message.",
    category: "Response Time",
    isActive: true,
    displayOrder: 5
  }
];

const INITIAL_GALLERY: GalleryCMSData[] = [
  {
    id: "gal-1",
    title: "Verified Electrician Service in Araku",
    category: "Home Services",
    imageUrl: "/hero-technician-visual.png",
    caption: "Professional wiring & electrical maintenance by certified local experts.",
    isActive: true,
    displayOrder: 1
  },
  {
    id: "gal-2",
    title: "Local Plumbing Repairs",
    category: "Plumbing",
    imageUrl: "/categories/home-services.jpg",
    caption: "Fast response leak sealing and sanitary fitting in Alluri Seetha Ramaraju district.",
    isActive: true,
    displayOrder: 2
  },
  {
    id: "gal-3",
    title: "Araku Tourism & Local Taxi Services",
    category: "Travel",
    imageUrl: "/categories/travel.jpg",
    caption: "Reliable cabs and tour drivers for Araku, Lambasingi, and Chaparai waterfalls.",
    isActive: true,
    displayOrder: 3
  }
];

const INITIAL_ABOUT: AboutCMSData = {
  heading: "Connecting You with Local Experts",
  description: "SINCE T20 SERVICES is the leading local service discovery and lead generation platform active across Visakhapatnam District, Anakapalli District, Alluri Seetha Ramaraju District, and Araku Valley — designed to make finding reliable help effortless and transparent.",
  vision: NEARFIX_CONTACT.vision,
  mission: NEARFIX_CONTACT.mission,
  coreValues: NEARFIX_CONTACT.coreValues,
  whyChooseUs: NEARFIX_CONTACT.whyChooseUs,
  howItWorks: NEARFIX_CONTACT.howItWorks,
  isActive: true
};

const INITIAL_HEADER: HeaderCMSData = {
  logoUrl: "/logo.png",
  navLinks: [
    { name: "Home", path: "/", isVisible: true },
    { name: "Categories", path: "/categories", isVisible: true },
    { name: "Services", path: "/services", isVisible: true },
    { name: "Business Information", path: "/business-information", isVisible: true },
    { name: "About Us", path: "/about", isVisible: true },
    { name: "Contact", path: "/contact", isVisible: true }
  ],
  ctaCallText: "Call Now",
  ctaWhatsappText: "WhatsApp",
  showSearch: true,
  isActive: true
};

const INITIAL_FOOTER: FooterCMSData = {
  description: "SINCE T20 SERVICES is the trusted local service discovery and lead platform for Visakhapatnam District, Anakapalli District, Alluri Seetha Ramaraju District, and Araku Valley. Connecting customers with verified local professionals quickly and transparently via Call & WhatsApp.",
  phoneDisplay: NEARFIX_CONTACT.phoneDisplay,
  whatsappDisplay: NEARFIX_CONTACT.whatsappDisplay,
  email: NEARFIX_CONTACT.email,
  location: NEARFIX_CONTACT.location,
  fullAddress: NEARFIX_CONTACT.fullAddress,
  socialLinks: [
    { platform: "Facebook", url: NEARFIX_CONTACT.social.facebook },
    { platform: "Instagram", url: NEARFIX_CONTACT.social.instagram },
    { platform: "Threads", url: NEARFIX_CONTACT.social.threads },
    { platform: "YouTube", url: NEARFIX_CONTACT.social.youtube },
    { platform: "X", url: NEARFIX_CONTACT.social.x },
    { platform: "LinkedIn", url: NEARFIX_CONTACT.social.linkedin }
  ],
  copyrightText: "© SINCE T20 SERVICES. All rights reserved.",
  isActive: true
};

const INITIAL_SITE_SETTINGS: SiteSettingsCMSData = {
  businessName: NEARFIX_CONTACT.name,
  tagline: NEARFIX_CONTACT.tagline,
  experience: NEARFIX_CONTACT.experience,
  phone: NEARFIX_CONTACT.phoneDisplay,
  whatsapp: NEARFIX_CONTACT.whatsappDisplay,
  email: NEARFIX_CONTACT.email,
  location: NEARFIX_CONTACT.location,
  district: NEARFIX_CONTACT.district,
  fullAddress: NEARFIX_CONTACT.fullAddress,
  pincode: NEARFIX_CONTACT.pincode,
  seoTitle: "SINCE T20 SERVICES - Find Trusted Local Services in Araku Valley, Visakhapatnam & Anakapalli",
  metaDescription: "Connect with verified local electricians, plumbers, taxi drivers, carpenters, and technicians in Araku Valley & Visakhapatnam instantly.",
  keywords: "SINCE T20 SERVICES, Araku local services, electrician Araku, plumber Araku Valley, taxi Araku, service directory Visakhapatnam",
  maintenanceMode: false
};

// --- SERVICE IMPLEMENTATION WITH LOCALSTORAGE & SUPABASE HYBRID SYNC ---

function getLocal<T>(key: string, fallback: T): T {
  try {
    const item = localStorage.getItem(`nearfix_cms_${key}`);
    return item ? JSON.parse(item) : fallback;
  } catch (err) {
    return fallback;
  }
}

function setLocal<T>(key: string, data: T): void {
  try {
    localStorage.setItem(`nearfix_cms_${key}`, JSON.stringify(data));
  } catch (err) {
    console.error('LocalStorage write error:', err);
  }
}

export class CMSService {
  private static notifyUpdate(table?: string) {
    if (typeof window !== 'undefined') {
      window.dispatchEvent(new CustomEvent('cms-data-updated', { detail: { table } }));
    }
  }

  static subscribeToUpdates(callback: () => void): () => void {
    if (typeof window === 'undefined') return () => {};
    const handler = () => callback();
    window.addEventListener('cms-data-updated', handler);
    return () => window.removeEventListener('cms-data-updated', handler);
  }

  // --- HERO ---
  static async getHero(): Promise<HeroCMSData> {
    const local = getLocal<HeroCMSData>('hero', INITIAL_HERO);
    try {
      const { data, error } = await supabase.from('hero_sections').select('*').limit(1).maybeSingle();
      if (!error && data) {
        const remote: HeroCMSData = {
          badge: data.badge || local.badge,
          headline: data.headline || local.headline,
          headlineGradient: data.headline_gradient || local.headlineGradient,
          subtitle: data.subtitle || local.subtitle,
          buttonCallText: data.button_call_text || local.buttonCallText,
          buttonWhatsappText: data.button_whatsapp_text || local.buttonWhatsappText,
          heroImage: data.hero_image || local.heroImage,
          featureBadges: data.feature_badges || local.featureBadges,
          coverageAreas: data.coverage_areas || local.coverageAreas,
          isActive: data.is_active !== undefined ? data.is_active : local.isActive
        };
        setLocal('hero', remote);
        return remote;
      }
    } catch (err) {
      console.warn('Supabase getHero fallback to local:', err);
    }
    return local;
  }

  static async updateHero(updated: HeroCMSData): Promise<HeroCMSData> {
    setLocal('hero', updated);
    try {
      await supabase.from('hero_sections').upsert({
        id: 'main_hero',
        badge: updated.badge,
        headline: updated.headline,
        headline_gradient: updated.headlineGradient,
        subtitle: updated.subtitle,
        button_call_text: updated.buttonCallText,
        button_whatsapp_text: updated.buttonWhatsappText,
        hero_image: updated.heroImage,
        feature_badges: updated.featureBadges,
        coverage_areas: updated.coverageAreas,
        is_active: updated.isActive,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase updateHero error:', err);
    }
    this.notifyUpdate('hero');
    return updated;
  }

  // --- CATEGORIES ---
  static async getCategories(): Promise<CategoryItem[]> {
    const initialCategories = CATEGORIES.map((c, i) => ({
      ...c,
      isEmergency: c.isEmergency ?? false,
      is_active: true,
      display_order: i + 1
    }));
    const local = getLocal<CategoryItem[]>('categories', initialCategories);

    try {
      const { data, error } = await supabase.from('service_categories').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped: CategoryItem[] = data.map((d: any) => ({
          id: d.id,
          slug: d.slug,
          name: d.name,
          description: d.description,
          iconName: d.icon_name || 'Wrench',
          color: d.color || 'text-blue-600',
          bgColor: d.bg_color || 'bg-blue-50 border-blue-100',
          image: d.image || '/categories/home-services.jpg',
          badge: d.badge,
          isEmergency: d.is_emergency ?? false,
          services: d.services || [],
          isActive: d.is_active !== false
        } as any));
        setLocal('categories', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getCategories fallback to local:', err);
    }
    return local;
  }

  static async saveCategory(category: Partial<CategoryItem>): Promise<CategoryItem[]> {
    const list = await this.getCategories();
    let updatedList: CategoryItem[];
    const isNew = !category.id;

    const newCat: CategoryItem = {
      id: category.id || `cat-${Date.now()}`,
      slug: category.slug || (category.name || 'category').toLowerCase().replace(/\s+/g, '-'),
      name: category.name || 'New Category',
      description: category.description || '',
      iconName: category.iconName || 'Wrench',
      color: category.color || 'text-blue-600',
      bgColor: category.bgColor || 'bg-blue-50 border-blue-100',
      image: category.image || '/categories/home-services.jpg',
      badge: category.badge,
      isEmergency: category.isEmergency ?? false,
      services: category.services || [],
      ...(category as any)
    };

    if (isNew) {
      updatedList = [...list, newCat];
    } else {
      updatedList = list.map(c => c.id === newCat.id ? { ...c, ...newCat } : c);
    }

    setLocal('categories', updatedList);

    try {
      await supabase.from('service_categories').upsert({
        id: newCat.id,
        slug: newCat.slug,
        name: newCat.name,
        description: newCat.description,
        icon_name: newCat.iconName,
        color: newCat.color,
        bg_color: newCat.bgColor,
        image: newCat.image,
        badge: newCat.badge,
        is_emergency: newCat.isEmergency,
        is_active: (newCat as any).isActive !== false,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveCategory error:', err);
    }

    this.notifyUpdate('categories');
    return updatedList;
  }

  static async deleteCategory(id: string): Promise<CategoryItem[]> {
    const list = await this.getCategories();
    const updated = list.filter(c => c.id !== id);
    setLocal('categories', updated);

    try {
      await supabase.from('service_categories').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteCategory error:', err);
    }
    this.notifyUpdate('categories');
    return updated;
  }

  // --- SERVICES ---
  static async getAllServices(): Promise<(ServiceItem & { isActive?: boolean; displayOrder?: number })[]> {
    const allStaticServices: (ServiceItem & { isActive?: boolean; displayOrder?: number })[] = [];
    let orderIndex = 1;
    CATEGORIES.forEach(cat => {
      cat.services.forEach(svc => {
        allStaticServices.push({
          ...svc,
          isActive: true,
          displayOrder: orderIndex++
        });
      });
    });

    const local = getLocal('services', allStaticServices);

    try {
      const { data, error } = await supabase.from('services').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped = data.map((d: any) => ({
          id: d.id,
          slug: d.slug,
          name: d.name,
          categorySlug: d.category_slug,
          categoryName: d.category_name,
          description: d.description,
          shortDesc: d.short_desc,
          iconName: d.icon_name || 'Wrench',
          benefits: d.benefits || [],
          commonRequirements: d.common_requirements || [],
          isEmergency: d.is_emergency ?? false,
          isActive: d.is_active !== false,
          displayOrder: d.display_order || 1
        }));
        setLocal('services', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getAllServices fallback to local:', err);
    }
    return local;
  }

  static async saveService(svc: Partial<ServiceItem & { isActive?: boolean; displayOrder?: number }>): Promise<(ServiceItem & { isActive?: boolean; displayOrder?: number })[]> {
    const list = await this.getAllServices();
    const isNew = !svc.id;

    const newSvc: ServiceItem & { isActive?: boolean; displayOrder?: number } = {
      id: svc.id || `svc-${Date.now()}`,
      slug: svc.slug || (svc.name || 'service').toLowerCase().replace(/\s+/g, '-'),
      name: svc.name || 'New Service',
      categorySlug: svc.categorySlug || 'home-services',
      categoryName: svc.categoryName || 'Home Services',
      description: svc.description || '',
      shortDesc: svc.shortDesc || '',
      iconName: svc.iconName || 'Wrench',
      benefits: svc.benefits || ["Verified local professionals", "Quick response time", "Transparent pricing"],
      commonRequirements: svc.commonRequirements || ["General inspection and repair", "New installation"],
      isEmergency: svc.isEmergency ?? false,
      isActive: svc.isActive !== false,
      displayOrder: svc.displayOrder || list.length + 1
    };

    let updatedList: (ServiceItem & { isActive?: boolean; displayOrder?: number })[];
    if (isNew) {
      updatedList = [newSvc, ...list];
    } else {
      updatedList = list.map(item => item.id === newSvc.id ? { ...item, ...newSvc } : item);
    }

    setLocal('services', updatedList);

    try {
      await supabase.from('services').upsert({
        id: newSvc.id,
        slug: newSvc.slug,
        name: newSvc.name,
        category_slug: newSvc.categorySlug,
        category_name: newSvc.categoryName,
        description: newSvc.description,
        short_desc: newSvc.shortDesc,
        icon_name: newSvc.iconName,
        benefits: newSvc.benefits,
        common_requirements: newSvc.commonRequirements,
        is_emergency: newSvc.isEmergency,
        is_active: newSvc.isActive !== false,
        display_order: newSvc.displayOrder,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveService error:', err);
    }

    this.notifyUpdate('services');
    return updatedList;
  }

  static async deleteService(id: string): Promise<(ServiceItem & { isActive?: boolean; displayOrder?: number })[]> {
    const list = await this.getAllServices();
    const updated = list.filter(item => item.id !== id);
    setLocal('services', updated);

    try {
      await supabase.from('services').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteService error:', err);
    }
    this.notifyUpdate('services');
    return updated;
  }

  // --- PROVIDERS ---
  static async getProviders(): Promise<ProviderCMSData[]> {
    const local = getLocal<ProviderCMSData[]>('providers', INITIAL_PROVIDERS);
    try {
      const { data, error } = await supabase.from('service_providers').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped: ProviderCMSData[] = data.map((d: any) => ({
          id: d.id,
          name: d.name,
          phone: d.phone,
          location: d.location,
          description: d.description,
          servicesOffered: d.services_offered || [],
          profileImage: d.profile_image || '/hero-technician-visual.png',
          rating: d.rating || 5.0,
          isActive: d.is_active !== false,
          displayOrder: d.display_order || 1
        }));
        setLocal('providers', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getProviders fallback to local:', err);
    }
    return local;
  }

  static async saveProvider(prov: Partial<ProviderCMSData>): Promise<ProviderCMSData[]> {
    const list = await this.getProviders();
    const isNew = !prov.id;

    const item: ProviderCMSData = {
      id: prov.id || `prov-${Date.now()}`,
      name: prov.name || 'New Provider',
      phone: prov.phone || '9493416030',
      location: prov.location || 'Araku Valley',
      description: prov.description || '',
      servicesOffered: prov.servicesOffered || [],
      profileImage: prov.profileImage || '/hero-technician-visual.png',
      rating: prov.rating || 5.0,
      isActive: prov.isActive !== false,
      displayOrder: prov.displayOrder || list.length + 1
    };

    const updated = isNew ? [...list, item] : list.map(p => p.id === item.id ? item : p);
    setLocal('providers', updated);

    try {
      await supabase.from('service_providers').upsert({
        id: item.id,
        name: item.name,
        phone: item.phone,
        location: item.location,
        description: item.description,
        services_offered: item.servicesOffered,
        profile_image: item.profileImage,
        rating: item.rating,
        is_active: item.isActive,
        display_order: item.displayOrder,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveProvider error:', err);
    }

    this.notifyUpdate('providers');
    return updated;
  }

  static async deleteProvider(id: string): Promise<ProviderCMSData[]> {
    const list = await this.getProviders();
    const updated = list.filter(p => p.id !== id);
    setLocal('providers', updated);

    try {
      await supabase.from('service_providers').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteProvider error:', err);
    }
    return updated;
  }

  // --- ABOUT ---
  static async getAbout(): Promise<AboutCMSData> {
    const local = getLocal<AboutCMSData>('about', INITIAL_ABOUT);
    try {
      const { data, error } = await supabase.from('about_sections').select('*').limit(1).maybeSingle();
      if (!error && data) {
        const remote: AboutCMSData = {
          heading: data.heading || local.heading,
          description: data.description || local.description,
          vision: data.vision || local.vision,
          mission: data.mission || local.mission,
          coreValues: data.core_values || local.coreValues,
          whyChooseUs: data.why_choose_us || local.whyChooseUs,
          howItWorks: data.how_it_works || local.howItWorks,
          isActive: data.is_active !== false
        };
        setLocal('about', remote);
        return remote;
      }
    } catch (err) {
      console.warn('Supabase getAbout fallback:', err);
    }
    return local;
  }

  static async updateAbout(updated: AboutCMSData): Promise<AboutCMSData> {
    setLocal('about', updated);
    try {
      await supabase.from('about_sections').upsert({
        id: 'main_about',
        heading: updated.heading,
        description: updated.description,
        vision: updated.vision,
        mission: updated.mission,
        core_values: updated.coreValues,
        why_choose_us: updated.whyChooseUs,
        how_it_works: updated.howItWorks,
        is_active: updated.isActive,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase updateAbout error:', err);
    }
    this.notifyUpdate('about');
    return updated;
  }

  // --- TESTIMONIALS ---
  static async getTestimonials(): Promise<TestimonialCMSData[]> {
    const local = getLocal<TestimonialCMSData[]>('testimonials', INITIAL_TESTIMONIALS);
    try {
      const { data, error } = await supabase.from('testimonials').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped: TestimonialCMSData[] = data.map((d: any) => ({
          id: d.id,
          customerName: d.customer_name,
          roleLocation: d.role_location,
          reviewText: d.review_text,
          rating: d.rating,
          profileImage: d.profile_image,
          isActive: d.is_active !== false,
          displayOrder: d.display_order
        }));
        setLocal('testimonials', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getTestimonials fallback:', err);
    }
    return local;
  }

  static async saveTestimonial(test: Partial<TestimonialCMSData>): Promise<TestimonialCMSData[]> {
    const list = await this.getTestimonials();
    const isNew = !test.id;

    const item: TestimonialCMSData = {
      id: test.id || `test-${Date.now()}`,
      customerName: test.customerName || 'Happy Customer',
      roleLocation: test.roleLocation || 'Araku Valley',
      reviewText: test.reviewText || '',
      rating: test.rating || 5,
      profileImage: test.profileImage || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&fit=crop&q=80&w=150',
      isActive: test.isActive !== false,
      displayOrder: test.displayOrder || list.length + 1
    };

    const updated = isNew ? [...list, item] : list.map(t => t.id === item.id ? item : t);
    setLocal('testimonials', updated);

    try {
      await supabase.from('testimonials').upsert({
        id: item.id,
        customer_name: item.customerName,
        role_location: item.roleLocation,
        review_text: item.reviewText,
        rating: item.rating,
        profile_image: item.profileImage,
        is_active: item.isActive,
        display_order: item.displayOrder,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveTestimonial error:', err);
    }
    this.notifyUpdate('testimonials');
    return updated;
  }

  static async deleteTestimonial(id: string): Promise<TestimonialCMSData[]> {
    const list = await this.getTestimonials();
    const updated = list.filter(t => t.id !== id);
    setLocal('testimonials', updated);
    try {
      await supabase.from('testimonials').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteTestimonial error:', err);
    }
    this.notifyUpdate('testimonials');
    return updated;
  }

  // --- FAQS ---
  static async getFaqs(): Promise<FaqCMSData[]> {
    const local = getLocal<FaqCMSData[]>('faqs', INITIAL_FAQS);
    try {
      const { data, error } = await supabase.from('faqs').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped: FaqCMSData[] = data.map((d: any) => ({
          id: d.id,
          question: d.question,
          answer: d.answer,
          category: d.category || 'General',
          isActive: d.is_active !== false,
          displayOrder: d.display_order || 1
        }));
        setLocal('faqs', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getFaqs fallback:', err);
    }
    return local;
  }

  static async saveFaq(faq: Partial<FaqCMSData>): Promise<FaqCMSData[]> {
    const list = await this.getFaqs();
    const isNew = !faq.id;

    const item: FaqCMSData = {
      id: faq.id || `faq-${Date.now()}`,
      question: faq.question || '',
      answer: faq.answer || '',
      category: faq.category || 'General',
      isActive: faq.isActive !== false,
      displayOrder: faq.displayOrder || list.length + 1
    };

    const updated = isNew ? [...list, item] : list.map(f => f.id === item.id ? item : f);
    setLocal('faqs', updated);

    try {
      await supabase.from('faqs').upsert({
        id: item.id,
        question: item.question,
        answer: item.answer,
        category: item.category,
        is_active: item.isActive,
        display_order: item.displayOrder,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveFaq error:', err);
    }
    this.notifyUpdate('faqs');
    return updated;
  }

  static async deleteFaq(id: string): Promise<FaqCMSData[]> {
    const list = await this.getFaqs();
    const updated = list.filter(f => f.id !== id);
    setLocal('faqs', updated);
    try {
      await supabase.from('faqs').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteFaq error:', err);
    }
    this.notifyUpdate('faqs');
    return updated;
  }

  // --- GALLERY ---
  static async getGallery(): Promise<GalleryCMSData[]> {
    const local = getLocal<GalleryCMSData[]>('gallery', INITIAL_GALLERY);
    try {
      const { data, error } = await supabase.from('gallery').select('*').order('display_order', { ascending: true });
      if (!error && data && data.length > 0) {
        const mapped: GalleryCMSData[] = data.map((d: any) => ({
          id: d.id,
          title: d.title,
          category: d.category,
          imageUrl: d.image_url,
          caption: d.caption,
          isActive: d.is_active !== false,
          displayOrder: d.display_order
        }));
        setLocal('gallery', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getGallery fallback:', err);
    }
    return local;
  }

  static async saveGalleryItem(item: Partial<GalleryCMSData>): Promise<GalleryCMSData[]> {
    const list = await this.getGallery();
    const isNew = !item.id;

    const newItem: GalleryCMSData = {
      id: item.id || `gal-${Date.now()}`,
      title: item.title || 'New Gallery Photo',
      category: item.category || 'General',
      imageUrl: item.imageUrl || '/hero-technician-visual.png',
      caption: item.caption || '',
      isActive: item.isActive !== false,
      displayOrder: item.displayOrder || list.length + 1
    };

    const updated = isNew ? [...list, newItem] : list.map(g => g.id === newItem.id ? newItem : g);
    setLocal('gallery', updated);

    try {
      await supabase.from('gallery').upsert({
        id: newItem.id,
        title: newItem.title,
        category: newItem.category,
        image_url: newItem.imageUrl,
        caption: newItem.caption,
        is_active: newItem.isActive,
        display_order: newItem.displayOrder,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase saveGalleryItem error:', err);
    }
    this.notifyUpdate('gallery');
    return updated;
  }

  static async deleteGalleryItem(id: string): Promise<GalleryCMSData[]> {
    const list = await this.getGallery();
    const updated = list.filter(g => g.id !== id);
    setLocal('gallery', updated);
    try {
      await supabase.from('gallery').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteGalleryItem error:', err);
    }
    this.notifyUpdate('gallery');
    return updated;
  }

  // --- CONTACT ENQUIRIES / REQUESTS ---
  static async getContactRequests(): Promise<ContactRequestCMSData[]> {
    const local = getLocal<ContactRequestCMSData[]>('contact_requests', []);
    try {
      const { data, error } = await supabase.from('contact_requests').select('*').order('created_at', { ascending: false });
      if (!error && data) {
        const mapped: ContactRequestCMSData[] = data.map((d: any) => ({
          id: d.id,
          name: d.name,
          phone: d.phone,
          email: d.email,
          service: d.service,
          location: d.location,
          message: d.message,
          contactMethod: d.contact_method || 'Call',
          isRead: d.is_read || false,
          createdAt: d.created_at || new Date().toISOString()
        }));
        setLocal('contact_requests', mapped);
        return mapped;
      }
    } catch (err) {
      console.warn('Supabase getContactRequests fallback:', err);
    }
    return local;
  }

  static async submitContactRequest(req: Omit<ContactRequestCMSData, 'id' | 'isRead' | 'createdAt'>): Promise<ContactRequestCMSData> {
    const newReq: ContactRequestCMSData = {
      ...req,
      id: `LEAD-${Date.now()}`,
      isRead: false,
      createdAt: new Date().toISOString()
    };

    const existing = await this.getContactRequests();
    const updated = [newReq, ...existing];
    setLocal('contact_requests', updated);

    try {
      await supabase.from('contact_requests').insert({
        id: newReq.id,
        name: newReq.name,
        phone: newReq.phone,
        email: newReq.email,
        service: newReq.service,
        location: newReq.location,
        message: newReq.message,
        contact_method: newReq.contactMethod,
        is_read: false,
        created_at: newReq.createdAt
      });
    } catch (err) {
      console.error('Supabase submitContactRequest error:', err);
    }
    return newReq;
  }

  static async toggleContactRead(id: string, isRead: boolean): Promise<ContactRequestCMSData[]> {
    const list = await this.getContactRequests();
    const updated = list.map(r => r.id === id ? { ...r, isRead } : r);
    setLocal('contact_requests', updated);

    try {
      await supabase.from('contact_requests').update({ is_read: isRead }).eq('id', id);
    } catch (err) {
      console.error('Supabase toggleContactRead error:', err);
    }
    return updated;
  }

  static async deleteContactRequest(id: string): Promise<ContactRequestCMSData[]> {
    const list = await this.getContactRequests();
    const updated = list.filter(r => r.id !== id);
    setLocal('contact_requests', updated);

    try {
      await supabase.from('contact_requests').delete().eq('id', id);
    } catch (err) {
      console.error('Supabase deleteContactRequest error:', err);
    }
    return updated;
  }

  // --- HEADER & FOOTER & SETTINGS ---
  static async getHeader(): Promise<HeaderCMSData> {
    const local = getLocal<HeaderCMSData>('header', INITIAL_HEADER);
    try {
      const { data, error } = await supabase.from('header_settings').select('*').limit(1).maybeSingle();
      if (!error && data) {
        const remote: HeaderCMSData = {
          logoUrl: data.logo_url || local.logoUrl,
          navLinks: data.nav_links || local.navLinks,
          ctaCallText: data.cta_call_text || local.ctaCallText,
          ctaWhatsappText: data.cta_whatsapp_text || local.ctaWhatsappText,
          showSearch: data.show_search !== false,
          isActive: data.is_active !== false
        };
        setLocal('header', remote);
        return remote;
      }
    } catch (err) {
      console.warn('Supabase getHeader fallback:', err);
    }
    return local;
  }

  static async updateHeader(hdr: HeaderCMSData): Promise<HeaderCMSData> {
    setLocal('header', hdr);
    try {
      await supabase.from('header_settings').upsert({
        id: 'main_header',
        logo_url: hdr.logoUrl,
        nav_links: hdr.navLinks,
        cta_call_text: hdr.ctaCallText,
        cta_whatsapp_text: hdr.ctaWhatsappText,
        show_search: hdr.showSearch,
        is_active: hdr.isActive,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase updateHeader error:', err);
    }
    this.notifyUpdate('header');
    return hdr;
  }

  static async getFooter(): Promise<FooterCMSData> {
    const local = getLocal<FooterCMSData>('footer', INITIAL_FOOTER);
    try {
      const { data, error } = await supabase.from('footer_settings').select('*').limit(1).maybeSingle();
      if (!error && data) {
        const remote: FooterCMSData = {
          description: data.description || local.description,
          phoneDisplay: data.phone_display || local.phoneDisplay,
          whatsappDisplay: data.whatsapp_display || local.whatsappDisplay,
          email: data.email || local.email,
          location: data.location || local.location,
          fullAddress: data.full_address || local.fullAddress,
          socialLinks: data.social_links || local.socialLinks,
          copyrightText: data.copyright_text || local.copyrightText,
          isActive: data.is_active !== false
        };
        setLocal('footer', remote);
        return remote;
      }
    } catch (err) {
      console.warn('Supabase getFooter fallback:', err);
    }
    return local;
  }

  static async updateFooter(ftr: FooterCMSData): Promise<FooterCMSData> {
    setLocal('footer', ftr);
    try {
      await supabase.from('footer_settings').upsert({
        id: 'main_footer',
        description: ftr.description,
        phone_display: ftr.phoneDisplay,
        whatsapp_display: ftr.whatsappDisplay,
        email: ftr.email,
        location: ftr.location,
        full_address: ftr.fullAddress,
        social_links: ftr.socialLinks,
        copyright_text: ftr.copyrightText,
        is_active: ftr.isActive,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase updateFooter error:', err);
    }
    this.notifyUpdate('footer');
    return ftr;
  }

  static async getSiteSettings(): Promise<SiteSettingsCMSData> {
    const local = getLocal<SiteSettingsCMSData>('settings', INITIAL_SITE_SETTINGS);
    try {
      const { data, error } = await supabase.from('site_settings').select('*').limit(1).maybeSingle();
      if (!error && data) {
        const remote: SiteSettingsCMSData = {
          businessName: data.business_name || local.businessName,
          tagline: data.tagline || local.tagline,
          experience: data.experience || local.experience,
          phone: data.phone || local.phone,
          whatsapp: data.whatsapp || local.whatsapp,
          email: data.email || local.email,
          location: data.location || local.location,
          district: data.district || local.district,
          fullAddress: data.full_address || local.fullAddress,
          pincode: data.pincode || local.pincode,
          seoTitle: data.seo_title || local.seoTitle,
          metaDescription: data.meta_description || local.metaDescription,
          keywords: data.keywords || local.keywords,
          maintenanceMode: data.maintenance_mode || false
        };
        setLocal('settings', remote);
        return remote;
      }
    } catch (err) {
      console.warn('Supabase getSiteSettings fallback:', err);
    }
    return local;
  }

  static async updateSiteSettings(stg: SiteSettingsCMSData): Promise<SiteSettingsCMSData> {
    setLocal('settings', stg);
    try {
      await supabase.from('site_settings').upsert({
        id: 'main_settings',
        business_name: stg.businessName,
        tagline: stg.tagline,
        experience: stg.experience,
        phone: stg.phone,
        whatsapp: stg.whatsapp,
        email: stg.email,
        location: stg.location,
        district: stg.district,
        full_address: stg.fullAddress,
        pincode: stg.pincode,
        seo_title: stg.seoTitle,
        meta_description: stg.metaDescription,
        keywords: stg.keywords,
        maintenance_mode: stg.maintenanceMode,
        updated_at: new Date().toISOString()
      });
    } catch (err) {
      console.error('Supabase updateSiteSettings error:', err);
    }
    this.notifyUpdate('settings');
    return stg;
  }
}
