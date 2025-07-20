import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/shared/utils/translation.ts';
import { appTranslation } from '@/src/app/appTranslation.ts';
import { exploreTranslation } from '@/src/pages/explore/exploreTranslation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(appTranslation, exploreTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
