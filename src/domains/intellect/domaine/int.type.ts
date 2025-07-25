export interface Intellect {
  trust: number;
}

export type IntellectDispatch =
  | { type: 'LOAD'; intellect: Intellect }
  | { type: 'INCREASE_TRUST'; trust: number };
