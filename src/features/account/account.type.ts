export interface AccountState {
  pause: boolean;
}

export type AccountAction = { type: 'INITIALIZE'; state: AccountState } | { type: 'TOGGLE_PAUSE' };
