// import { useAuth2, useAuth2Dis } from '@/src/domains/authentification/interfaces/useAuth2.ts';
import { useAccount, useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
// import { useAuth, useAuthDis } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useAuth, useAuthDispatch } from '@/src/domains/authentification/interfaces/useAuth.ts';

export const ProfileComponent = () => {
  const { pause, mode } = useAccount();
  const auth2Dis = useAuthDispatch();
  // const dispatch = useAccountDis();
  const accDis = useAccountDispatch();
  // const { logOut } = useAuthDis();
  const { user } = useAuth();
  // const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>profile</div>
        <div>user: {user}</div>
        <div>
          <button onClick={() => auth2Dis({ type: 'LOG_OUT' })}>logout</button>
          {/*<button onClick={() => auth2Dis({ type: 'LOG_OUT' })}>logout</button>*/}
        </div>
        <div>pause: {pause ? 'true' : 'false'}</div>
        <div>
          <button onClick={() => accDis({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>
        </div>
        {/*<div>mode: {mode === 'light' ? 'light' : 'dark'}</div>*/}
        <div>mode: {mode}</div>
        <div>
          <button onClick={() => accDis({ type: 'SET_MODE', mode: 'light' })}>mode light</button>
        </div>
        <div>
          <button onClick={() => accDis({ type: 'SET_MODE', mode: 'dark' })}>mode dark</button>
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
