import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { HighlightComponent } from '@/src/shared/ui/highlight/highlight.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.module.scss';

export const ClipComponent = () => {
  console.log('ClipComponent');
  const { clip } = useProd();

  return (
    <HighlightComponent className={styles.highlight}>
      <ValueComponent
        className={styles.value}
        value={clip}
      />
      <LabelComponent
        className={styles.label}
        label="paperclips"
      />
    </HighlightComponent>
  );
};
