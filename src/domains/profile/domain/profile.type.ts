import type { Mode } from '@/src/domains/profile/domain/mode.type.ts';

export interface Profile {
  mode: Mode;
  pause: boolean;
}

export type ProfileDispatch =
  | { type: 'LOAD'; profile: Profile }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
