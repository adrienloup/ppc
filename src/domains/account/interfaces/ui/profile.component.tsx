// import { useAuth2, useAuth2Dis } from '@/src/domains/authentification/interfaces/useAuth2.ts';
import { useAccount, useAccountDispatch } from '@/src/domains/account/interfaces/useAccount.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';
// import { useAuth, useAuthDis } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useAuth, useAuthDispatch } from '@/src/domains/authentification/interfaces/useAuth.ts';

export const ProfileComponent = () => {
  const { user } = useAuth();
  // const { pause, mode } = useAccount();
  const account = useAccount();
  const auth2Dispatch = useAuthDispatch();
  const accDispatch = useAccountDispatch();

  const logOut = () => {
    console.log('logOut', account);
    auth2Dispatch({ type: 'UPDATE_USERS', account });
    auth2Dispatch({ type: 'LOG_OUT' });
  };

  return user ? (
    <ArticleComponent>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', gap: '0.5rem' }}>
        <div>profile</div>
        <div>user: {user}</div>
        <div>
          <button onClick={logOut}>logout</button>
          {/*<button onClick={() => auth2Dispatch({ type: 'LOG_OUT' })}>logout</button>*/}
        </div>
        {/*<div>pause: {pause ? 'true' : 'false'}</div>*/}
        {/*<div>*/}
        {/*  <button onClick={() => accDispatch({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>*/}
        {/*</div>*/}
        {/*<div>mode: {mode === 'light' ? 'light' : 'dark'}</div>*/}
        <div>mode: {account.mode}</div>
        <div>
          <button onClick={() => accDispatch({ type: 'SET_MODE', mode: 'light' })}>mode light</button>
        </div>
        <div>
          <button onClick={() => accDispatch({ type: 'SET_MODE', mode: 'dark' })}>mode dark</button>
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
