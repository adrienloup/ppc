import type { Language } from '@/src/features/profile/domain/Language.ts';
import type { Mode } from '@/src/features/profile/domain/Mode.ts';
import type { Theme } from '@/src/features/profile/domain/Theme.ts';

export interface Profile {
  user: string;
  language: Language;
  mode: Mode;
  theme: Theme;
  isPlay: boolean;
}

export type ProfileDispatch =
  | { type: 'SET_USER'; user: string }
  | { type: 'SET_LANGUAGE'; language: string }
  | { type: 'SET_MODE'; mode: string }
  | { type: 'SET_THEME'; theme: string }
  | { type: 'SET_PLAY' };
