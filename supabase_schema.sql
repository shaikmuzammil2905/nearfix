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

-- ENABLE ROW LEVEL SECURITY (RLS)
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

-- DROP EXISTING POLICIES TO PREVENT ERRORS ON RERUN
DROP POLICY IF EXISTS "Public Read Access" ON public.hero_sections;
DROP POLICY IF EXISTS "Public Write Access" ON public.hero_sections;
DROP POLICY IF EXISTS "Public Read Access" ON public.service_categories;
DROP POLICY IF EXISTS "Public Write Access" ON public.service_categories;
DROP POLICY IF EXISTS "Public Read Access" ON public.services;
DROP POLICY IF EXISTS "Public Write Access" ON public.services;
DROP POLICY IF EXISTS "Public Read Access" ON public.service_providers;
DROP POLICY IF EXISTS "Public Write Access" ON public.service_providers;
DROP POLICY IF EXISTS "Public Read Access" ON public.about_sections;
DROP POLICY IF EXISTS "Public Write Access" ON public.about_sections;
DROP POLICY IF EXISTS "Public Read Access" ON public.testimonials;
DROP POLICY IF EXISTS "Public Write Access" ON public.testimonials;
DROP POLICY IF EXISTS "Public Read Access" ON public.faqs;
DROP POLICY IF EXISTS "Public Write Access" ON public.faqs;
DROP POLICY IF EXISTS "Public Read Access" ON public.gallery;
DROP POLICY IF EXISTS "Public Write Access" ON public.gallery;
DROP POLICY IF EXISTS "Public Read Access" ON public.contact_requests;
DROP POLICY IF EXISTS "Public Write Access" ON public.contact_requests;
DROP POLICY IF EXISTS "Public Read Access" ON public.header_settings;
DROP POLICY IF EXISTS "Public Write Access" ON public.header_settings;
DROP POLICY IF EXISTS "Public Read Access" ON public.footer_settings;
DROP POLICY IF EXISTS "Public Write Access" ON public.footer_settings;
DROP POLICY IF EXISTS "Public Read Access" ON public.site_settings;
DROP POLICY IF EXISTS "Public Write Access" ON public.site_settings;

-- CREATE ACCESS POLICIES
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

-- INITIAL SEED DATA
INSERT INTO public.hero_sections (id, badge, headline, headline_gradient, subtitle, button_call_text, button_whatsapp_text, hero_image, is_active)
VALUES (
  'main_hero',
  '#1 Service Platform in Alluri Seetha Ramaraju, Visakhapatnam & Anakapalli',
  'Find Trusted Local Services',
  'Near You',
  'Actively serving Alluri Seetha Ramaraju District (Araku Valley, Paderu, Chinthapalli), Visakhapatnam District & Anakapalli District. Connect with verified local professionals instantly.',
  'Call Now',
  'WhatsApp',
  '/hero-technician-visual.png',
  true
) ON CONFLICT (id) DO NOTHING;

