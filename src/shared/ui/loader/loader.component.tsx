import { ProgressComponent } from '@/src/shared/ui/progress/progress.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { LoaderType } from '@/src/shared/ui/loader/loader.type.ts';
import styles from '@/src/shared/ui/loader/loader.module.scss';

export const LoaderComponent = ({ duration = 45e2, className }: LoaderType) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <TitleComponent className={styles.title}>paperclips</TitleComponent>
      <ProgressComponent
        className={styles.progress}
        duration={duration}
        label="setup"
      />
      <ProgressComponent
        className={styles.progress}
        duration={duration}
        label="media"
      />
      <ProgressComponent
        className={styles.progress}
        duration={duration}
        label="state"
      />
    </div>
  );
};
