import type { LangType } from '@/src/domains/profile/application/lang.type.ts';
import type { ModeType } from '@/src/domains/profile/application/mode.type.ts';
import type { ThemeType } from '@/src/domains/profile/application/theme.type.ts';

export interface ProfileType {
  date: string;
  lang: LangType;
  mode: ModeType;
  theme: ThemeType;
}

export type ProfileDispatchType =
  | { type: 'SET_LANG'; lang: LangType }
  | { type: 'SET_MODE'; mode: ModeType }
  | { type: 'SET_THEME'; theme: ThemeType };
