
import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Language } from '../types/translations';

const LanguageToggle: React.FC = () => {
  const { language, setLanguage } = useLanguage();

  const handleLanguageChange = (newLanguage: Language) => {
    setLanguage(newLanguage);
  };

  return (
    <div className="language-toggle">
      <button
        onClick={() => handleLanguageChange('en')}
        className={`lang-btn ${language === 'en' ? 'active' : ''}`}
      >
        EN
      </button>
      <button
        onClick={() => handleLanguageChange('fr')}
        className={`lang-btn ${language === 'fr' ? 'active' : ''}`}
      >
        FR
      </button>
    </div>
  );
};

export default LanguageToggle;
