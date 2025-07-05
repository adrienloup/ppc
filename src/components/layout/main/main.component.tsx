import type { Main } from '@/src/components/layout/main/main.type.ts';
import styles from '@/src/components/layout/main/main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
    </main>
  );
};
