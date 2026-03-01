import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { appTranslation } from '@/src/app/translation.ts';
import { exploreTranslation } from '@/src/page/explore/exploreTranslation.ts';
import { factoryTranslation } from '@/src/page/factory/translation.ts';
import { profileTranslation } from '@/src/page/profile/profileTranslation.ts';
import { storeTranslation } from '@/src/page/store/translation.ts';
import { translation } from '@/src/shared/utils/translation.ts';

i18n
  .use(initReactI18next)
  .init({
    resources: translation(appTranslation, exploreTranslation, factoryTranslation, profileTranslation, storeTranslation),
    fallbackLng: 'en',
    interpolation: {
      escapeValue: false,
    },
  })
  .then();

export default i18n;
