import { useAuth, useAuthDispatch } from '@/src/features/authentification/useAuth.ts';
import { useNotif } from '@/src/features/notification/useNotif.ts';
import { TurbanComponent } from '@/src/components/common/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import styles from '@/src/components/profile/account/account.module.scss';

export const AccountComponent = () => {
  const setAuth = useAuthDispatch();
  const { user } = useAuth();
  const [, setNotif] = useNotif();

  const logOut = () => {
    setAuth({ type: 'LOG_OUT' });
    setNotif({
      type: 'ADD_NOTIF',
      notif: { id: 'log-out', text: `${user} has logged out`, status: 'success', timeout: 2e3 },
    });
  };

  return (
    <TurbanComponent>
      <TitleComponent className={styles.title}>{`${user} profile`}</TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={logOut}
      >
        log out
      </ButtonComponent>
    </TurbanComponent>
  );
};
