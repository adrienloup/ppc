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
      <SpaceComponent
        stars={
          // readonly [
          // readonly [1, 2, 3],
          // readonly [4, 5],
          // readonly [6, 7, 8]
          // readonly [9, 10]
          // ]
          [
            [1, 2, 3],
            [4, 5],
            [6, 7, 8],
            [9, 10],
          ] as const
        }
      />
    </main>
  );
};
