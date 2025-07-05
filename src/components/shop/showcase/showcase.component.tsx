import { TurbanComponent } from '@/src/components/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
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
