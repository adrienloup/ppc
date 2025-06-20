import type { Main } from '@/src/common/components/main/Main.ts';
import styles from '@/src/common/components/main/Main.module.scss';

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
