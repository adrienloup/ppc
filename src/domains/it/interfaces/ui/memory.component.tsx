import { useIT, useITDispatch } from '@/src/domains/it/interfaces/useIT.ts';
import { DialsComponent } from '@/src/shared/ui/dials/dials.component.tsx';
import { DialComponent } from '@/src/shared/ui/dial/dial.component.tsx';
import { NumberComponent } from '@/src/shared/ui/number/number.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ClickerComponent } from '@/src/shared/ui/clicker/clicker.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const MemoryComponent = () => {
  // console.log('MemoryComponent');
  const intelligenceDispatch = useITDispatch();
  const { memory, trust } = useIT();

  return (
    <DialsComponent>
      <DialComponent>
        <NumberComponent
          className={styles.value}
          value={memory}
          valueMax={100}
        />
        <LabelComponent
          className={styles.label}
          label="memory"
        />
        <ClickerComponent
          className={styles.button}
          prefix="+"
          value={1}
          disabled={trust <= 0 || memory >= 100}
          onClick={() => intelligenceDispatch({ type: 'INCREASE_MEMORY' })}
        >
          +
        </ClickerComponent>
      </DialComponent>
    </DialsComponent>
  );
};
