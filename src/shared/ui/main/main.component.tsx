import type { MainType } from '@/src/shared/ui/main/main.type.ts';
import styles from '@/src/shared/ui/main/main.module.scss';

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