INSERT INTO public.service_categories (id, slug, name, description, icon_name, color, bg_color, image, is_emergency, display_order, is_active) VALUES
('cat-1', 'home-services', 'Home Services', 'Everyday services for homes and offices.', 'Wrench', 'text-blue-600', 'bg-blue-50 border-blue-100', '/categories/home-services.jpg', false, 1, true),
('cat-2', 'appliance-repair', 'Appliance Repair', 'Repairs & maintenance for home appliances.', 'Wind', 'text-amber-600', 'bg-amber-50 border-amber-100', '/categories/appliance-repair.jpg', false, 2, true),
('cat-3', 'automobile', 'Automobile', 'Vehicle repairs, roadside help & transport.', 'Car', 'text-emerald-600', 'bg-emerald-50 border-emerald-100', '/categories/automobile.jpg', true, 3, true),
('cat-4', 'travel-tourism', 'Travel & Tourism', 'Local tours, cab booking & travel support.', 'Navigation', 'text-purple-600', 'bg-purple-50 border-purple-100', '/categories/travel.jpg', false, 4, true),
('cat-5', 'real-estate', 'Real Estate', 'Buy, sell, rent & property assistance.', 'Building', 'text-indigo-600', 'bg-indigo-50 border-indigo-100', '/categories/real-estate.jpg', false, 5, true),
('cat-6', 'construction', 'Construction', 'Building work, materials & contractors.', 'HardHat', 'text-orange-600', 'bg-orange-50 border-orange-100', '/categories/construction.jpg', false, 6, true),
('cat-7', 'event-rental', 'Event & Rental', 'Function rentals, tents, sound & catering.', 'Home', 'text-rose-600', 'bg-rose-50 border-rose-100', '/categories/events.jpg', false, 7, true),
('cat-8', 'media-tech', 'Media & Tech', 'Photography, video, IT & digital work.', 'Camera', 'text-sky-600', 'bg-sky-50 border-sky-100', '/categories/media.jpg', false, 8, true),
('cat-9', 'education-jobs', 'Education & Jobs', 'Tutoring, coaching, skills & job assistance.', 'GraduationCap', 'text-teal-600', 'bg-teal-50 border-teal-100', '/categories/education.jpg', false, 9, true),
('cat-10', 'emergency-24-7', 'Emergency Services', '24/7 emergency response & roadside help.', 'AlertTriangle', 'text-red-600', 'bg-red-50 border-red-100', '/categories/emergency.jpg', true, 10, true),
('cat-11', 'business-legal', 'Business & Legal', 'Taxation, registration, legal & accounts.', 'Briefcase', 'text-cyan-600', 'bg-cyan-50 border-cyan-100', '/categories/business.jpg', false, 11, true),
('cat-12', 'personal-wellness', 'Personal & Wellness', 'Tailoring, salon, health & fitness help.', 'Scissors', 'text-pink-600', 'bg-pink-50 border-pink-100', '/categories/personal-care.jpg', false, 12, true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.services (id, category_id, category_slug, category_name, slug, name, description, short_desc, icon_name, is_emergency, display_order, is_active) VALUES
('electrician', 'cat-1', 'home-services', 'Home Services', 'electrician', 'Electrician', 'Professional electrical wiring, repairs, short circuit fixes, fan and light installations in Araku Valley.', 'Wiring, repairs, light & fan installations', 'Zap', false, 1, true),
('plumber', 'cat-1', 'home-services', 'Home Services', 'plumber', 'Plumber', 'Expert plumbing services for pipe leaks, tap replacements, drainage blockages, and bathroom fittings.', 'Pipe leak fixes, tap & bathroom fittings', 'Droplet', false, 2, true),
('carpenter', 'cat-1', 'home-services', 'Home Services', 'carpenter', 'Carpenter', 'Skilled woodwork, furniture assembly, door hinge repair, lock fixing, and custom cabinet making.', 'Furniture assembly, door & lock repairs', 'Wrench', false, 3, true),
('ac-repair', 'cat-2', 'appliance-repair', 'Appliance Repair', 'ac-repair', 'AC Repair & Service', 'Air conditioner servicing, gas refilling, cooling repair, and split/window AC installation.', 'AC servicing, gas refill & installation', 'Wind', false, 4, true),
('local-taxi', 'cat-4', 'travel-tourism', 'Travel & Tourism', 'local-taxi', 'Local Taxi & Araku Tours', '24/7 tourist taxi service, Araku sightseeing tours, and railway station pickup/drop.', 'Cab booking & Araku sightseeing tours', 'Car', false, 5, true),
('roadside-assistance', 'cat-10', 'emergency-24-7', 'Emergency Services', 'roadside-assistance', '24/7 Roadside Assistance', 'Towing, battery jumpstart, puncture repair, and emergency breakdown recovery.', 'Towing, battery jumpstart & puncture fix', 'AlertTriangle', true, 6, true)
ON CONFLICT (id) DO NOTHING;

-- SEED SERVICE PROVIDERS (FIXED TABLE NAME)
INSERT INTO public.service_providers (id, name, phone, location, description, services_offered, profile_image, rating, display_order, is_active)
SELECT 'prov-1', 'Raju Electricals & Repairs', '9493416030', 'Araku Valley', 'Verified electrician with 5+ years experience.', '["Electrician", "AC Repair"]'::jsonb, '/hero-technician-visual.png', 4.9, 1, true
WHERE NOT EXISTS (SELECT 1 FROM public.service_providers WHERE id = 'prov-1');

INSERT INTO public.about_sections (id, heading, description, vision, mission, is_active)
VALUES (
  'main_about',
  'Connecting You with Local Experts',
  'NEARFIX is the leading local service discovery and lead generation platform active across Visakhapatnam District, Anakapalli District, Alluri Seetha Ramaraju District, and Araku Valley.',
  'To become most trusted platform for finding reliable local services — connecting people with the right service provider quickly, easily, and transparently.',
  'To make local services accessible to everyone through one simple platform, connecting customers with verified service providers through calls and WhatsApp.',
  true
) ON CONFLICT (id) DO NOTHING;

INSERT INTO public.header_settings (id, logo_url, cta_call_text, cta_whatsapp_text, show_search, is_active)
VALUES ('main_header', '/logo.png', 'Call Now', 'WhatsApp', true, true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.footer_settings (id, description, phone_display, whatsapp_display, email, location, full_address, is_active)
VALUES ('main_footer', 'NEARFIX is the trusted local service discovery and lead platform for Visakhapatnam District, Anakapalli District, Alluri Seetha Ramaraju District, and Araku Valley.', '9493416030', '9493192020', 'nearfixin@gmail.com', 'Araku Valley', 'Semon Residency, Second Floor, Room No 3, ZP Colony, Near Govt Hospital, Araku Valley, AP - 531151', true)
ON CONFLICT (id) DO NOTHING;

INSERT INTO public.site_settings (id, business_name, tagline, phone, whatsapp, email, location, district, full_address, pincode, maintenance_mode)
VALUES ('main_settings', 'NEARFIX', 'Trusted Local Service Discovery & Lead Platform', '9493416030', '9493192020', 'nearfixin@gmail.com', 'Araku Valley', 'Alluri Seetha Ramaraju District', 'Semon Residency, Second Floor, Room No 3, ZP Colony, Near Govt Hospital, Araku Valley, AP - 531151', '531151', false)
ON CONFLICT (id) DO NOTHING;
