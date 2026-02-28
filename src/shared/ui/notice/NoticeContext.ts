import { createContext, type Dispatch } from 'react';
import type { NoticeType } from '@/src/shared/ui/notice/Notice.ts';

export const NoticeDispatchContext = createContext<Dispatch<NoticeType> | undefined>(undefined);
