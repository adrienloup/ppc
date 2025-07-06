import type { FactoryAction, FactoryState } from '@/src/features/factory/factory.type.ts';
import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Product {
  effect?: FactoryAction | AssetValue<FactoryState>[] | string[];
  requirement?: AssetValue<FactoryState>[] | string[];
  cost?: AssetValue<FactoryState>[];
  category?: string;
  quantity?: number;
  available: boolean;
}

export type ProductState = Record<string, Product>;
