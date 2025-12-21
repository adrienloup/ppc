import { type FC, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { noticeReducer } from '@/src/domains/notice/application/notice.reducer.ts';
import { NoticeContext, NoticeDispatchContext } from '@/src/domains/notice/interface/notice.context.ts';
import { AlertComponent } from '@/src/domains/notice/ui/alert/alert.component.tsx';
import { AlertsComponent } from '@/src/domains/notice/ui/alerts/alerts.component.tsx';
import type { AlertType } from '@/src/domains/notice/ui/alert/alert.type.ts';
import type { ChildrenType } from '@/src/shared/types/children.type.ts';

export const NoticeProvider: FC<{ children: ChildrenType }> = ({ children }) => {
  const [state, dispatch] = useReducer(noticeReducer, []);

  return (
    <NoticeContext.Provider value={state}>
      <NoticeDispatchContext.Provider value={dispatch}>
        {children}
        {state.length
          ? createPortal(
              <AlertsComponent>
                {state.map((alert: AlertType) => (
                  <AlertComponent
                    key={alert.id}
                    id={alert.id}
                    text={alert.text}
                    status={alert.status}
                    timeout={alert.timeout}
                    onRemove={() => dispatch({ type: 'REMOVE_ALERT', id: alert.id })}
                  />
                ))}
              </AlertsComponent>,
              document.getElementById('_ppc_emma0_1')!
            )
          : null}
      </NoticeDispatchContext.Provider>
    </NoticeContext.Provider>
  );
};
