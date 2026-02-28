import { useContext } from 'react';
import { SettingsContext, SettingsDispatchContext } from '@/src/context/settings/SettingsContext.ts';

export const useSettings = () => {
  const ctx = useContext(SettingsContext);
  if (!ctx) throw new Error('useSettings must be inside SettingsProvider');
  return ctx;
};

export const useSettingsDispatch = () => {
  const ctx = useContext(SettingsDispatchContext);
  if (!ctx) throw new Error('useSettingsDispatch must be inside SettingsProvider');
  return ctx;
};
