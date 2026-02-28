import type { LangType } from '@/src/context/settings/type/Lang.ts';
import type { ModeType } from '@/src/context/settings/type/Mode.ts';

export interface SettingsType {
  date: string;
  lang: LangType;
  mode: ModeType;
}

export type SettingsDispatchType = { type: 'SET_LANG'; lang: LangType } | { type: 'SET_MODE'; mode: ModeType };
