import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Article } from '@/src/shared/ui/article/Article.tsx';
import { Button } from '@/src/shared/ui/button/Button.tsx';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import styles from '@/src/page/store/Store.module.scss';

export const Store = () => {
  useTitle('store');

  return (
    <Article>
      <div className={styles.heading}>
        <Title className={styles.title}>store</Title>
        <Button
          className={styles.button}
          to="/factory"
        >
          factory
        </Button>
      </div>
    </Article>
  );
};
