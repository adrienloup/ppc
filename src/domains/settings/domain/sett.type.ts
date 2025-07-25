import type { Mode } from '@/src/domains/settings/domain/mode.type.ts';

export interface Settings {
  mode: Mode;
  pause: boolean;
}

export type SettingsDispatch =
  | { type: 'LOAD'; settings: Settings }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
