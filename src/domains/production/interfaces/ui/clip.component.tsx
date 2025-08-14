import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipComponent = () => {
  const { clip } = useProd();

  return (
    <div className={styles.clip}>
      <ValueComponent
        className={styles.total}
        value={clip}
      />
      <LabelComponent
        className={styles.label}
        label="paperclips"
      />
    </div>
  );
};
