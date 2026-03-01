import { Link } from 'react-router-dom';
import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import styles from '@/src/page/factory/Factory.module.scss';

export const Factory = () => {
  useTitle('factory');

  return (
    <Article>
      <div className={styles.heading}>
        <Title className={styles.title}>factory</Title>
        <Button
          className={styles.button}
          to="/store"
        >
          store
        </Button>
      </div>
      <Link to="/profile">profile</Link>
      <div style={{ height: '1000px' }}>test</div>
      <div className={styles.toTop}>top</div>
      <div style={{ height: '1000px' }}>test</div>
    </Article>
  );
};
