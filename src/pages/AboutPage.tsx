import React from 'react';
import { ShieldCheck, Target, Eye, ArrowRight } from 'lucide-react';
import { NEARFIX_CONTACT } from '../data/contactInfo';
import { Link } from 'react-router-dom';
import { BackButton } from '../components/BackButton';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 space-y-6">
      
      {/* Top Bar with Back Button */}
      <div className="flex items-center justify-between">
        <BackButton label="Back to Home" fallbackPath="/" />
        <span className="text-xs font-semibold text-slate-500">About NEARFIX</span>
      </div>

      {/* Banner */}
      <div className="bg-gradient-to-r from-nearfix-blue via-slate-900 to-nearfix-navy text-white rounded-3xl p-8 sm:p-12 shadow-xl text-center space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 text-xs font-bold text-nearfix-orange uppercase tracking-wider">
          <ShieldCheck className="w-4 h-4" /> About NEARFIX
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight">
          Connecting You with Local Experts
        </h1>
        <p className="text-slate-300 text-base max-w-2xl mx-auto leading-relaxed">
          NEARFIX is Araku Valley's leading local service discovery and lead generation platform designed to make finding reliable help effortless and transparent.
        </p>
      </div>

      {/* Vision & Mission Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        
        {/* Vision Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card space-y-4 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-blue-50 text-nearfix-blue flex items-center justify-center font-bold shadow-xs">
            <Eye className="w-8 h-8 text-nearfix-orange" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Our Vision</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {NEARFIX_CONTACT.vision}
          </p>
        </div>

        {/* Mission Card */}
        <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-card space-y-4 relative overflow-hidden">
          <div className="w-14 h-14 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center font-bold shadow-xs">
            <Target className="w-8 h-8 text-nearfix-green" />
          </div>
          <h2 className="text-2xl font-extrabold text-slate-900">Our Mission</h2>
          <p className="text-slate-600 text-base leading-relaxed">
            {NEARFIX_CONTACT.mission}
          </p>
        </div>

      </div>

      {/* Core Values Section */}
      <div className="space-y-6">
        <div className="text-center max-w-xl mx-auto">
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            Our Core Values
          </h2>
          <p className="text-slate-500 text-sm mt-1">The principles that guide every connection we make.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {NEARFIX_CONTACT.coreValues.map((val) => (
            <div
              key={val.id}
              className="bg-white rounded-3xl p-6 border border-slate-100 shadow-card hover:shadow-cardHover transition-all space-y-3"
            >
              <div className="text-3xl mb-2">{val.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{val.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed">{val.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Local Community Support */}
      <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-12 flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="space-y-4 max-w-xl">
          <span className="text-xs font-bold text-nearfix-orange uppercase tracking-wider">Local First Initiative</span>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight">Empowering Araku Businesses & Professionals</h2>
          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            We believe in strengthening our local economy. By connecting residents and tourists with verified local service providers, we create sustainable opportunities for local businesses and independent technicians.
          </p>
        </div>

        <Link
          to="/list-your-business"
          className="py-4 px-8 bg-nearfix-orange hover:bg-nearfix-orangeHover text-white font-extrabold text-sm rounded-2xl shadow-lg transition-all whitespace-nowrap"
        >
          Join as a Local Provider <ArrowRight className="w-4 h-4 inline ml-1" />
        </Link>
      </div>

    </div>
  );
};
