import { useContext } from 'react';
import { NoticeContext } from '@/src/domains/notice/interface/notice.context.ts';

export const useNotice = () => {
  const ctx = useContext(NoticeContext);
  if (!ctx) throw new Error('useNotice must be inside NoticeProvider');
  return ctx;
};
