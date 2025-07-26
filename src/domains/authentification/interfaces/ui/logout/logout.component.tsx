import { memo } from 'react';
import { useAuth, useAuthDispatch } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useMer } from '@/src/domains/merchandise/interfaces/useMer.ts';
import { useIntel } from '@/src/domains/intelligence/interfaces/useIntel.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { useMeca } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
// import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import styles from '@/src/domains/authentification/interfaces/ui/logout/logout.module.scss';

export const LogoutComponent = memo(() => {
  const authDispatch = useAuthDispatch();
  const notifDispatch = useNotifDispatch();
  const { user } = useAuth();
  const profile = useProfile();
  const business = useBusiness();
  const commerce = useMer();
  const intelligence = useIntel();
  const production = useProd();
  const sale = useSale();
  const trade = useTrade();
  const mechanical = useMeca();
  const merchandise = useMer();

  // const [hover, setHover] = useState(false);

  const logOut = () => {
    const factory = {
      business,
      commerce,
      intelligence,
      mechanical,
      merchandise,
      production,
      sale,
      trade,
    };
    authDispatch({
      type: 'LOG_OUT',
      profile: profile,
      factory,
    });
    notifDispatch({
      type: 'ADD',
      alert: {
        id: 'log-out',
        text: `${user} is connected`,
        status: 'success',
        timeout: 2e3,
      },
    });
  };

  return (
    <ButtonComponent
      className={styles.button}
      onClick={logOut}
      // onMouseEnter={() => setHover(true)}
      // onMouseLeave={() => setHover(false)}
    >
      logout
      {/*<IconComponent*/}
      {/*  className={styles.icon}*/}
      {/*  icon={hover ? 'toggle_on' : 'toggle_off'}*/}
      {/*/>*/}
    </ButtonComponent>
  );
});
