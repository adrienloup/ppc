import type { NotifAction, NotifState } from '@/src/domains/notification/domain/notif.type.ts';

export const notifReducer = (state: NotifState, action: NotifAction): NotifState => {
  switch (action.type) {
    case 'ADD_NOTIF':
      return !state.find((notif) => notif.id === action.notif.id) ? [action.notif, ...state] : state;
    case 'REMOVE_NOTIF':
      return state.filter((notif) => notif.id !== action.id);
    default:
      return state;
  }
};
