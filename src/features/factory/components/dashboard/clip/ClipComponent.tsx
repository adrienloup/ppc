import { Trans } from 'react-i18next';
import { useFactory } from '@/src/features/factory/infrastructure/useFactory.ts';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { NumberComponent } from '@/src/common/components/number/NumberComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/features/factory/components/dashboard/clip/ClipComponent.module.scss';

export const ClipComponent = () => {
  const factory = useFactory();

  return (
    <TurbanComponent className={styles.turban}>
      <TitleComponent
        tag="h1"
        className={styles.title}
      >
        <Trans
          i18nKey={'dashboard.clip'}
          components={{
            clip: <NumberComponent value={factory.clip} />,
          }}
        />
      </TitleComponent>
      <ButtonComponent
        className={styles.button}
        to={'/ppc/shop'}
      >
        shop
      </ButtonComponent>
    </TurbanComponent>
  );
};
