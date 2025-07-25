import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { TrustComponent } from '@/src/domains/intellect/interfaces/ui/trust.component.tsx';
// import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ResourcesComponent = () => {
  // console.log('ResourcesComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        resources
      </TitleComponent>
      <TrustComponent />
      {/*<EmptyComponent />*/}
    </CardComponent>
  );
};
