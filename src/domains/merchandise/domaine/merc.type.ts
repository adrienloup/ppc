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
  effect: MerchandiseAction | AssetValue[] | string[];
  requirement: AssetValue | string;
}

export type MerchandiseState = Merchandise[];

export type MerchandiseAction = { type: 'BUY_MERCHANDISE'; merchandise: string } | { type: 'ALLOCATE_TRUST' };
