import React, { useEffect, useState } from 'react';
import { MapPin, Navigation, ExternalLink, Phone, Mail } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';

export const MapSection: React.FC = () => {
  const [mapLoaded, setMapLoaded] = useState(false);

  useEffect(() => {
    // Dynamically initialize Leaflet map
    const mapDiv = document.getElementById('nearfix-interactive-map');
    if (!mapDiv) return;

    const L = (window as any).L;
    if (L && !(mapDiv as any)._leaflet_id) {
      try {
        const map = L.map('nearfix-interactive-map', {
          center: [NEARFIX_CONTACT.coordinates.lat, NEARFIX_CONTACT.coordinates.lng],
          zoom: 15,
          scrollWheelZoom: false,
        });

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; OpenStreetMap contributors'
        }).addTo(map);

        // Prominent RED Map Marker Pin (User requirement in image copy 4)
        const redIcon = L.divIcon({
          className: 'custom-red-leaflet-pin',
          html: `
            <div class="relative flex items-center justify-center">
              <div class="w-11 h-11 bg-red-600 rounded-full flex items-center justify-center text-white shadow-2xl ring-4 ring-white animate-bounce">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
              </div>
              <div class="absolute -bottom-1 w-6 h-2 bg-slate-900/40 rounded-full blur-xs"></div>
            </div>
          `,
          iconSize: [44, 44],
          iconAnchor: [22, 44],
        });

        const marker = L.marker([NEARFIX_CONTACT.coordinates.lat, NEARFIX_CONTACT.coordinates.lng], { icon: redIcon }).addTo(map);
        
        marker.bindPopup(`
          <div style="font-family: sans-serif; padding: 6px; text-align: center;">
            <b style="color: #0A2540; font-size: 14px;">NEARFIX HQ</b><br/>
            <span style="color: #dc2626; font-weight: bold; font-size: 12px;">🔴 Exact Business Location</span><br/>
            <span style="color: #475569; font-size: 11px;">Semon Residency, ZP Colony, Araku Valley</span>
          </div>
        `).openPopup();

        // Invalidate size on mount & window resize to fix mobile rendering glitch
        setTimeout(() => {
          map.invalidateSize();
          setMapLoaded(true);
        }, 200);

        window.addEventListener('resize', () => map.invalidateSize());
      } catch (err) {
        console.error('Leaflet load error', err);
      }
    }
  }, []);

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-card border border-slate-100 relative overflow-hidden">
      <div className="flex flex-col lg:flex-row items-start justify-between gap-8">
        
        {/* Left Side: Address & Location Info */}
        <div className="w-full lg:w-5/12 space-y-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-red-50 text-red-600 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
              <MapPin className="w-3.5 h-3.5 fill-current" /> Red Pin Marked Location
            </div>
            <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
              NEARFIX Business Location
            </h3>
            <p className="text-slate-600 text-sm mt-1">
              Marked with exact red pin point at Araku Valley main office.
            </p>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 border border-slate-200/80 space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-10 h-10 rounded-xl bg-red-600 text-white flex items-center justify-center flex-shrink-0 mt-0.5 shadow-md">
                <MapPin className="w-5 h-5 fill-current" />
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
            Open in Google Maps Navigation
            <ExternalLink className="w-4 h-4 text-slate-300 ml-auto" />
          </a>
        </div>

        {/* Right Side: Map Container with Red Marker & Embedded Google Maps fallback */}
        <div className="w-full lg:w-7/12 h-[360px] sm:h-[420px] rounded-2xl overflow-hidden shadow-inner border border-slate-200 relative bg-slate-100">
          
          {/* Leaflet interactive map */}
          <div id="nearfix-interactive-map" className="w-full h-full z-10" />

          {/* Embedded Google Maps iframe for 100% visual fallback guarantee on all mobile devices */}
          <iframe
            title="NEARFIX Araku Valley Map"
            src="https://maps.google.com/maps?q=18.3273,82.8812&z=15&output=embed"
            className="absolute inset-0 w-full h-full border-0 z-0 pointer-events-auto"
            allowFullScreen
            loading="lazy"
          />

          {/* Floating red marker badge */}
          <div className="absolute top-4 left-4 z-20 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-lg border border-slate-200 text-xs font-bold text-slate-900 flex items-center gap-2">
            <span className="w-3 h-3 rounded-full bg-red-600 animate-ping" />
            <span className="text-red-600 font-extrabold">🔴 NEARFIX Red Pin Marked HQ</span>
          </div>
        </div>

      </div>
    </div>
  );
};
