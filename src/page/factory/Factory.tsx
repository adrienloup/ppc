import { Link } from 'react-router-dom';
import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';

export const Factory = () => {
  useTitle('factory');

  return (
    <Article>
      factory
      <Link to="/profile">profile</Link>
    </Article>
  );
};
