import { useMeca, useMecaDis } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import styles from '@/src/domains/test/test.module.scss';

export const ClipperComponent = () => {
  console.log('ClipperComponent');
  const dispatch = useMecaDis();
  const { clipper, clipperCost } = useMeca();

  const buyClipper = () => {
    const cost = clipperCost + (Math.random() * 10 + 10); // 10 et 20
    dispatch({ type: 'BUY_CLIPPER', cost });
  };

  return (
    <>
      <div>clippers {clipper}</div>
      <div>clipperCost {clipperCost}</div>
      <button
        className={styles.button}
        onClick={buyClipper}
      >
        +
      </button>
    </>
  );
};
