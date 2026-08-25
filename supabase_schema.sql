-- ===================================================
-- NEARFIX SUPABASE DATABASE SCHEMA INITIALIZATION SCRIPT
-- ===================================================

-- 1. HERO SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.hero_sections (
  id TEXT PRIMARY KEY DEFAULT 'main_hero',
  badge TEXT NOT NULL,
  headline TEXT NOT NULL,
  headline_gradient TEXT,
  subtitle TEXT NOT NULL,
  button_call_text TEXT DEFAULT 'Call Now',
  button_whatsapp_text TEXT DEFAULT 'WhatsApp',
  hero_image TEXT,
  feature_badges JSONB DEFAULT '[]'::jsonb,
  coverage_areas JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 2. SERVICE CATEGORIES TABLE
CREATE TABLE IF NOT EXISTS public.service_categories (
  id TEXT PRIMARY KEY,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  icon_name TEXT DEFAULT 'Wrench',
  color TEXT DEFAULT 'text-blue-600',
  bg_color TEXT DEFAULT 'bg-blue-50 border-blue-100',
  image TEXT,
  badge TEXT,
  is_emergency BOOLEAN DEFAULT false,
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. SERVICES TABLE
CREATE TABLE IF NOT EXISTS public.services (
  id TEXT PRIMARY KEY,
  category_id TEXT REFERENCES public.service_categories(id) ON DELETE CASCADE,
  category_slug TEXT NOT NULL,
  category_name TEXT NOT NULL,
  slug TEXT UNIQUE NOT NULL,
  name TEXT NOT NULL,
  description TEXT,
  short_desc TEXT,
  icon_name TEXT DEFAULT 'Wrench',
  benefits JSONB DEFAULT '[]'::jsonb,
  common_requirements JSONB DEFAULT '[]'::jsonb,
  is_emergency BOOLEAN DEFAULT false,
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 4. SERVICE PROVIDERS TABLE
CREATE TABLE IF NOT EXISTS public.service_providers (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  location TEXT NOT NULL,
  description TEXT,
  services_offered JSONB DEFAULT '[]'::jsonb,
  profile_image TEXT,
  rating NUMERIC(3,1) DEFAULT 5.0,
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. ABOUT SECTIONS TABLE
CREATE TABLE IF NOT EXISTS public.about_sections (
  id TEXT PRIMARY KEY DEFAULT 'main_about',
  heading TEXT NOT NULL,
  description TEXT NOT NULL,
  vision TEXT NOT NULL,
  mission TEXT NOT NULL,
  core_values JSONB DEFAULT '[]'::jsonb,
  why_choose_us JSONB DEFAULT '[]'::jsonb,
  how_it_works JSONB DEFAULT '[]'::jsonb,
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 6. TESTIMONIALS TABLE
CREATE TABLE IF NOT EXISTS public.testimonials (
  id TEXT PRIMARY KEY,
  customer_name TEXT NOT NULL,
  role_location TEXT,
  review_text TEXT NOT NULL,
  rating INT DEFAULT 5,
  profile_image TEXT,
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 7. FAQS TABLE
CREATE TABLE IF NOT EXISTS public.faqs (
  id TEXT PRIMARY KEY,
  question TEXT NOT NULL,
  answer TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 8. GALLERY TABLE
CREATE TABLE IF NOT EXISTS public.gallery (
  id TEXT PRIMARY KEY,
  title TEXT NOT NULL,
  category TEXT DEFAULT 'General',
  image_url TEXT NOT NULL,
  caption TEXT,
  display_order INT DEFAULT 1,
  is_active BOOLEAN DEFAULT true,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 9. CONTACT REQUESTS TABLE
CREATE TABLE IF NOT EXISTS public.contact_requests (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT,
  service TEXT NOT NULL,
  location TEXT NOT NULL,
  message TEXT,
  contact_method TEXT DEFAULT 'Call',
  is_read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 10. HEADER SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.header_settings (
  id TEXT PRIMARY KEY DEFAULT 'main_header',
  logo_url TEXT DEFAULT '/logo.png',
  nav_links JSONB DEFAULT '[]'::jsonb,
  cta_call_text TEXT DEFAULT 'Call Now',
  cta_whatsapp_text TEXT DEFAULT 'WhatsApp',
  show_search BOOLEAN DEFAULT true,
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 11. FOOTER SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.footer_settings (
  id TEXT PRIMARY KEY DEFAULT 'main_footer',
  description TEXT NOT NULL,
  phone_display TEXT DEFAULT '9493416030',
  whatsapp_display TEXT DEFAULT '9493192020',
  email TEXT DEFAULT 'nearfixin@gmail.com',
  location TEXT DEFAULT 'Araku Valley',
  full_address TEXT NOT NULL,
  social_links JSONB DEFAULT '[]'::jsonb,
  copyright_text TEXT DEFAULT '© NEARFIX. All rights reserved.',
  is_active BOOLEAN DEFAULT true,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- 12. SITE SETTINGS TABLE
CREATE TABLE IF NOT EXISTS public.site_settings (
  id TEXT PRIMARY KEY DEFAULT 'main_settings',
  business_name TEXT DEFAULT 'NEARFIX',
  tagline TEXT DEFAULT 'Trusted Local Service Discovery & Lead Platform',
  experience TEXT DEFAULT '3 years',
  phone TEXT DEFAULT '9493416030',
  whatsapp TEXT DEFAULT '9493192020',
  email TEXT DEFAULT 'nearfixin@gmail.com',
  location TEXT DEFAULT 'Araku Valley',
  district TEXT DEFAULT 'Alluri Seetha Ramaraju District',
  full_address TEXT NOT NULL,
  pincode TEXT DEFAULT '531151',
  seo_title TEXT,
  meta_description TEXT,
  keywords TEXT,
  maintenance_mode BOOLEAN DEFAULT false,
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- ENABLE ROW LEVEL SECURITY (RLS) & PUBLIC READ ACCESS
ALTER TABLE public.hero_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.services ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.service_providers ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.about_sections ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.testimonials ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.faqs ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.gallery ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.header_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.footer_settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.site_settings ENABLE ROW LEVEL SECURITY;

-- CREATE READ & WRITE POLICIES FOR PUBLIC AND AUTHENTICATED USERS
CREATE POLICY "Public Read Access" ON public.hero_sections FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.hero_sections FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.service_categories FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.service_categories FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.services FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.services FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.service_providers FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.service_providers FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.about_sections FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.about_sections FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.testimonials FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.testimonials FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.faqs FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.faqs FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.gallery FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.gallery FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.contact_requests FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.contact_requests FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.header_settings FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.header_settings FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.footer_settings FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.footer_settings FOR ALL USING (true);

CREATE POLICY "Public Read Access" ON public.site_settings FOR SELECT USING (true);
CREATE POLICY "Public Write Access" ON public.site_settings FOR ALL USING (true);
