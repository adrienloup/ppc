interface AssetValue {
  asset: string;
  value: number;
}

interface Merchandise {
  title: string;
  category: string;
  available: boolean;
  quantity: number;
  cost: AssetValue;
  effect: MerchandisingAction | AssetValue[] | string[];
  requirement: AssetValue | string;
}

export type MerchandisingState = Merchandise[];

export type MerchandisingAction =
  | { type: 'BUY_MERCHANDISE'; merchandise: string }
  | { type: 'ALLOCATE_TRUST' };
