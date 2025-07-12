export interface AccountState {
  play: boolean;
}

export type AccountAction = { type: 'INITIALIZE'; state: AccountState } | { type: 'TOGGLE_PLAY' };
