import { useEffect, useState } from 'react';
import { ProgressbarComponent } from '@/src/shared/ui/progressbar/progressbar.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import type { ProgressType } from '@/src/shared/ui/progress/progress.type.ts';
import styles from '@/src/shared/ui/progress/progress.module.scss';

export const ProgressComponent = ({ className, duration = 1e3, label, size = 'large' }: ProgressType) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let value = 0;
    const start = Date.now();

    const interval = setInterval(() => {
      const elapsed = Date.now() - start;

      if (elapsed >= duration) {
        setProgress(100);
        clearInterval(interval);
        return;
      }

      const random = Math.random() * 5; // 0|1 0|5

      value = Math.min(100, value + random);
      setProgress(value);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={classNames(styles.progress, styles[size], progress === 100 ? styles.completed : '', className)}>
      <ProgressbarComponent
        size={size}
        valueNow={progress}
        valueMin={0}
        valueMax={100}
        completed={progress === 100}
      />
      <span>
        {label} {Math.floor(progress)}%
      </span>
    </div>
  );
};
