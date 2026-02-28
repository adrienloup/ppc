import type { LoaderType } from "@/src/shared/ui/loader/Loader.ts";
import { Progress } from "@/src/shared/ui/progress/Progress.tsx";
import { Title } from "@/src/shared/ui/title/Title.tsx";
import { classNames } from "@/src/shared/utils/classNames.ts";
import styles from "@/src/shared/ui/loader/Loader.module.scss";

export const Loader = ({ duration = 5e3, className }: LoaderType) => {
  return (
    <div className={classNames(styles.loader, className)}>
      <Title className={styles.title}>paperclips</Title>
      <Progress className={styles.progress} duration={duration} label="setup" />
      <Progress className={styles.progress} duration={duration} label="media" />
      <Progress className={styles.progress} duration={duration} label="data" />
    </div>
  );
};
