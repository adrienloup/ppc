import type { Language } from '@/src/features/profile/domain/Language.ts';
import type { Mode } from '@/src/features/profile/domain/Mode.ts';
import type { Theme } from '@/src/features/profile/domain/Theme.ts';

export interface Profile {
  language: Language;
  mode: Mode;
  theme: Theme;
  isPlay: boolean;
}

export type ProfileDispatch =
  | { type: 'INITIALIZE'; state: Profile }
  | { type: 'SET_LANGUAGE'; language: Language }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'SET_PLAY' };
