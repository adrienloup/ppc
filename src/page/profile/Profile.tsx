import { Link } from 'react-router-dom';
import { useAccount, useAccountDispatch } from '@/src/context/account/useAccount.ts';
import { useSettings, useSettingsDispatch } from '@/src/context/settings/useSettings.ts';
import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';
import { useNoticeDispatch } from '@/src/shared/ui/notice/useNoticeDispatch.ts';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import styles from '@/src/page/factory/Factory.module.scss';

export const Profile = () => {
  const accountDispatch = useAccountDispatch();
  const settingsDispatch = useSettingsDispatch();
  const noticeDispatch = useNoticeDispatch();
  const settings = useSettings();
  const { online } = useAccount();

  useTitle('profile');

  // console.log(Object.keys(user).find((k) => user[k].date));
  // const obj = Object.values(user).find((v) => v.date);
  // console.log(obj!.date);

  const logout = () => {
    accountDispatch({
      type: 'LOG_OUT',
      data: { business: '' },
      settings,
    });

    noticeDispatch({
      status: 'success',
      text: `${online} is disconnected`,
    });
  };

  return (
    <Article>
      <Title className={styles.title}>profile</Title>
      <div>user: {online}</div>
      <div>last connection: {settings.date}</div>
      <div>lang: {settings.lang}</div>
      <div>mode: {settings.mode}</div>
      <div>
        <button onClick={() => settingsDispatch({ type: 'SET_MODE', mode: 'contrast' })}>contrast</button>
        <button onClick={() => settingsDispatch({ type: 'SET_MODE', mode: 'dark' })}>dark</button>
        <button onClick={() => settingsDispatch({ type: 'SET_MODE', mode: 'light' })}>light</button>
        <button onClick={logout}>log out</button>
        <button
          onClick={() =>
            noticeDispatch({
              status: 'error',
              text: `${online} is disconnected`,
            })
          }
        >
          notice
        </button>
      </div>
      <Link to="/factory">factory</Link>
      <div style={{ height: '500px' }}></div>
      <div style={{ position: 'sticky', top: 0, background: 'red' }}>test</div>
      <div style={{ height: '500px' }}></div>
      <div style={{ position: 'sticky', top: 0, background: 'red' }}>test</div>
      <div style={{ height: '2000px' }}></div>
      <div style={{ position: 'sticky', top: 0, background: 'red' }}>test</div>
    </Article>
  );
};
