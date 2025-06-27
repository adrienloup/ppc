import { useAlertsDispatch } from '@/src/features/notification/infrastructure/useAlerts.ts';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
import styles from '@/src/features/profile/components/profile/ProfileComponent.module.scss';

export const ProfileComponent = () => {
  const setAlerts = useAlertsDispatch();
  const [authentification, setAuthentification] = useAuthentification();

  const onSignOut = () => {
    setAuthentification({ type: 'SIGN_OUT' });
    setAlerts({
      type: 'ADD_ALERT',
      alert: {
        id: 'sign-out',
        status: 'success',
        text: `${authentification.user} disconnects`,
      },
    });
  };

  return (
    <>
      <ArticleComponent>
        {authentification.user ? (
          <>
            <TurbanComponent className={styles.turban}>
              <TitleComponent className={styles.title}>
                {authentification.user} profile
              </TitleComponent>
              <ButtonComponent
                className={styles.button}
                onClick={onSignOut}
              >
                logout
              </ButtonComponent>
            </TurbanComponent>
          </>
        ) : (
          <>
            <TurbanComponent className={styles.turban}>
              <TitleComponent className={styles.title}>profile</TitleComponent>
            </TurbanComponent>
            <LoginComponent className={styles.login} />
          </>
        )}
      </ArticleComponent>
      {[1, 2].map((n) => (
        <div
          key={n}
          className={styles[`planet${n}`]}
        />
      ))}
      <div className={styles.stars}>
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </>
  );
};
