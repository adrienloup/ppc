import { useAccount, useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { useFactory, useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import { useAuth, useAuthDispatch } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/components/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/login/login.component.tsx';

export const ProfileComponent = () => {
  const setAccount = useAccountDispatch();
  const setFactory = useFactoryDispatch();
  const { logOut } = useAuthDispatch();
  const { play } = useAccount();
  const { clip } = useFactory();
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>profile</div>
        <div>user: {user}</div>
        <div>
          <button onClick={logOut}>logout</button>
        </div>
        <div>play: {play ? 'true' : 'false'}</div>
        <div>
          <button onClick={() => setAccount({ type: 'TOGGLE_PLAY' })}>toggle play</button>
        </div>
        <div>
          <button onClick={() => setFactory({ type: 'INCREMENT_CLIP' })}>+1 clip</button>
          <div>{clip}</div>
        </div>
      </div>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
