import { type Dispatch, createContext } from 'react';
import type { Trade, TradeDispatch } from '@/src/domains/trade/domain/trade.type.ts';

export const TradeContext = createContext<Trade | undefined>(undefined);
export const TradeDisContext = createContext<Dispatch<TradeDispatch> | undefined>(undefined);
