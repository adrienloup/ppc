import { initReactI18next } from 'react-i18next';
import { translation } from '@/src/common/shared/utils/translation.ts';
import { appTranslation } from '@/src/common/app/appTranslation.ts';
import { dashboardTranslation } from '@/src/pages/dashboard/dashboardTranslation.ts';
import { profileTranslation } from '@/src/pages/profile/profileTranslation.ts';
import { shopTranslation } from '@/src/pages/shop/shopTranslation.ts';
import i18n from 'i18next';

i18n.use(initReactI18next).init({
  resources: translation(appTranslation, dashboardTranslation, profileTranslation, shopTranslation),
  fallbackLng: 'en',
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
