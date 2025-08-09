export interface Funds {
  funds: number;
  fundsPerSecond: number;
}

export type FundsDispatch =
  | { type: 'LOAD'; funds: Funds }
  | { type: 'INCREASE_FUNDS'; funds: number; fundsPerSecond: number }
  | { type: 'DECREASE_FUNDS'; cost: number };
