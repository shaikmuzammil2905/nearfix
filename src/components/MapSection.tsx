import React, { useEffect } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

export const MapSection: React.FC = () => {
  useEffect(() => {
    // Dynamically initialize Leaflet map if div exists
    const mapDiv = document.getElementById('nearfix-interactive-map');
    if (!mapDiv || (mapDiv as any)._leaflet_id) return;

    // Check if L is loaded from script or import
    const L = (window as any).L;
    if (L) {
      const map = L.map('nearfix-interactive-map', {
        center: [NEARFIX_CONTACT.coordinates.lat, NEARFIX_CONTACT.coordinates.lng],
        zoom: 15,
        scrollWheelZoom: false,
      });

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(map);

      // Custom marker icon
      const customIcon = L.divIcon({
        className: 'custom-leaflet-pin',
        html: `
          <div class="relative flex items-center justify-center">
            <div class="w-10 h-10 bg-nearfix-orange rounded-full flex items-center justify-center text-white shadow-xl ring-4 ring-white animate-bounce">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
          </div>
        `,
        iconSize: [40, 40],
        iconAnchor: [20, 40],
      });

      const marker = L.marker([NEARFIX_CONTACT.coordinates.lat, NEARFIX_CONTACT.coordinates.lng], { icon: customIcon }).addTo(map);
      marker.bindPopup(`
        <div style="font-family: sans-serif; padding: 4px;">
          <b style="color: #0A2540; font-size: 14px;">NEARFIX Main Office</b><br/>
          <span style="color: #475569; font-size: 12px;">Semon Residency, ZP Colony</span><br/>
          <span style="color: #FF4500; font-size: 12px; font-weight: bold;">Araku Valley, AP - 531151</span>
        </div>
      `).openPopup();
    }
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left Side: Address Details */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-50 text-nearfix-blue rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 text-nearfix-orange" /> Verified Business Location
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              NEARFIX Office Location
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Visit our headquarters or contact us for local service inquiries in Araku Valley.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-nearfix-blue text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <MapPin className="w-5 h-5 text-nearfix-orange" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-slate-900">Registered Office Address</h4>
                <p className="text-sm text-slate-600 leading-relaxed mt-1">
                  Semon Residency, Second Floor, Room No 3,<br />
                  ZP Colony, Near Govt Hospital,<br />
                  Araku Valley, Alluri Seetha Ramaraju District,<br />
                  Andhra Pradesh - 531151, India
                </p>
              </div>
            </div>

            <div className="border-t border-slate-200 pt-3 flex flex-wrap gap-4 text-xs font-semibold text-slate-700">
              <a href={NEARFIX_CONTACT.phoneTel} className="flex items-center gap-1.5 hover:text-nearfix-green transition-colors">
                <Phone className="w-4 h-4 text-nearfix-green" /> {NEARFIX_CONTACT.phoneDisplay}
              </a>
              <a href={`mailto:${NEARFIX_CONTACT.email}`} className="flex items-center gap-1.5 hover:text-nearfix-blue transition-colors">
                <Mail className="w-4 h-4 text-nearfix-blue" /> {NEARFIX_CONTACT.email}
              </a>
            </div>
          </div>

          <a
            href={NEARFIX_CONTACT.googleMapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 w-full py-3.5 px-6 bg-nearfix-blue hover:bg-nearfix-navy text-white font-bold text-sm rounded-xl shadow-md transition-all hover:scale-[1.01]"
          >
            <Navigation className="w-4 h-4 text-nearfix-orange" />
            Open in Google Maps
            <ExternalLink className="w-4 h-4 text-slate-300 ml-auto" />
          </a>
        </div>

        {/* Right Side: Map Container */}
        <div className="w-full lg:w-7/12 h-[340px] sm:h-[400px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative bg-slate-100">
          <div id="nearfix-interactive-map" className="w-full h-full" />
          
          {/* Floating location badge overlay */}
          <div className="absolute top-4 left-4 z-10 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-bold text-slate-800 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-nearfix-orange animate-ping" />
            Araku Valley HQ
          </div>
        </div>
      </div>
    </div>
  );
};
