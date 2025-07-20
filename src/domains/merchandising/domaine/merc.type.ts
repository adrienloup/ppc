interface AssetValue {
  asset: string;
  value: number;
}

export interface Merchandise {
  category: string;
  cost: AssetValue;
  effect: MercAction | AssetValue[] | string[];
  available: boolean;
  quantity: number;
  requirement?: AssetValue | string;
}

export type MercState = Record<string, Merchandise>;

export type MercAction =
  | { type: 'LOAD'; state: MercState }
  | { type: 'BUY_MERCHANDISE'; merchandise: string }
  | { type: 'BUY_AUTO_WIRE' }
  | { type: 'ALLOCATE_TRUST' };
