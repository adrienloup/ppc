import type { Mode } from '@/src/domains/account/domain/mode.type.ts';

export interface AccState {
  mode: Mode;
  pause: boolean;
}

export type AccAction =
  | { type: 'LOAD'; state: AccState }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
