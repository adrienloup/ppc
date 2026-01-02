import { useAuth } from '@/src/domains/auth/interface/useAuth.ts';
import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';

function ProfileComponent() {
  const { user } = useAuth();
  const addNotice = useNotice();

  return (
    <ArticleComponent>
      <button onClick={() => addNotice({ text: `${user} is connected` })}>button</button>
    </ArticleComponent>
  );
}

export default ProfileComponent;
