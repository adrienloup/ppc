import { type FC, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { notifReducer } from '@/src/domains/notification/application/notif.reducer.ts';
import { NotifContext, NotifDisContext } from '@/src/domains/notification/infrastructure/notif.context.ts';
import { NotifComponent } from '@/src/domains/notification/interfaces/ui/notif/notif.component.tsx';
import { NotifsComponent } from '@/src/domains/notification/interfaces/ui/notifs/notifs.component.tsx';
import type { Notif } from '@/src/domains/notification/interfaces/ui/notif/notif.type.ts';
import type { Children } from '@/src/shared/types/children.type.ts';

export const NotifProvider: FC<{ children: Children }> = ({ children }) => {
  const [state, dispatch] = useReducer(notifReducer, []);

  return (
    <NotifContext.Provider value={state}>
      <NotifDisContext.Provider value={dispatch}>
        {children}
        {state.length
          ? createPortal(
              <NotifsComponent>
                {state.map((notif: Notif) => (
                  <NotifComponent
                    key={notif.id}
                    id={notif.id}
                    text={notif.text}
                    status={notif.status}
                    timeout={notif.timeout}
                    onRemove={() => dispatch({ type: 'REMOVE', id: notif.id })}
                  />
                ))}
              </NotifsComponent>,
              document.getElementById('_app_emma0_1')!
            )
          : null}
      </NotifDisContext.Provider>
    </NotifContext.Provider>
  );
};
