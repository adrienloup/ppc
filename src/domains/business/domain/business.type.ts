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
  | { type: 'INCREASE_MARKETING'; cost: number };
