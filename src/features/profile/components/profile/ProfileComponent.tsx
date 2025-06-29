import { useAlertsDispatch } from '@/src/features/notification/infrastructure/useAlerts.ts';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
// import { SkyComponent } from '@/src/common/components/space/SkyComponent.tsx';
// import { SunComponent } from '@/src/common/components/planet/SunComponent.tsx';
// import { CloudsComponent } from '@/src/common/components/stars/StarComponent.tsx';
// import { StarComponent } from '@/src/common/components/star/StarComponent.tsx';
import { BackdropComponent } from '@/src/features/factory/components/backdrop/BackdropComponent.tsx';
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
        text: `${authentification.user} disconnects`,
        status: 'success',
        timeout: 2e3,
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
      <BackdropComponent
        classNames={{
          sun: styles.sun,
          clouds: styles.clouds,
          cloud1: styles.cloud1,
          cloud2: styles.cloud2,
          cloud3: styles.cloud3,
          stars: styles.stars,
          star1: styles.star1,
          star2: styles.star2,
          star3: styles.star3,
        }}
      />
      {/*<SkyComponent>*/}
      {/*  {[1, 2].map((n) => (*/}
      {/*    <SunComponent*/}
      {/*      key={n}*/}
      {/*      className={styles[`planet${n}`]}*/}
      {/*    />*/}
      {/*  ))}*/}
      {/*  <CloudsComponent className={styles.stars}>*/}
      {/*    {[1, 2, 3].map((n) => (*/}
      {/*      <StarComponent*/}
      {/*        key={n}*/}
      {/*        className={styles[`star${n}`]}*/}
      {/*      />*/}
      {/*    ))}*/}
      {/*  </CloudsComponent>*/}
      {/*</SkyComponent>*/}
    </>
  );
};
