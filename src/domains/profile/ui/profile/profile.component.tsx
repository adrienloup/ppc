import { useAuth } from '@/src/domains/auth/interface/useAuth.ts';
import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
import { useProfile } from '@/src/domains/profile/interface/useProfile.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';

export const ProfileComponent = () => {
  const { user } = useAuth();
  const { date, lang, mode, theme } = useProfile();
  const addNotice = useNotice();

  return (
    <ArticleComponent>
      <BannerComponent title="profile" />
      <div>user: {user}</div>
      <div>date: {date}</div>
      <div>lang: {lang}</div>
      <div>mode: {mode}</div>
      <div>theme: {theme}</div>
      <button onClick={() => addNotice({ text: `${user} is connected` })}>button</button>
    </ArticleComponent>
  );
};
