import type { MainType } from '@/src/components/layout/main/main.type.ts';
import styles from '@/src/components/layout/main/main.module.scss';

export const MainComponent = ({ children }: MainType) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
    </main>
  );
};
