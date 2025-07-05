import { useAuth, useAuthDispatch } from '@/src/features/authentification/useAuth.ts';
import { TurbanComponent } from '@/src/components/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import styles from '@/src/components/profile/account/account.module.scss';

export const AccountComponent = () => {
  const setAuth = useAuthDispatch();
  const { user } = useAuth();

  return (
    <TurbanComponent>
      <TitleComponent className={styles.title}>{`${user} profile`}</TitleComponent>
      <ButtonComponent
        className={styles.button}
        onClick={() => setAuth({ type: 'LOG_OUT' })}
      >
        log out
      </ButtonComponent>
    </TurbanComponent>
  );
};
