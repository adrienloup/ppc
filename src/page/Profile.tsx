import { Link } from 'react-router-dom';
import { useAccount, useAccountDispatch } from '@/src/context/account/useAccount.ts';
// import { useUser } from '@/src/context/account/useUser.ts';
import { useSettings, useSettingsDispatch } from '@/src/context/settings/useSettings.ts';
import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';

export const Profile = () => {
  const accountDispatch = useAccountDispatch();
  const SettingsDispatch = useSettingsDispatch();
  const settings = useSettings();
  // const user = useUser();
  const { online } = useAccount();

  useTitle('profile');

  // console.log(Object.keys(user).find((k) => user[k].date));
  // const obj = Object.values(user).find((v) => v.date);
  // console.log(obj!.date);

  return (
    <Article>
      profile
      <div>user: {online}</div>
      <div>last connection: {settings.date}</div>
      <div>lang: {settings.lang}</div>
      <div>mode: {settings.mode}</div>
      <div>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'contrast' })}>contrast</button>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'dark' })}>dark</button>
        <button onClick={() => SettingsDispatch({ type: 'SET_MODE', mode: 'light' })}>light</button>
        <button
          onClick={() => {
            accountDispatch({
              type: 'LOG_OUT',
              data: { business: '' },
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
