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
  | { type: 'LANG'; lang: Lang }
  | { type: 'MODE'; mode: Mode }
  | { type: 'THEME'; theme: Theme }
  | { type: 'PLAY_PAUSE' };
