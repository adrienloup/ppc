import type { IconType } from "@/src/shared/ui/icon/Icon.ts";
import { classNames } from "@/src/shared/utils/classNames.ts";
import styles from "@/src/shared/ui/icon/Icon.module.scss";

export const Icon = ({ className, icon, ...props }: IconType) => {
  return (
    <span
      className={classNames(styles.icon, className)}
      aria-hidden={false}
      {...props}
    >
      {icon}
    </span>
  );
};
