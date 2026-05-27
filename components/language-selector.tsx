"use client";

import { useEffect, useState } from "react";

declare global {
  interface Window {
    googleTranslateElementInit: () => void;
    google: any;
  }
}

function setGoogleTranslateCookie(lang: string) {
  // Google Translate uses this cookie format: /source/target
  const cookieValue = lang === "en" ? "/en/en" : "/en/id";
  // Set cookie for current domain
  document.cookie = `googtrans=${cookieValue}; path=/`;
  document.cookie = `googtrans=${cookieValue}; domain=${window.location.hostname}; path=/`;
}

function getCurrentLangFromCookie(): string {
  const cookies = document.cookie.split(";");
  for (const cookie of cookies) {
    const [key, value] = cookie.trim().split("=");
    if (key === "googtrans" && value) {
      return value.includes("/id") ? "id" : "en";
    }
  }
  return "en";
}

export default function LanguageSelector() {
  const [currentLang, setCurrentLang] = useState("en");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Read current language from cookie
    setCurrentLang(getCurrentLangFromCookie());

    // Load Google Translate script if not already loaded
    if (!document.getElementById("google-translate-script")) {
      window.googleTranslateElementInit = () => {
        if (window.google?.translate) {
          new window.google.translate.TranslateElement(
            {
              pageLanguage: "en",
              includedLanguages: "en,id",
              autoDisplay: false,
            },
            "google_translate_element"
          );
        }
      };

      const script = document.createElement("script");
      script.id = "google-translate-script";
      script.src =
        "https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit";
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  const switchLanguage = (lang: string) => {
    setCurrentLang(lang);
    setGoogleTranslateCookie(lang);
    // Reload page so Google Translate picks up the cookie
    window.location.reload();
  };

  if (!mounted) {
    return (
      <div className="inline-flex items-center rounded-lg border border-border overflow-hidden h-[30px] w-[80px]" />
    );
  }

  return (
    <>
      {/* Hidden Google Translate container */}
      <div id="google_translate_element" style={{ display: "none" }} />

      {/* Language buttons */}
      <div className="inline-flex items-center rounded-lg border border-border bg-background overflow-hidden">
        <button
          type="button"
          onClick={() => switchLanguage("en")}
          className={`px-3 py-1.5 text-xs font-medium transition-colors ${
            currentLang === "en"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          EN
        </button>
        <div className="w-px h-4 bg-border" />
        <button
          type="button"
          onClick={() => switchLanguage("id")}
          className={`px-3 py-1.5 text-xs font-medium transition-colors ${
            currentLang === "id"
              ? "bg-foreground text-background"
              : "text-muted-foreground hover:text-foreground hover:bg-secondary"
          }`}
        >
          ID
        </button>
      </div>
    </>
  );
}
