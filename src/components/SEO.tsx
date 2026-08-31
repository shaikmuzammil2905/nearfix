import React, { useEffect } from 'react';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  schema?: object | object[];
}

export const SEO: React.FC<SEOProps> = ({
  title = "Since T20 Services | Online & Local Services in Andhra Pradesh",
  description = "Since T20 Services connects customers with trusted local and professional service providers for GST, ITR, Udyam, RTA, Labour, home services, vehicle services, travel, construction, real estate and more across Andhra Pradesh.",
  keywords = "Since T20 Services, Online Services in Andhra Pradesh, Local Services in Andhra Pradesh, Business Services in Andhra Pradesh, Services in Paderu, GST Services in Paderu, RTA Services in Paderu, ITR Filing Services, Udyam Registration, Home Services in Paderu, Taxi Services in Araku Valley, Araku Valley Tour Packages, Vanajangi Sunrise, Maredumilli Resorts, Deomali Camping, Visakhapatnam Tourism, Onor delivery app",
  canonical,
  ogImage = "https://sincet20services.com/logo.png",
  ogType = "website",
  schema
}) => {
  useEffect(() => {
    // 1. Update Title
    document.title = title;

    // 2. Helper to set/create meta tag
    const setMetaTag = (attrName: string, attrVal: string, contentVal: string) => {
      let element = document.querySelector(`meta[${attrName}="${attrVal}"]`);
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attrName, attrVal);
        document.head.appendChild(element);
      }
      element.setAttribute('content', contentVal);
    };

    // Description & Keywords
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', keywords);

    // OpenGraph
    setMetaTag('property', 'og:title', title);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', ogImage);
    if (canonical) {
      setMetaTag('property', 'og:url', canonical);
    }

    // Twitter Card
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', title);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', ogImage);

    // Canonical link
    let canonicalLink = document.querySelector('link[rel="canonical"]');
    if (canonical) {
      if (!canonicalLink) {
        canonicalLink = document.createElement('link');
        canonicalLink.setAttribute('rel', 'canonical');
        document.head.appendChild(canonicalLink);
      }
      canonicalLink.setAttribute('href', canonical);
    }

    // JSON-LD Schema
    let schemaScript = document.querySelector('#dynamic-jsonld-schema');
    if (schemaScript) {
      schemaScript.remove();
    }

    if (schema) {
      const script = document.createElement('script');
      script.id = 'dynamic-jsonld-schema';
      script.type = 'application/ld+json';
      script.text = JSON.stringify(schema);
      document.head.appendChild(script);
    }

    return () => {
      const existingScript = document.querySelector('#dynamic-jsonld-schema');
      if (existingScript) existingScript.remove();
    };
  }, [title, description, keywords, canonical, ogImage, ogType, schema]);

  return null;
};
