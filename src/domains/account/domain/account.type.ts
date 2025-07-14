import type { Mode } from '@/src/domains/account/domain/mode.type.ts';

export interface AccountState {
  mode: Mode;
  pause: boolean;
}

export type AccountAction =
  | { type: 'LOAD'; state: AccountState }
  | { type: 'SET_MODE'; mode: Mode }
  | { type: 'SET_PLAY_PAUSE' };
