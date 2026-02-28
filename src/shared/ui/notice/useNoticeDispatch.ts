import { useContext } from 'react';
import { NoticeDispatchContext } from '@/src/shared/ui/notice/NoticeContext.ts';

export const useNoticeDispatch = () => {
  const ctx = useContext(NoticeDispatchContext);
  if (!ctx) throw new Error('useNoticeDispatch must be inside NoticeProvider');
  return ctx;
};
