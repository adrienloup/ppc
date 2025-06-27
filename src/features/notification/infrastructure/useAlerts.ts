import { useContext } from 'react';
import { AlertsDispatchContext } from '@/src/features/notification/infrastructure/AlertsContext.ts';

export const useAlertsDispatch = () => {
  const context = useContext(AlertsDispatchContext);
  if (!context) {
    throw new Error('useAlertsDispatch must be used within a AlertsProvider');
  }
  return context;
};
