import type { AssetValue } from '@/src/shared/types/assetValue.type.ts';

export interface Feat {
  unlocked: boolean;
  requirement?: AssetValue | string;
}

export type Feature = Record<string, Feat>;
