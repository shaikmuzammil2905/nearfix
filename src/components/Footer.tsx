import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Phone, MessageCircle, Mail, MapPin, ShieldCheck, Heart, Facebook, Instagram, Youtube, Twitter, Linkedin } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { CMSService, FooterCMSData } from '../services/cmsService';

export const Footer: React.FC = () => {
  const [footer, setFooter] = useState<FooterCMSData | null>(null);

  const loadFooterData = async () => {
    try {
      const data = await CMSService.getFooter();
      setFooter(data);
    } catch (err) {
      console.error('Error fetching footer data:', err);
    }
  };

  useEffect(() => {
    loadFooterData();
    const unsubscribe = CMSService.subscribeToUpdates(() => {
      loadFooterData();
    });
    return unsubscribe;
  }, []);

  const getSocialUrl = (platformName: string, defaultUrl: string) => {
    if (!footer?.socialLinks) return defaultUrl;
    const found = footer.socialLinks.find(s => s.platform.toLowerCase().includes(platformName.toLowerCase()));
    return found?.url || defaultUrl;
  };

  const facebookUrl = getSocialUrl('facebook', NEARFIX_CONTACT.social.facebook);
  const instagramUrl = getSocialUrl('instagram', NEARFIX_CONTACT.social.instagram);
  const threadsUrl = getSocialUrl('threads', NEARFIX_CONTACT.social.threads);
  const youtubeUrl = getSocialUrl('youtube', NEARFIX_CONTACT.social.youtube);
  const xUrl = getSocialUrl('x', NEARFIX_CONTACT.social.x);
  const linkedinUrl = getSocialUrl('linkedin', NEARFIX_CONTACT.social.linkedin);

  return (
    <footer className="bg-nearfix-blue text-white pt-12 pb-24 lg:pb-12 border-t border-slate-800 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-10">
          
          {/* Col 1: Brand */}
          <div className="space-y-4">
            <Link to="/" className="inline-block bg-white p-2.5 rounded-2xl shadow-md">
              <img src="/logo.png" alt="SINCE T20 SERVICES Logo" className="h-12 sm:h-14 w-auto object-contain" />
            </Link>

            <p className="text-slate-300 text-sm leading-relaxed">
              {footer?.description || "SINCE T20 SERVICES is the trusted local service discovery and lead platform for Visakhapatnam District, Anakapalli District, Alluri Seetha Ramaraju District, and Araku Valley. Connecting customers with verified local professionals quickly and transparently via Call & WhatsApp."}
            </p>

            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 border border-emerald-800/60 px-3 py-2 rounded-xl w-fit">
              <ShieldCheck className="w-4 h-4 text-nearfix-green" /> 100% Verified Local Network
            </div>
          </div>

          {/* Col 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Quick Links</h4>
            <ul className="space-y-2 text-sm text-slate-300">
              <li><Link to="/" className="hover:text-nearfix-orange transition-colors">Home</Link></li>
              <li><Link to="/categories" className="hover:text-nearfix-orange transition-colors">Categories</Link></li>
              <li><Link to="/services" className="hover:text-nearfix-orange transition-colors">Services Catalog</Link></li>
              <li><Link to="/about" className="hover:text-nearfix-orange transition-colors">About SINCE T20 SERVICES</Link></li>
              <li><Link to="/business-information" className="hover:text-nearfix-orange transition-colors">Business Information</Link></li>
              <li><Link to="/contact" className="hover:text-nearfix-orange transition-colors">Contact Us</Link></li>
              <li><Link to="/list-your-business" className="hover:text-nearfix-orange transition-colors">List Your Business</Link></li>
            </ul>
          </div>

          {/* Col 3: Popular Services & Tour Packages */}
          <div className="space-y-3">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Tour Packages & Services</h4>
            <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
              <li><Link to="/tour-packages/araku-valley-from-visakhapatnam" className="hover:text-amber-400 transition-colors">Araku Tour Package from Vizag</Link></li>
              <li><Link to="/tour-packages/vanajangi-sunrise-tour" className="hover:text-amber-400 transition-colors">Vanajangi Sunrise Tour Package</Link></li>
              <li><Link to="/tour-packages/maredumilli-nature-tour" className="hover:text-amber-400 transition-colors">Maredumilli Nature Tour</Link></li>
              <li><Link to="/tour-packages/deomali-trekking-camping" className="hover:text-amber-400 transition-colors">Deomali Trekking & Camping</Link></li>
              <li><Link to="/tour-packages/araku-vanajangi-deomali-combo" className="hover:text-amber-400 transition-colors">Araku + Vanajangi + Deomali</Link></li>
              <li><Link to="/professional-services/gst-business-services" className="hover:text-amber-400 transition-colors">GST & Business Services Paderu</Link></li>
              <li><Link to="/professional-services/itr-tax-filing" className="hover:text-amber-400 transition-colors">ITR Tax Filing in Paderu & AP</Link></li>
              <li><Link to="/professional-services/rta-rto-services" className="hover:text-amber-400 transition-colors">RTA & RTO Services in Paderu</Link></li>
              <li><Link to="/travel-services/hotel-booking" className="hover:text-amber-400 transition-colors">Hotels in Araku & Vanajangi</Link></li>
              <li><Link to="/travel-services/camping-tent-booking" className="hover:text-amber-400 transition-colors">Tent Camping in Vanajangi & Araku</Link></li>
              <li><Link to="/travel-services/taxi-car-rental" className="hover:text-amber-400 transition-colors">Vizag to Araku Taxi Booking</Link></li>
            </ul>
          </div>

          {/* Col 4: Official Contact & Address */}
          <div className="space-y-4">
            <h4 className="text-base font-bold text-white uppercase tracking-wider text-nearfix-orange">Contact Office</h4>
            
            <div className="space-y-3 text-sm text-slate-300">
              <a href={`tel:${footer?.phoneDisplay || NEARFIX_CONTACT.phoneDisplay}`} className="flex items-center gap-3 hover:text-nearfix-green transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-nearfix-green flex items-center justify-center flex-shrink-0">
                  <Phone className="w-4 h-4 fill-current" />
                </div>
                <span>Call: <strong>{footer?.phoneDisplay || NEARFIX_CONTACT.phoneDisplay}</strong></span>
              </a>

              <a href={NEARFIX_CONTACT.whatsappUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 hover:text-nearfix-whatsapp transition-colors">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-nearfix-whatsapp flex items-center justify-center flex-shrink-0">
                  <MessageCircle className="w-4 h-4 fill-current" />
                </div>
                <span>WhatsApp: <strong>{footer?.whatsappDisplay || NEARFIX_CONTACT.whatsappDisplay}</strong></span>
              </a>

              <a href={`mailto:${footer?.email || NEARFIX_CONTACT.email}`} className="flex items-center gap-3 hover:text-white transition-colors">
                <div className="w-8 h-8 rounded-lg bg-blue-500/20 text-sky-400 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="truncate">{footer?.email || NEARFIX_CONTACT.email}</span>
              </a>

              <div className="flex items-start gap-3 pt-2 text-xs text-slate-300">
                <MapPin className="w-4 h-4 text-nearfix-orange flex-shrink-0 mt-0.5" />
                <span>
                  {footer?.fullAddress || NEARFIX_CONTACT.fullAddress}
                </span>
              </div>
            </div>
          </div>

        </div>

        {/* Social Media Links Bar - Centered matching mobile reference design */}
        <div className="border-t border-slate-800/80 pt-8 pb-8 flex flex-col items-center justify-center text-center gap-4">
          <div className="text-xs sm:text-sm font-extrabold text-slate-300 uppercase tracking-widest text-center">
            TAP ICONS BELOW TO CONNECT WITH US DIRECTLY
          </div>

          <div className="flex items-center justify-center flex-wrap gap-4 sm:gap-5">
            {/* Facebook */}
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-slate-700/80"
              aria-label="Facebook"
              title="Connect on Facebook"
            >
              <Facebook className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* Instagram */}
            <a
              href={instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-gradient-to-tr hover:from-amber-500 hover:via-rose-500 hover:to-purple-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-slate-700/80"
              aria-label="Instagram"
              title="Connect on Instagram"
            >
              <Instagram className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* Threads */}
            <a
              href={threadsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 font-bold text-xs border border-slate-700/80"
              aria-label="Threads"
              title="Connect on Threads"
            >
              <span className="font-extrabold text-lg text-center leading-none">@</span>
            </a>

            {/* YouTube */}
            <a
              href={youtubeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-red-600 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-slate-700/80"
              aria-label="YouTube"
              title="Connect on YouTube"
            >
              <Youtube className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* X (Twitter) */}
            <a
              href={xUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-sky-500 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-slate-700/80"
              aria-label="X"
              title="Connect on X"
            >
              <Twitter className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>

            {/* LinkedIn */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-12 h-12 rounded-full bg-slate-800 hover:bg-blue-700 text-slate-300 hover:text-white flex items-center justify-center transition-all duration-300 shadow-lg hover:scale-110 border border-slate-700/80"
              aria-label="LinkedIn"
              title="Connect on LinkedIn"
            >
              <Linkedin className="w-5 h-5 sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-slate-800/80 pt-6 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-4">
          <p>{footer?.copyrightText || `© ${new Date().getFullYear()} SINCE T20 SERVICES. All rights reserved.`}</p>
          <div className="flex items-center gap-1 text-slate-400">
            Serving local communities in <span className="text-white font-semibold">Visakhapatnam, Anakapalli, Alluri Seetha Ramaraju & Araku Valley</span> <Heart className="w-3.5 h-3.5 text-red-500 fill-current inline ml-1" />
          </div>
        </div>
      </div>
    </footer>
  );
};
