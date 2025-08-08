import { useEffect, useState } from 'react';
import type { Loader } from '@/src/shared/ui/loader/loader.type.ts';
import { ProgressBarComponent } from '@/src/shared/ui/progressbar/progressBar.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/shared/ui/loader/loader.module.scss';

export const LoaderComponent = ({ className, duration = 5e2, size = 'medium', ...props }: Loader) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const interval = setInterval(() => setProgress((prev) => Math.min(prev + 1, 100)), duration / 100);
    return () => clearInterval(interval);
  }, [progress, duration]);

  return (
    <div
      className={classNames(styles.loader, className)}
      {...props}
    >
      <span className={styles.label}>{progress}%</span>
      <ProgressBarComponent
        valueNow={progress}
        valueMin={0}
        valueMax={100}
        size={size}
      />
    </div>
  );
};
