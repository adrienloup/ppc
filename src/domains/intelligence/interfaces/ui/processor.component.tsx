import { useIntel, useIntelDispatch } from '@/src/domains/intelligence/interfaces/useIntel.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ProcessorComponent = () => {
  // console.log('ProcessorComponent');
  const intelligenceDispatch = useIntelDispatch();
  const { processor, trust } = useIntel();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={processor}
          valueMax={100}
        />
        <LabelComponent
          className={styles.label}
          label="processor"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={trust <= 0 || processor >= 100}
          onClick={() => intelligenceDispatch({ type: 'INCREASE_PROCESSOR' })}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
