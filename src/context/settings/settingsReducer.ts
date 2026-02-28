import type { SettingsDispatchType, SettingsType } from '@/src/context/settings/type/Settings.ts';

export const settingsReducer = (state: SettingsType, action: SettingsDispatchType): SettingsType => {
  switch (action.type) {
    case 'LOAD':
      return action.settings;
    case 'SET_LANG':
      return { ...state, lang: action.lang };
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    default:
      return state;
  }
};
