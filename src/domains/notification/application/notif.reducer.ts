import type { NotifState, NotifDispatch } from '@/src/domains/notification/domain/notif.type.ts';

export const notifReducer = (state: NotifState, action: NotifDispatch): NotifState => {
  switch (action.type) {
    case 'ADD':
      return !state.find((notif) => notif.id === action.notif.id) ? [action.notif, ...state] : state;
    case 'REMOVE':
      return state.filter((notif) => notif.id !== action.id);
    default:
      return state;
  }
};
