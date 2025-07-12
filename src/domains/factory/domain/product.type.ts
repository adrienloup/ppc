import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { FactoryAction } from '@/src/domains/factory/domain/factoryAction.type.ts';
import type { NumberKeys } from '@/src/shared/types/numberKeys.type.ts';

interface AssetValue {
  asset: NumberKeys<FactoryState>;
  value: number;
}

export interface Product {
  requirements?: AssetValue[] | string[];
  effects: FactoryAction | AssetValue[] | string[];
  cost: AssetValue[];
  category: string;
  quantity: number;
  available: boolean;
}

export type ProductState = Record<string, Product>;
