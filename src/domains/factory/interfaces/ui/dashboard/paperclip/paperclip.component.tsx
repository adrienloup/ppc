import { useFactory } from '@/src/domains/factory/interfaces/useFactory.ts';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/dashboard/paperclip/paperclip.module.scss';

export const PaperclipComponent = () => {
  const { clip } = useFactory();

  return (
    <BannerComponent>
      <TitleComponent className={styles.title}>{`${clip} paperclips`}</TitleComponent>
      <ButtonComponent
        className={styles.button}
        to="/ppc/shop"
      >
        shop
      </ButtonComponent>
    </BannerComponent>
  );
};
