import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { useProfile, useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { formatDate } from '@/src/shared/utils/formatDate.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { LoginComponent } from '@/src/domains/auth/interfaces/ui/login/login.component.tsx';

export const ProfileComponent = () => {
  const settiDispatch = useProfileDis();
  const { user } = useAuth();
  const { date, mode } = useProfile();

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
        <div>date: {formatDate(date)}</div>
        <div>
          <button onClick={() => settiDispatch({ type: 'SET_PLAY_PAUSE' })}>toggle play</button>
        </div>
        <div>mode: {mode}</div>
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
