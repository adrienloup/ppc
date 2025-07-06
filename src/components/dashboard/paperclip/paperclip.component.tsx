import { useFactory } from '@/src/features/factory/useFactory.ts';
import { TurbanComponent } from '@/src/components/common/turban/turban.component.tsx';
import { TitleComponent } from '@/src/components/common/title/title.component.tsx';
import { ButtonComponent } from '@/src/components/common/button/button.component.tsx';
import styles from '@/src/components/dashboard/paperclip/paperclip.module.scss';

export const PaperclipComponent = () => {
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
