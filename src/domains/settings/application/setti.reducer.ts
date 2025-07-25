import type { Settings, SettingsDispatch } from '@/src/domains/settings/domain/setti.type.ts';

export const settingsReducer = (state: Settings, action: SettingsDispatch): Settings => {
  switch (action.type) {
    case 'LOAD':
      return action.settings;
    case 'SET_MODE':
      return { ...state, mode: action.mode };
    case 'SET_PLAY_PAUSE':
      return { ...state, pause: !state.pause };
    default:
      return state;
  }
};
