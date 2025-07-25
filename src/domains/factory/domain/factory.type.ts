import type { Trade } from '@/src/domains/trade/domaine/trade.type.ts';
import type { Prod } from '@/src/domains/production/domain/prod.type.ts';

export interface Factory {
  trade: Trade;
  prod: Prod;
}
