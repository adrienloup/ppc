import { useContext } from 'react';
import { SettiContext, SettiDisContext } from '@/src/domains/settings/infrastructure/setti.context.ts';

export const useSetti = () => {
  const ctx = useContext(SettiContext);
  if (!ctx) throw new Error('useTrade must be inside SettingsProvider');
  return ctx;
};

export const useSettiDispatch = () => {
  const ctx = useContext(SettiDisContext);
  if (!ctx) throw new Error('useSettiDispatch must be inside SettingsProvider');
  return ctx;
};
