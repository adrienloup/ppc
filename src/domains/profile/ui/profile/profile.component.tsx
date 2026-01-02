import { useNotice } from '@/src/domains/notice/interface/useNotice.ts';
import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';

function ProfileComponent() {
  const addNotice = useNotice();

  return (
    <ArticleComponent>
      <button onClick={() => addNotice({ text: '${name} is connected' })}>button</button>
    </ArticleComponent>
  );
}

export default ProfileComponent;
