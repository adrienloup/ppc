import type { NoticeDispatchType, NoticeType } from '@/src/domains/notice/application/notice.type.ts';

export const noticeReducer = (state: NoticeType, action: NoticeDispatchType): NoticeType => {
  switch (action.type) {
    case 'ADD_ALERT':
      return !state.find((alert) => alert.id === action.alert.id) ? [action.alert, ...state] : state;
    case 'REMOVE_ALERT':
      return state.filter((alert) => alert.id !== action.id);
    default:
      return state;
  }
};
