import { useMach, useMachDispatch } from '@/src/domains/test/machinery/useMach.ts';
import styles from '@/src/domains/test/test.module.scss';

export const ClipperComponent = () => {
  console.log('ClipperComponent');
  const setMach = useMachDispatch();
  const { clipper } = useMach();

  return (
    <>
      <div>clippers {clipper}</div>
      <button
        className={styles.button}
        onClick={() => setMach({ type: 'BUY_CLIPPER' })}
      >
        +1
      </button>
    </>
  );
};
