import React from 'react';
import styles from './ProgressBar.module.scss';

export const ProgressBar: React.FC<ProgressBarProps> = ({ total, unlocked, used, className }) => {
  const clampedUsed = Math.min(used, unlocked);
  const clampedUnlocked = Math.min(unlocked, total);

  const usedPercent = (clampedUsed / total) * 100;
  const unlockedPercent = ((clampedUnlocked - clampedUsed) / total) * 100;
  const lockedPercent = 100 - usedPercent - unlockedPercent;

  return (
    <div className={`${styles.progressBar} ${className ?? ''}`}>
      <div
        className={styles.used}
        style={{ width: `${usedPercent}%` }}
      />
      <div
        className={styles.unlocked}
        style={{ width: `${unlockedPercent}%` }}
      />
      <div
        className={styles.locked}
        style={{ width: `${lockedPercent}%` }}
      />
    </div>
  );
};
