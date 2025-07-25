import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import styles from '@/src/domains/production/interfaces/ui/clip/clip.module.scss';

export const ClipComponent = () => {
  // console.log('ClipComponent');
  const { clip } = useProd();

  return (
    <div className={styles.clip}>
      <ValueComponent
        className={styles.value}
        value={clip}
      />
      <LabelComponent label="paperclips" />
    </div>
  );
};
