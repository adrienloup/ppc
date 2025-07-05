import { useContext } from 'react';
import { NotifContext } from '@/src/features/notification/notif.context.ts';

export const useNotif = () => {
  const ctx = useContext(NotifContext);
  if (!ctx) throw new Error('useNotif must be inside NotifProvider');
  return ctx;
};
