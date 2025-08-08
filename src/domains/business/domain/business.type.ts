export interface Business {
  clipPrice: number;
  clipPriceRef: number;
  // funds: number;
  marketing: number;
  marketingBonus: number;
  marketingCost: number;
  publicDemand: number;
}

export type BusinessDispatch =
  | { type: 'LOAD'; business: Business }
  | { type: 'INCREASE_CLIP_PRICE' }
  | { type: 'DECREASE_CLIP_PRICE' }
  // | { type: 'INCREASE_FUNDS'; funds: number }
  // | { type: 'DECREASE_FUNDS'; funds: number }
  | { type: 'INCREASE_MARKETING'; marketingCost: number };
