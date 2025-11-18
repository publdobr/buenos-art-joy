import React, { createContext, useState, useContext, useEffect } from 'react';
// 1. Импортируем русский язык статически, чтобы он был доступен сразу
import ruTranslations from '../locales/ru';

// 2. Исправили 'es-AR' на 'es', чтобы соответствовало названию файла src/locales/es.ts
type Language = 'es' | 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider');
  }
  return context;
};

interface LanguageProviderProps {
  children: React.ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({ children }) => {
  // 3. Устанавливаем 'ru' как дефолтное значение
  const [language, setLanguageState] = useState<Language>(() => {
    const saved = localStorage.getItem('language');
    // Проверяем валидность сохраненного языка, иначе возвращаем 'ru'
    if (saved === 'es' || saved === 'en' || saved === 'ru') {
      return saved;
    }
    return 'ru';
  });

  // 4. Инициализируем состояние сразу русскими переводами
  // Это решает проблему, когда при загрузке все текстовые поля были пустыми
  const [translations, setTranslations] = useState<Record<string, string>>(ruTranslations);

  useEffect(() => {
    const loadTranslations = async () => {
      // Если выбран русский, и он уже загружен (начальное состояние), можно пропустить
      // Но для простоты оставим перезагрузку, она быстрая
      try {
        const module = await import(`../locales/${language}.ts`);
        setTranslations(module.default);
      } catch (error) {
        console.error(`Failed to load translations for ${language}:`, error);
        // Если не удалось загрузить выбранный язык, откатываемся на русский
        setTranslations(ruTranslations);
      }
    };

    loadTranslations();
  }, [language]);

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('language', lang);
  };

  const t = (key: string): string => {
    return translations[key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};
