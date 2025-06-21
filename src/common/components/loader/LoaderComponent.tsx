import { useEffect, useState } from 'react';
import { classNames } from '@/src/common/shared/utils/classNames.ts';
import { ProgressbarComponent } from '@/src/common/components/progressbar/ProgressbarComponent.tsx';
import type { Loader } from '@/src/common/components/loader/Loader.ts';
import styles from '@/src/common/components/loader/Loader.module.scss';

export const LoaderComponent = ({ className, duration = 1e3, size = 'medium', ...props }: Loader) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    if (progress >= 100) return;
    const interval = setInterval(() => setProgress((prev) => Math.min(prev + 1, 100)), duration / 100);
    return () => clearInterval(interval);
  }, [progress, duration]);

  return (
    <div
      className={classNames([styles.loader, className])}
      {...props}
    >
      <span className={styles.label}>{progress}%</span>
      <ProgressbarComponent
        valueNow={progress}
        size={size}
      />
    </div>
  );
};
