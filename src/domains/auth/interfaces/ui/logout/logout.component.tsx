import { memo } from 'react';
import { useAuth, useAuthDispatch } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useFunds } from '@/src/domains/funds/interfaces/useFunds.ts';
import { useInventory } from '@/src/domains/inventory/interfaces/useInventory.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useMeca } from '@/src/domains/machine/interfaces/useMeca.ts';
import { useMerch } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { usePower } from '@/src/domains/power/interfaces/usePower.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useResources } from '@/src/domains/resources/interfaces/useResouces.ts';
import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/auth/interfaces/ui/logout/logout.module.scss';

export const LogoutComponent = memo(() => {
  const authDispatch = useAuthDispatch();
  const notifDispatch = useNotifDispatch();
  const { user } = useAuth();
  const profile = useProfile();
  const business = useBusiness();
  const funds = useFunds();
  const inventory = useInventory();
  const it = useIT();
  const machine = useMeca();
  const merchandise = useMerch();
  const power = usePower();
  const production = useProd();
  const resources = useResources();
  const swarm = useSwarm();
  const trade = useTrade();

  const logOut = () => {
    const factory = {
      business,
      funds,
      inventory,
      it,
      machine,
      merchandise,
      power,
      production,
      resources,
      swarm,
      trade,
    };
    authDispatch({
      type: 'LOG_OUT',
      profile,
      factory,
    });
    notifDispatch({
      type: 'ADD',
      notif: {
        id: 'log-out',
        text: `${user} is connected`,
        status: 'success',
        timeout: 25e2,
      },
    });
  };

  return (
    <ButtonComponent
      className={styles.logout}
      onClick={logOut}
    >
      logout
    </ButtonComponent>
  );
});
