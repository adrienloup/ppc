import { useProd } from '@/src/domains/production/interfaces/useProd.ts';
import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import { formatNumber } from '@/src/shared/utils/formatNumber.ts';
import styles from '@/src/domains/factory/interfaces/ui/factory/factory.module.scss';

export const ClipComponent = () => {
  const { lang } = useProfile();
  const { clip } = useProd();

  return (
    <div className={styles.clip}>
      <ValueComponent
        className={styles.total}
        value={formatNumber(clip, lang)}
      />
      <LabelComponent
        className={styles.label}
        label="paperclips"
      />
    </div>
  );
};
