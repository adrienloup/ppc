import type { ProgressbarType } from "@/src/shared/ui/progressbar/Progressbar.ts";
import { classNames } from "@/src/shared/utils/classNames.ts";
import styles from "@/src/shared/ui/progressbar/Progressbar.module.scss";

export const Progressbar = ({
  className,
  size = "medium",
  valueNow,
  valueMin = 0,
  valueMax = 100,
  completed = false,
}: ProgressbarType) => {
  return (
    <div
      className={classNames(
        styles.progressbar,
        styles[size],
        completed ? styles.completed : "",
        className,
      )}
      role="progressbar"
      aria-valuenow={valueNow}
      aria-valuemin={valueMin}
      aria-valuemax={valueMax}
    >
      <div
        className={classNames(
          styles.progress,
          completed ? styles.completed : "",
        )}
        style={{ width: `${valueNow}%` }}
      ></div>
    </div>
  );
};
