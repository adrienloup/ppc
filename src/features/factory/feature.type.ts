import type { NumberKeys } from '@/src/shared/types/numberKeys.type.ts';
import type { FactoryState } from '@/src/features/factory/factory.type.ts';

interface AssetValue {
  asset: NumberKeys<FactoryState>;
  value: number;
}

export interface Feature {
  requirements?: AssetValue[] | string[];
  available: boolean;
}

export type FeatureState = Record<string, Feature>;
