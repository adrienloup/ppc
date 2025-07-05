import { useFactory } from '@/src/features/factory/useFactory.ts';
import { TurbanComponent } from '@/src/components/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/button/button.component.tsx';
import styles from '@/src/components/dashboard/clip/clip.module.scss';

export const ClipComponent = () => {
  const state = useFactory();

  return (
    <TurbanComponent>
      <TitleComponent className={styles.title}>{`${state.clip} paperclips`}</TitleComponent>
      <ButtonComponent
        className={styles.button}
        to="/ppc/shop"
      >
        shop
      </ButtonComponent>
    </TurbanComponent>
  );
};
