import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Merch {
  category: string;
  cost: AssetValue;
  effect: MerchandiseDispatch | AssetValue[] | string[];
  unlocked: boolean;
  purchased: boolean;
  quantity: number;
  requirement?: AssetValue | string;
}

export type Merchandise = Record<string, Merch>;

export type MerchandiseDispatch =
  | { type: 'LOAD'; merchandise: Merchandise }
  | { type: 'MERCHANDISE'; merchandise: string }
  | { type: 'AUTO_WIRE' } // @TODO
  | { type: 'ALLOCATE_TRUST' }; // @TODO
