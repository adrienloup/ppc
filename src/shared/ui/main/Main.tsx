import type { MainType } from "@/src/shared/ui/main/Main.ts";
import styles from "@/src/shared/ui/main/Main.module.scss";

export const Main = ({ children }: MainType) => {
  return (
    <main className={styles.main} role="main">
      {children}
    </main>
  );
};
