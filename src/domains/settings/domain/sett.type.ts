import type { Mode } from '@/src/domains/settings/domain/mode.type.ts';

export interface SettState {
  mode: Mode;
  pause: boolean;
}

export type SettAction =
  | { type: 'LOAD'; state: SettState }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
