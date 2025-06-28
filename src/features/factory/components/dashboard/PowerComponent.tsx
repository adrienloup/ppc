import { CardComponent } from '@/src/common/components/card/CardComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { DialsComponent } from '@/src/common/components/dials/DialsComponent.tsx';
import { DialComponent } from '@/src/common/components/dial/DialComponent.tsx';
import styles from '@/src/common/components/card/CardComponent.module.scss';

export const PowerComponent = () => {
  return (
    <CardComponent>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        power
      </TitleComponent>
      <DialsComponent>
        <DialComponent
          value={10}
          label="clip per second"
        />
      </DialsComponent>
      <DialsComponent>
        <DialComponent
          value={10}
          label="clip per second"
        />
      </DialsComponent>
      <DialsComponent>
        <DialComponent
          value={10}
          label="clip per second"
        />
      </DialsComponent>
    </CardComponent>
  );
};
