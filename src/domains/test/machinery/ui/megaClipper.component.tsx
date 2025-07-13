import { useMach, useMachDispatch } from '@/src/domains/test/machinery/useMach.ts';
import styles from '@/src/domains/test/test.module.scss';

export const MegaClipperComponent = () => {
  console.log('MegaClipperComponent');
  const setMach = useMachDispatch();
  const { megaClipper } = useMach();

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
