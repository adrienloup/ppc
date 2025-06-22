// import { useEffect } from 'react';
import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
// import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { base64Encode } from '@/src/common/shared/utils/base64Encode.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/features/profile/components/profile/ProfileComponent.module.scss';

export const ProfileComponent = () => {
  const [authentification, setAuthentification] = useAuthentification();
  // const [profile, setProfile] = useProfile();

  const signUp = async () => {
    const password = await base64Encode('ccc');
    setAuthentification({ type: 'SIGN_UP', username: 'ccc', password });
  };

  const signIn = async () => {
    const password = await base64Encode('ccc');
    setAuthentification({ type: 'SIGN_IN', username: 'ccc', password });
  };

  return (
    <ArticleComponent>
      <TurbanComponent className={styles.turban}>
        <TitleComponent className={styles.title}>profile</TitleComponent>
        <ButtonComponent className={styles.button}>dashboard</ButtonComponent>
      </TurbanComponent>
      <div>username {authentification.user!}</div>
      <div>users {authentification.users.length}</div>
      <div>users {JSON.stringify(authentification.users)}</div>
      <div>
        <button onClick={() => setAuthentification({ type: 'SIGN_IN', username: 'aaa', password: 'aaa' })}>aaa</button>
        <button onClick={() => setAuthentification({ type: 'SIGN_IN', username: 'bbb', password: 'bbb' })}>bbb</button>
        <button onClick={signIn}>ccc</button>
        <button onClick={() => setAuthentification({ type: 'SIGN_IN', username: 'guest', password: 'guest' })}>
          guest
        </button>
      </div>
      <div>
        <button onClick={() => setAuthentification({ type: 'SIGN_OUT' })}>logout</button>
      </div>
      <div>
        <button onClick={signUp}>sing in ccc</button>
      </div>
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
    </ArticleComponent>
  );
};
