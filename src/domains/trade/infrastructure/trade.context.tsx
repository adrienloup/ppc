import { type Dispatch, createContext } from 'react';
import type { TradeDispatch, Trade } from '@/src/domains/trade/domaine/trade.type.ts';

export const TradeContext = createContext<Trade | undefined>(undefined);
export const TradeDisContext = createContext<Dispatch<TradeDispatch> | undefined>(undefined);
