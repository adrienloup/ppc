import { ClipPerSecondComponent } from '@/src/domains/production/interfaces/ui/clipPerSecond.component.tsx';
import { WireComponent } from '@/src/domains/exploitation/interfaces/ui/wire.component.tsx';
import { ClipperComponent } from '@/src/domains/mechanical/interfaces/ui/clipper.component.tsx';
import { MegaClipperComponent } from '@/src/domains/mechanical/interfaces/ui/megaClipper.component.tsx';
import styles from '@/src/domains/test/test.module.scss';

export const TestComponent = () => {
  console.log('TestComponent');
  return (
    <div className={styles.test}>
      <ClipPerSecondComponent />
      <WireComponent />
      <ClipperComponent />
      <MegaClipperComponent />
    </div>
  );
};
