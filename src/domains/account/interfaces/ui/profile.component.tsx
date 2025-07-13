import { useAccount, useAccountDis } from '@/src/domains/account/interfaces/useAccount.ts';
// import { useFactory, useFactoryDispatch } from '@/src/domains/factory/interfaces/useFactory.ts';
import { useAuth, useAuthDis } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';

export const ProfileComponent = () => {
  const dispatch = useAccountDis();
  // const setFactory = useFactoryDispatch();
  const { logOut } = useAuthDis();
  const { pause, mode } = useAccount();
  // const { clip } = useFactory();
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>profile</div>
        <div>user: {user}</div>
        <div>
          <button onClick={logOut}>logout</button>
        </div>
        <div>pause: {pause ? 'true' : 'false'}</div>
        <div>
          <button onClick={() => dispatch({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>
        </div>
        <div>mode: {mode === 'light' ? 'light' : 'dark'}</div>
        <div>
          <button onClick={() => dispatch({ type: 'SET_MODE', mode: 'light' })}>mode light</button>
        </div>
        <div>
          <button onClick={() => dispatch({ type: 'SET_MODE', mode: 'dark' })}>mode dark</button>
        </div>
        {/*<div>*/}
        {/*  <button onClick={() => setFactory({ type: 'INCREMENT_CLIP' })}>+1 clip</button>*/}
        {/*  <div>{clip}</div>*/}
        {/*</div>*/}
      </div>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
