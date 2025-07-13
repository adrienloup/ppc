import { useMachinery, useMachineryDis } from '@/src/domains/test/machinery/useMachinery.ts';
import styles from '@/src/domains/test/test.module.scss';

export const MegaClipperComponent = () => {
  console.log('MegaClipperComponent');
  const setMach = useMachineryDis();
  const { megaClipper } = useMachinery();

  return (
    <>
      <div>megaClippers {megaClipper} (x500)</div>
      <button
        className={styles.button}
        onClick={() => setMach({ type: 'BUY_MEGA_CLIPPER' })}
      >
        +1
      </button>
    </>
  );
};
