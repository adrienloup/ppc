import type { Notif, NotifDispatch } from '@/src/domains/notification/domain/notif.type.ts';

export const notifReducer = (state: Notif, action: NotifDispatch): Notif => {
  switch (action.type) {
    case 'ADD':
      return !state.find((alert) => alert.id === action.alert.id)
        ? [action.alert, ...state]
        : state;
    case 'REMOVE':
      return state.filter((alert) => alert.id !== action.id);
    default:
      return state;
  }
};
