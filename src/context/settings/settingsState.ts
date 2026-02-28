import type { SettingsType } from '@/src/context/settings/type/Settings.ts';

export const settingsState: SettingsType = {
  date: new Date().toLocaleString('fr-FR', {
    timeZone: 'Europe/Paris',
  }),
  lang: 'en',
  mode: 'system',
};
