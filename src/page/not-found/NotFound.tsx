import { useTitle } from '@/src/shared/hook/useTitle.ts';
import { Case } from '@/src/shared/ui/case/Case.tsx';
import { Title } from '@/src/shared/ui/title/Title.tsx';
import styles from '@/src/page/not-found/NotFound.module.scss';

export const NotFound = () => {
  useTitle('not found');

  return (
    <Case className={styles.case}>
      <Title className={styles.title}>oops!</Title>
      <p className={styles.text}>page not found. you can navigate to another page using the navigation.</p>
    </Case>
  );
};
