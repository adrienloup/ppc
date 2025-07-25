import { useContext } from 'react';
import { NotifDisContext } from '@/src/domains/notification/infrastructure/notif.context.ts';

export const useNotifDispatch = () => {
  const ctx = useContext(NotifDisContext);
  if (!ctx) throw new Error('useNotifDispatch must be inside NotifProvider');
  return ctx;
};
