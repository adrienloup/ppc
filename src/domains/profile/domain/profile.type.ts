import type { Lang } from '@/src/domains/profile/domain/lang.type.ts';
import type { Mode } from '@/src/domains/profile/domain/mode.type.ts';

export interface Profile {
  date: string;
  lang: Lang;
  mode: Mode;
  pause: boolean;
}

export type ProfileDispatch =
  | { type: 'LOAD'; profile: Profile }
  | { type: 'SET_LANG'; lang: Lang }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
