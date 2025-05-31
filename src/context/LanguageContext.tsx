// import React, { createContext, useState, useContext, ReactNode } from 'react';

// type Language = 'en' | 'hi';

// interface LanguageContextType {
//   language: Language;
//   setLanguage: (language: Language) => void;
//   t: (key: string) => string;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// interface LanguageProviderProps {
//   children: ReactNode;
// }

// export const translations = {
//   en: {
//     home: 'Home',
//     politics: 'Politics',
//     national: 'National',
//     international: 'International',
//     business: 'Business',
//     sports: 'Sports',
//     entertainment: 'Entertainment',
//     technology: 'Technology',
//     lifestyle: 'Lifestyle',
//     education: 'Education',
//     auto: 'Auto',
//     video: 'Video',
//     search: 'Search...',
//     breakingNews: 'Breaking News:',
//     readMore: 'Read More',
//     live: 'Live',
//     latest: 'Latest News',
//     trending: 'Trending',
//     forYou: 'For You',
//     health: 'Health',
//     religion: 'Religion',
//     country: 'Country',
//     world: 'World',
//     liveTV: 'LIVE TV',
//   },
//   hi: {
//     home: 'होम',
//     politics: 'राजनीति',
//     national: 'देश',
//     international: 'विदेश',
//     business: 'व्यापार',
//     sports: 'खेल',
//     entertainment: 'मनोरंजन',
//     technology: 'तकनीकी',
//     lifestyle: 'जीवनशैली',
//     education: 'शिक्षा',
//     auto: 'ऑटो',
//     video: 'वीडियो',
//     search: 'खोजें...',
//     breakingNews: 'ब्रेकिंग न्यूज़:',
//     readMore: 'पूरी खबर पढ़ें',
//     live: 'लाइव',
//     latest: 'ताज़ा खबर',
//     trending: 'ट्रेंडिंग',
//     forYou: 'आपके लिए',
//     health: 'स्वास्थ्य',
//     religion: 'धार्मिक',
//     country: 'देश',
//     world: 'विदेश',
//     liveTV: 'लाइव टीवी',
//   }
// };

// export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
//   const [language, setLanguage] = useState<Language>('hi');

//   const t = (key: string): string => {
//     return translations[language][key as keyof typeof translations.en] || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage, t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = (): LanguageContextType => {
//   const context = useContext(LanguageContext);
//   if (context === undefined) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };


// import React, { createContext, useContext } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { RootState } from '../redux/store';
// import { setLanguage } from '../redux/slices/languageSlice';

// export const translations = {
//   en: {
//     home: 'Home',
//     politics: 'Politics',
//     national: 'National',
//     international: 'International',
//     business: 'Business',
//     sports: 'Sports',
//     entertainment: 'Entertainment',
//     technology: 'Technology',
//     lifestyle: 'Lifestyle',
//     education: 'Education',
//     auto: 'Auto',
//     video: 'Video',
//     search: 'Search...',
//     breakingNews: 'Breaking News:',
//     readMore: 'Read More',
//     live: 'Live',
//     latest: 'Latest News',
//     trending: 'Trending',
//     forYou: 'For You',
//     health: 'Health',
//     religion: 'Religion',
//     country: 'Country',
//     world: 'World',
//     liveTV: 'LIVE TV',
//   },
//   hi: {
//     home: 'होम',
//     politics: 'राजनीति',
//     national: 'देश',
//     international: 'विदेश',
//     business: 'व्यापार',
//     sports: 'खेल',
//     entertainment: 'मनोरंजन',
//     technology: 'तकनीकी',
//     lifestyle: 'जीवनशैली',
//     education: 'शिक्षा',
//     auto: 'ऑटो',
//     video: 'वीडियो',
//     search: 'खोजें...',
//     breakingNews: 'ब्रेकिंग न्यूज़:',
//     readMore: 'पूरी खबर पढ़ें',
//     live: 'लाइव',
//     latest: 'ताज़ा खबर',
//     trending: 'ट्रेंडिंग',
//     forYou: 'आपके लिए',
//     health: 'स्वास्थ्य',
//     religion: 'धार्मिक',
//     country: 'देश',
//     world: 'विदेश',
//     liveTV: 'लाइव टीवी',
//   },
// };

// interface LanguageContextType {
//   language: 'en' | 'hi';
//   setLanguage: (lang: 'en' | 'hi') => void;
//   t: (key: string) => string;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
//   const language = useSelector((state: RootState) => state.language.language);
//   const dispatch = useDispatch();

//   const t = (key: string): string => {
//     return translations[language][key as keyof typeof translations.en] || key;
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage: (lang) => dispatch(setLanguage(lang)), t }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = (): LanguageContextType => {
//   const context = useContext(LanguageContext);
//   if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
//   return context;
// };

// -------------------------------------

// import React, { createContext, useContext, useState, ReactNode } from 'react';
// import { useDispatch } from 'react-redux';
// import { setLanguage } from '../redux/slices/languageSlice';

// interface LanguageContextType {
//   language: 'en' | 'hi';
//   setLanguage: (lang: 'en' | 'hi') => void;
// }

// const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
//   const [language, setLanguageState] = useState<'en' | 'hi'>('en');
//   const dispatch = useDispatch();

//   const handleSetLanguage = (lang: 'en' | 'hi') => {
//     setLanguageState(lang);
//     dispatch(setLanguage(lang));
//   };

//   return (
//     <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
//       {children}
//     </LanguageContext.Provider>
//   );
// };

// export const useLanguage = () => {
//   const context = useContext(LanguageContext);
//   if (!context) {
//     throw new Error('useLanguage must be used within a LanguageProvider');
//   }
//   return context;
// };


// ======================

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { useDispatch } from 'react-redux';
import { setLanguage } from '../redux/slices/languageSlice';

interface LanguageContextType {
  language: 'en' | 'hi';
  setLanguage: (lang: 'en' | 'hi') => void;
}

const LanguageContext = React.createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<'en' | 'hi'>('en');
  const dispatch = useDispatch();

  const handleSetLanguage = (lang: 'en' | 'hi') => {
    setLanguageState(lang);
    dispatch(setLanguage(lang));
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};