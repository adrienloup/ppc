import type { LangType } from '@/src/context/settings/type/Lang.ts';
import type { ModeType } from '@/src/context/settings/type/Mode.ts';

export interface SettingsType {
  date: string;
  lang: LangType;
  mode: ModeType;
  start: boolean;
  pause: boolean;
}

export type SettingsDispatchType =
  | { type: 'LOAD'; settings: SettingsType }
  | { type: 'SET_LANG'; lang: LangType }
  | { type: 'SET_MODE'; mode: ModeType }
  | { type: 'SET_START' }
  | { type: 'SET_PAUSE' };
