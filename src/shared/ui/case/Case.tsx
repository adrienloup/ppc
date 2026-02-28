import { Button } from "@/src/shared/ui/button/Button.tsx";
import type { CaseType } from "@/src/shared/ui/case/Case.ts";
import { Icon } from "@/src/shared/ui/icon/Icon.tsx";
import { Title } from "@/src/shared/ui/title/Title.tsx";
import styles from "@/src/shared/ui/case/Case.module.scss";

export const Case = ({ button, icon, title }: CaseType) => {
  return (
    <div className={styles.case}>
      {icon && <Icon className={styles.icon} icon={icon} />}
      <Title className={styles.title}>{title}</Title>
      {button && (
        <Button className={styles.button} to={"/" + button}>
          {button}
        </Button>
      )}
    </div>
  );
};
