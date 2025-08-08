import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { appTranslation } from '@/src/app/app.translation.ts';
import { exploreTranslation } from '@/src/pages/explore/explore.translation.ts';
import { factoryTranslation } from '@/src/pages/factory/factory.translation.ts';
import { storeTranslation } from '@/src/pages/store/store.translation.ts';
import { translation } from '@/src/shared/utils/translation.ts';

i18n.use(initReactI18next).init({
  resources: translation(appTranslation, exploreTranslation, storeTranslation, factoryTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
