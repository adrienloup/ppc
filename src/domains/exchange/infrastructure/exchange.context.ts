import { type Dispatch, createContext } from 'react';
import type { Exchange, ExchangeDispatch } from '@/src/domains/exchange/domain/exchange.type.ts';

export const ExchangeContext = createContext<Exchange | undefined>(undefined);
export const ExchangeDisContext = createContext<Dispatch<ExchangeDispatch> | undefined>(undefined);
