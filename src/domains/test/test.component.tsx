import { ClipComponent } from '@/src/domains/test/production/ui/clip.component.tsx';
import { ClipperComponent } from '@/src/domains/test/machinery/ui/clipper.component.tsx';
import { MegaClipperComponent } from '@/src/domains/test/machinery/ui/megaClipper.component.tsx';
import styles from '@/src/domains/test/test.module.scss';

export const TestComponent = () => {
  console.log('TestComponent');
  return (
    <div className={styles.test}>
      <ClipComponent />
      <ClipperComponent />
      <MegaClipperComponent />
    </div>
  );
};
