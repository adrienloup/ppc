import type { FactoryState } from '@/src/features/factory/factory.type.ts';
import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Feature {
  requirement?: AssetValue<FactoryState>[] | string[];
  enabled: boolean;
  active: boolean;
}

export type FeatureState = Record<string, Feature>;
