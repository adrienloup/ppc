import type { FactoryState } from '@/src/domains/factory/domain/factoryState.type.ts';
import type { NumberKeys } from '@/src/shared/types/numberKeys.type.ts';

interface AssetValue {
  asset: NumberKeys<FactoryState>;
  value: number;
}

export interface Feature {
  requirements?: AssetValue[] | string[];
  available: boolean;
}

export type FeatureState = Record<string, Feature>;
