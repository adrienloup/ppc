import { useReducer } from 'react';
import { createPortal } from 'react-dom';
import { AlertsContext, AlertsDispatchContext } from '@/src/features/notification/infrastructure/AlertsContext.ts';
import { alertsReducer } from '@/src/features/notification/application/alertsReducer.ts';
import { AlertsComponent } from '@/src/features/notification/components/alerts/AlertsComponent.tsx';
import { AlertComponent } from '@/src/features/notification/components/alert/AlertComponent.tsx';
import type { Alert } from '@/src/features/notification/domain/Alert.ts';
import type { Children } from '@/src/common/shared/types/Children.ts';

const PPC = document.getElementById('_ppc_3mma_0');

export const AlertsProvider = ({ children }: { children: Children }) => {
  const [alerts, setAlerts] = useReducer(alertsReducer, []);

  return (
    <AlertsContext.Provider value={alerts}>
      <AlertsDispatchContext.Provider value={setAlerts}>
        {alerts.length
          ? createPortal(
              <AlertsComponent>
                {alerts.map((alert: Alert) => (
                  <AlertComponent
                    key={alert.id}
                    id={alert.id}
                    text={alert.text}
                    status={alert.status}
                    timeout={alert.timeout}
                    remove={() => setAlerts({ type: 'REMOVE_ALERT', id: alert.id })}
                  />
                ))}
              </AlertsComponent>,
              PPC!
            )
          : null}
        {children}
      </AlertsDispatchContext.Provider>
    </AlertsContext.Provider>
  );
};
