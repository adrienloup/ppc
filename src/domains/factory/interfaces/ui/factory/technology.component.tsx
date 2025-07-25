import { CardComponent } from '@/src/shared/ui/card/card.component.tsx';
import { TitleComponent } from '@/src/shared/ui/title/title.component.tsx';
import { TrustComponent } from '@/src/domains/intelligence/interfaces/ui/trust.component.tsx';
import { MemoryComponent } from '@/src/domains/intelligence/interfaces/ui/memory.component.tsx';
import { ProcessorComponent } from '@/src/domains/intelligence/interfaces/ui/processor.component.tsx';
import { OperationComponent } from '@/src/domains/intelligence/interfaces/ui/operation.component.tsx';
// import { EmptyComponent } from '@/src/shared/ui/empty/empty.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const TechnologyComponent = () => {
  // console.log('TechnologyComponent');
  return (
    <CardComponent className={styles.card}>
      <TitleComponent
        tag="h2"
        className={styles.title}
      >
        technology
      </TitleComponent>
      <TrustComponent />
      <MemoryComponent />
      <ProcessorComponent />
      <OperationComponent />
      {/*<EmptyComponent />*/}
    </CardComponent>
  );
};
