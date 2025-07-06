import { TurbanComponent } from '@/src/components/common/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import styles from '@/src/components/shop/showcase/showcase.module.scss';

export const ShowcaseComponent = () => {
  return (
    <TurbanComponent>
      <TitleComponent className={styles.title}>shop</TitleComponent>
      <ButtonComponent
        className={styles.button}
        to="/ppc/dashboard"
      >
        dashboard
      </ButtonComponent>
    </TurbanComponent>
  );
};
