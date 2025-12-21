import { type Dispatch, createContext } from 'react';
import type { NoticeDispatchType, NoticeType } from '@/src/domains/notice/application/notice.type.ts';

export const NoticeContext = createContext<NoticeType | undefined>(undefined);
export const NoticeDispatchContext = createContext<Dispatch<NoticeDispatchType> | undefined>(undefined);
