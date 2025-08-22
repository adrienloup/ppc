export interface Business {
  clipPrice: number;
  clipPriceRef: number;
  marketing: number;
  marketingBonus: number;
  marketingCost: number;
  publicDemand: number;
}

export type BusinessDispatch =
  | { type: 'LOAD'; business: Business }
  | { type: 'INCREASE_CLIP_PRICE' }
  | { type: 'DECREASE_CLIP_PRICE' }
  | { type: 'BUY_MARKETING' }
  | { type: 'MARKETING_BONUS'; bonus: number };
