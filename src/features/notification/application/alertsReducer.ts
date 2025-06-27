import type { Alerts, AlertsDispatch } from '@/src/features/notification/domain/Alerts.ts';

export const alertsReducer = (state: Alerts, action: AlertsDispatch): Alerts => {
  switch (action.type) {
    case 'ADD_ALERT':
      return !state.find((alert) => alert.id === action.alert.id)
        ? [action.alert, ...state]
        : state;
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== action.id);
    default:
      return state;
  }
};
