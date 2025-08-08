import { memo } from 'react';
import { useAuth, useAuthDispatch } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useInventory } from '@/src/domains/inventory/interfaces/useInventory.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useMer } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useResources } from '@/src/domains/resources/interfaces/useResouces.ts';
import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
// import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import styles from '@/src/domains/auth/interfaces/ui/logout/logout.module.scss';

export const LogoutComponent = memo(() => {
  const authDispatch = useAuthDispatch();
  const notifDispatch = useNotifDispatch();
  const { user } = useAuth();
  const profile = useProfile();
  const business = useBusiness();
  const inventory = useInventory();
  const it = useIT();
  const mechanical = useMeca();
  const merchandise = useMer();
  const production = useProd();
  const resources = useResources();
  const sale = useSale();
  const swarm = useSwarm();
  const trade = useTrade();

  const logOut = () => {
    const factory = {
      business,
      inventory,
      it,
      mechanical,
      merchandise,
      production,
      resources,
      sale,
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
