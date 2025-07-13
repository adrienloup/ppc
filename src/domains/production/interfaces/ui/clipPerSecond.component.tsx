import { useProd, useProdDis } from '@/src/domains/production/interfaces/useProd.ts';
import { useExp, useExpDis } from '@/src/domains/exploitation/interfaces/useExp.ts';
import styles from '@/src/domains/test/test.module.scss';

export const ClipPerSecondComponent = () => {
  console.log('ClipPerSecondComponent');
  const prodDispatch = useProdDis();
  const expDispatch = useExpDis();
  const { clip, clipPerSecond } = useProd();
  const { wire } = useExp();

  const update = () => {
    if (wire <= 0) return;
    expDispatch({ type: 'UPDATE_WIRE', wire: 1 });
    prodDispatch({ type: 'UPDATE_CLIP' });
  };

  return (
    <div className={styles.inner}>
      <div>{clip} clips</div>
      <div>{clipPerSecond} clips per second</div>
      <button
        className={styles.button}
        disabled={wire <= 0}
        onClick={update}
      >
        +
      </button>
    </div>
  );
};
