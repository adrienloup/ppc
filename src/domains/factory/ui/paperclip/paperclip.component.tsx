import { useSupply } from '@/src/domains/supply/interface/useSupply.ts';
import { LabelComponent } from '@/src/shared/ui/label/label.component.tsx';
import { ValueComponent } from '@/src/shared/ui/value/value.component.tsx';
import styles from '@/src/domains/factory/ui/paperclip/paperclip.module.scss';

export const PaperclipComponent = () => {
  const { paperclip } = useSupply();

  return (
    <div className={styles.paperclip}>
      <ValueComponent>{paperclip.quantity}</ValueComponent>
      <LabelComponent>paperclips</LabelComponent>
    </div>
  );
};
