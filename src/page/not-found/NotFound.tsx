import { useTitle } from "@/src/shared/hook/useTitle.ts";
import { Case } from "@/src/shared/ui/case/Case.tsx";
import { Icon } from "@/src/shared/ui/icon/Icon.tsx";
import { Title } from "@/src/shared/ui/title/Title.tsx";
import styles from "@/src/page/not-found/NotFound.module.scss";

export const NotFound = () => {
  useTitle("page not found");

  return (
    <Case>
      <Icon className={styles.icon} icon="error" />
      <Title className={styles.title}>
        sorry, page not found. please continue...
      </Title>
    </Case>
  );
};
