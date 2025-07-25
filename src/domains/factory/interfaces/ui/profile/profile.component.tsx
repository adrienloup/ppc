import { useAuth, useAuthDispatch } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useSetti, useSettiDispatch } from '@/src/domains/settings/interfaces/useSetti.ts';
import { useNotifDispatch } from '@/src/domains/notification/interfaces/useNotif.ts';
import { useBusiness } from '@/src/domains/business/interfaces/useBusiness.ts';
import { useIntel } from '@/src/domains/intelligence/interfaces/useIntel.ts';
import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useSale } from '@/src/domains/sale/interfaces/useSale.ts';
import { useTrade } from '@/src/domains/trade/interfaces/useTrade.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';

export const ProfileComponent = () => {
  const authDispatch = useAuthDispatch();
  const settiDispatch = useSettiDispatch();
  const notifDispatch = useNotifDispatch();
  const { user } = useAuth();
  const settings = useSetti();
  const business = useBusiness();
  const intelligence = useIntel();
  const production = useProd();
  const sale = useSale();
  const trade = useTrade();

  const logOut = () => {
    const factory = {
      business,
      intelligence,
      production,
      sale,
      trade,
    };
    authDispatch({
      type: 'LOG_OUT',
      settings,
      factory,
    });
    notifDispatch({
      type: 'ADD',
      alert: {
        id: 'log-out',
        text: `${user} is connected`,
        status: 'success',
        timeout: 2e3,
      },
    });
  };

  return user ? (
    <ArticleComponent>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          gap: '0.5rem',
        }}
      >
        <div>profile</div>
        <div>user: {user}</div>
        <div>
          <button onClick={logOut}>logout</button>
        </div>
        <div>pause: {settings.pause ? 'true' : 'false'}</div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>
        </div>
        <div>mode: {settings.mode}</div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_MODE', mode: 'light' })}>mode light</button>
        </div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_MODE', mode: 'dark' })}>mode dark</button>
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
