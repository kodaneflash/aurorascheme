'use client';

import { useEffect } from 'react';
import Script from 'next/script';

declare global {
  interface Window {
    Senja?: {
      init: () => void;
    };
  }
}

export function SenjaScript() {
  useEffect(() => {
    // Initialize Senja if it's already loaded
    if (window.Senja) {
      window.Senja.init();
    }

    return () => {
      // Clean up any existing Senja instances
      if (window.Senja) {
        delete window.Senja;
      }
    };
  }, []);

  return (
    <Script
      src="https://static.senja.io/dist/platform.js"
      strategy="lazyOnload"
      id="senja-script"
      onLoad={() => {
        if (window.Senja) {
          window.Senja.init();
        }
      }}
    />
  );
} 