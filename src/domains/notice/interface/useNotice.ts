import { useContext } from 'react';
import { NoticeContext, NoticeDispatchContext } from '@/src/domains/notice/interface/notice.context.ts';

export const useNotice = () => {
  const ctx = useContext(NoticeContext);
  if (!ctx) throw new Error('useNotice must be inside NoticeProvider');
  return ctx;
};

export const useNoticeDispatch = () => {
  const ctx = useContext(NoticeDispatchContext);
  if (!ctx) throw new Error('useNoticeDispatch must be inside NoticeProvider');
  return ctx;
};
