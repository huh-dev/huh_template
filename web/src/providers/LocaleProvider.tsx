import React, { createContext, useContext, useEffect, useState } from 'react';
import { Translations } from '../types/locale';
import { fetchNui } from '../utils/fetchNui';
import { isEnvBrowser } from '../utils/misc';

interface LocaleContextValue {
  translations: Translations;
  locale: string;
}

const defaultTranslations: Translations = {
  ui_heading: "garage",
  ui_back: "Back"
};

const LocaleContext = createContext<LocaleContextValue | null>(null);

export const useLocale = () => {
  const context = useContext(LocaleContext);
  if (!context) {
    throw new Error('useLocale must be used within a LocaleProvider');
  }
  return context;
};

interface LocaleProviderProps {
  children: React.ReactNode;
}

export const LocaleProvider: React.FC<LocaleProviderProps> = ({ children }) => {
  const [locale, setLocale] = useState<string>('en');
  const [translations, setTranslations] = useState<Translations>(defaultTranslations);

  useEffect(() => {
    const getLocale = async () => {
      if (!isEnvBrowser()) {
        try {
          const configLocale = await fetchNui<string>('getLocale');
          if (configLocale) {
            setLocale(configLocale);
          }
        } catch (error) {
          console.error('Failed to get locale from config:', error);
        }
      }
    };

    const loadTranslations = async () => {
      try {
        const resourceName = (window as any).GetParentResourceName?.() || '';
        const baseUrl = isEnvBrowser() ? '..' : `https://cfx-nui-${resourceName}`;
        
        const response = await fetch(`${baseUrl}/locales/${locale}.json`);
        if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
        
        const text = await response.text(); // Get the raw text first
        if (!text) throw new Error('Empty response');
        
        try {
          const data = JSON.parse(text); // Parse it manually
          if (Object.keys(data).length === 0) throw new Error('Empty translations object');
          
          setTranslations(data);
        } catch (parseError) {
          console.error('JSON Parse Error:', parseError, 'Raw text:', text);
          throw parseError;
        }
      } catch (error) {
        console.error('Failed to load translations:', error);
      }
    };

    getLocale();
    loadTranslations();
  }, [locale]);

  return (
    <LocaleContext.Provider value={{ translations, locale }}>
      {children}
    </LocaleContext.Provider>
  );
}; 