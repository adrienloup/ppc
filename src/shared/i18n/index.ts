import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
// import { translation } from '@/src/shared/utils/translation.ts';

i18n.use(initReactI18next).init({
  // resources: translation(appTranslation, exploreTranslation, storeTranslation, factoryTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
