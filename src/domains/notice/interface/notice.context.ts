import { createContext, type Dispatch } from 'react';
import type { NoticeType } from '@/src/domains/notice/ui/notice/notice.type.ts';

export const NoticeContext = createContext<Dispatch<NoticeType> | undefined>(undefined);
