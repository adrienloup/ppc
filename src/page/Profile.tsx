import { Link } from 'react-router-dom';
import { useAccountDispatch } from '@/src/context/account/useAccount.ts';
import { useUser } from '@/src/context/account/useUser.ts';
import { useSettings, useSettingsDispatch } from '@/src/context/settings/useSettings.ts';
import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';

export const Profile = () => {
  const accountDispatch = useAccountDispatch();
  const SettingsDispatch = useSettingsDispatch();
  const settings = useSettings();
  const user = useUser();

  useTitle('profile');

  return (
    <Article>
      profile
      <div>user: {user}</div>
      <div>date: {settings.date}</div>
      <div>lang: {settings.lang}</div>
      <div>mode: {settings.mode}</div>
      <div>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'contrast' })}>contrast</button>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'dark' })}>dark</button>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'light' })}>light</button>
        <button
          onClick={() => {
            if (!user) return;
            accountDispatch({
              type: 'LOG_OUT',
              username: user,
              settings,
            });
          }}
        >
          log out
        </button>
      </div>
      <Link to="/factory">factory</Link>
      <div style={{ height: '2000px' }}></div>
    </Article>
  );
};
