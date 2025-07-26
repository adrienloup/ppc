import { useIT } from '@/src/domains/it/interfaces/useIT.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const OperationComponent = () => {
  // console.log('OperationComponent');
  const { operation, operationMax } = useIT();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={operation}
          valueMax={operationMax}
        />
        <LabelComponent
          className={styles.label}
          label="operation"
        />
      </DialComponent>
    </DialsComponent>
  );
};
