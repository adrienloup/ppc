import { useAuth } from '@/src/domains/authentification/interfaces/useAuth.ts';
import { useProfile, useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/authentification/interfaces/ui/login/login.component.tsx';

export const ProfileComponent = () => {
  const settiDispatch = useProfileDis();
  const { user } = useAuth();
  const profile = useProfile();

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
          <button onClick={() => settiDispatch({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>
        </div>
        <div>mode: {profile.mode}</div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_MODE', mode: 'light' })}>mode light</button>
        </div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_MODE', mode: 'dark' })}>mode dark</button>
        </div>
      </div>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
