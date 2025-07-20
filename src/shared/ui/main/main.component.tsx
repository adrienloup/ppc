import { SpaceComponent } from '@/src/shared/ui/space/space.component.tsx';
import type { Main } from '@/src/shared/ui/main/main.type.ts';
import styles from '@/src/shared/ui/main/main.module.scss';

export const MainComponent = ({ children }: Main) => {
  return (
    <main
      className={styles.main}
      role="main"
    >
      {children}
      <SpaceComponent stars={[1, 2, 3]} />
    </main>
  );
};
