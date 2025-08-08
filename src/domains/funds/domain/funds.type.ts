export interface Funds {
  funds: number;
}

export type FundsDispatch =
  | { type: 'LOAD'; funds: Funds }
  | { type: 'INCREASE_FUNDS'; price: number }
  | { type: 'DECREASE_FUNDS'; price: number };
