import { type FC, useReducer } from 'react';
import { createPortal } from 'react-dom';
import { NotifContext } from '@/src/features/notification/notif.context.ts';
import { notifReducer } from '@/src/features/notification/notif.reducer.ts';
import { NotifsComponent } from '@/src/components/notifs/notifs.component.tsx';
import { NotifComponent } from '@/src/components/notif/notif.component.tsx';
import type { Children } from '@/src/shared/types/children.type.ts';
import type { Notif } from '@/src/features/notification/notif.type.ts';

export const NotifProvider: FC<{ children: Children }> = ({ children }) => {
  const [state, dispatch] = useReducer(notifReducer, []);

  return (
    <NotifContext.Provider value={[state, dispatch]}>
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
                  remove={() => dispatch({ type: 'REMOVE_NOTIF', id: notif.id })}
                />
              ))}
            </NotifsComponent>,
            document.getElementById('_app_3emma_1')!
          )
        : null}
    </NotifContext.Provider>
  );
};
