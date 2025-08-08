import type { Lang } from '@/src/domains/profile/domain/lang.type.ts';
import type { Mode } from '@/src/domains/profile/domain/mode.type.ts';
import type { Theme } from '@/src/domains/profile/domain/theme.type.ts';

export interface Profile {
  date: string;
  lang: Lang;
  mode: Mode;
  theme: Theme;
  pause: boolean;
}

export type ProfileDispatch =
  | { type: 'LOAD'; profile: Profile }
  | { type: 'SET_LANG'; lang: Lang }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_THEME'; theme: Theme }
  | { type: 'SET_PLAY_PAUSE' };
