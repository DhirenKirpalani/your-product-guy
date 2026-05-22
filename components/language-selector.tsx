"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    
    // Initialize Google Translate
    window.googleTranslateElementInit = function() {
      new window.google.translate.TranslateElement(
        {
          pageLanguage: 'en',
          includedLanguages: 'en,id',
          layout: window.google.translate.TranslateElement.InlineLayout.SIMPLE,
        },
        'google_translate_element'
      );
    };

    // Add Google Translate script if not already added
    if (!document.querySelector('script[src*="translate.google.com"]')) {
      const script = document.createElement("script");
      script.src = "//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.head.appendChild(script);
    } else {
      // If script already exists, just initialize
      if (window.google && window.google.translate) {
        window.googleTranslateElementInit();
      }
    }
  }, []);

  const changeLanguage = (lang: string) => {
    setCurrentLang(lang);
    
    // Wait for Google Translate to be ready
    const checkAndTranslate = () => {
      const selectElement = document.querySelector('.goog-te-combo') as HTMLSelectElement;
      if (selectElement) {
        selectElement.value = lang;
        selectElement.dispatchEvent(new Event('change'));
      } else {
        // Retry after a short delay
        setTimeout(checkAndTranslate, 100);
      }
    };
    
    checkAndTranslate();
  };

  if (!mounted) {
    return (
      <div className="inline-flex items-center gap-2 rounded-lg border border-border p-2 w-[100px] h-[40px]" />
    );
  }

  return (
    <div className="relative flex items-center gap-2 z-50">
      {/* Hidden Google Translate Element */}
      <div id="google_translate_element" className="hidden"></div>
      
      {/* Custom Language Selector */}
      <div className="inline-flex items-center gap-0 rounded-lg border border-border bg-background overflow-hidden">
        <button
          type="button"
          onClick={() => changeLanguage('en')}
          className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
            currentLang === 'en'
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          EN
        </button>
        <div className="w-px h-4 bg-border"></div>
        <button
          type="button"
          onClick={() => changeLanguage('id')}
          className={`px-3 py-1.5 text-xs font-medium transition-all cursor-pointer ${
            currentLang === 'id'
              ? 'bg-foreground text-background'
              : 'text-muted-foreground hover:text-foreground hover:bg-secondary'
          }`}
        >
          ID
        </button>
      </div>
    </div>
  );
}
