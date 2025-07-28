import { memo } from 'react';
import { useAuth, useAuthDispatch } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useBusi } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useMer } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { useSwarm } from '@/src/domains/swarm/interfaces/useSwarm.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
// import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import styles from '@/src/domains/auth/interfaces/ui/logout/logout.module.scss';
import { useRes } from '@/src/domains/resources/interfaces/useResouces.ts';

export const LogoutComponent = memo(() => {
  const authDispatch = useAuthDispatch();
  const notifDispatch = useNotifDispatch();
  const { user } = useAuth();
  const profile = useProfile();
  const business = useBusi();
  const commerce = useMer();
  const it = useIT();
  const production = useProd();
  const sale = useSale();
  const trade = useTrade();
  const mechanical = useMeca();
  const merchandise = useMer();
  const swarm = useSwarm();
  const resources = useRes();

  const logOut = () => {
    const factory = {
      business,
      commerce,
      it,
      mechanical,
      merchandise,
      production,
      sale,
      trade,
      swarm,
      resources,
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
