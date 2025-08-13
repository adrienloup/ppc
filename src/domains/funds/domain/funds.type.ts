export interface Funds {
  funds: number;
  fundsPerSecond: number;
}

export type FundsDispatch =
  | { type: 'LOAD'; funds: Funds }
  | { type: 'FUNDS_PER_SECOND'; fundsPerSecond: number }
  | { type: 'INCREASE_FUNDS'; funds: number }
  | { type: 'DECREASE_FUNDS'; funds: number };
