import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ModelingComponent = () => {
  // console.log('ModelingComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        className={styles.title}
        tag="h2"
      >
        modeling
      </TitleComponent>
      <EmptyComponent />
    </CardComponent>
  );
};
