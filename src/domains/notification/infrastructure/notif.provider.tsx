import { type FC, useReducer } from 'react';
import { createPortal } from 'react-dom';
import {
  NotifContext,
  NotifDisContext,
} from '@/src/domains/notification/infrastructure/notif.context.ts';
import { notifReducer } from '@/src/domains/notification/application/notif.reducer.ts';
import { AlertsComponent } from '@/src/domains/notification/interfaces/ui/alerts/alerts.component.tsx';
import { AlertComponent } from '@/src/domains/notification/interfaces/ui/alert/alert.component.tsx';
import type { Alert } from '@/src/domains/notification/interfaces/ui/alert/alert.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const NotifProvider: FC<{ children: Children }> = ({ children }) => {
  const [state, dispatch] = useReducer(notifReducer, []);

  return (
    <NotifContext.Provider value={state}>
      <NotifDisContext.Provider value={dispatch}>
        {children}
        {state.length
          ? createPortal(
              <AlertsComponent>
                {state.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    id={alert.id}
                    text={alert.text}
                    status={alert.status}
                    timeout={alert.timeout}
                    remove={() => dispatch({ type: 'REMOVE', id: alert.id })}
                  />
                ))}
              </AlertsComponent>,
              document.getElementById('_app_emma0_1')!
            )
          : null}
      </NotifDisContext.Provider>
    </NotifContext.Provider>
  );
};
