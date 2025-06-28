import { useAlertsDispatch } from '@/src/features/notification/infrastructure/useAlerts.ts';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
import { SpaceComponent } from '@/src/common/components/space/SpaceComponent.tsx';
import { PlanetComponent } from '@/src/common/components/planet/PlanetComponent.tsx';
import { StarsComponent } from '@/src/common/components/stars/StarsComponent.tsx';
import { StarComponent } from '@/src/common/components/star/StarComponent.tsx';
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
          <TurbanComponent className={styles.turban}>
            <TitleComponent className={styles.title}>{authentification.user} profile</TitleComponent>
            <ButtonComponent
              className={styles.button}
              onClick={onSignOut}
            >
              logout
            </ButtonComponent>
          </TurbanComponent>
        ) : (
          <LoginComponent className={styles.login} />
        )}
      </ArticleComponent>
      <SpaceComponent>
        {[1, 2].map((n) => (
          <PlanetComponent
            key={n}
            className={styles[`planet${n}`]}
          />
        ))}
        <StarsComponent className={styles.stars}>
          {[1, 2, 3].map((n) => (
            <StarComponent
              key={n}
              className={styles[`star${n}`]}
            />
          ))}
        </StarsComponent>
      </SpaceComponent>
    </>
  );
};
