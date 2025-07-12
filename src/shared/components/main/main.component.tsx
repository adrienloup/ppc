import type { Main } from '@/src/shared/components/main/main.type.ts';
import styles from '@/src/shared/components/main/main.module.scss';

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
