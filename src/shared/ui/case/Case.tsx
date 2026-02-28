import type { CaseType } from "@/src/shared/ui/case/Case.ts";
import styles from "@/src/shared/ui/case/Case.module.scss";

export const Case = ({ children }: CaseType) => {
  return <div className={styles.case}>{children}</div>;
};
