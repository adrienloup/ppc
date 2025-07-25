import { type Dispatch, createContext } from 'react';
import type { Commerce, CommerceDispatch } from '@/src/domains/commerce/domaine/com.type.ts';

export const CommerceContext = createContext<Commerce | undefined>(undefined);
export const CommerceDisContext = createContext<Dispatch<CommerceDispatch> | undefined>(undefined);
