import { useMeca, useMecaDis } from '@/src/domains/mechanical/interfaces/useMeca.ts';
import styles from '@/src/domains/test/test.module.scss';

export const MegaClipperComponent = () => {
  console.log('MegaClipperComponent');
  const dispatch = useMecaDis();
  const { megaClipper, megaClipperCost } = useMeca();

  const buyMegaClipper = () => {
    const cost = megaClipperCost + 11e2;
    dispatch({ type: 'BUY_MEGA_CLIPPER', cost });
  };

  return (
    <>
      <div>mega clippers {megaClipper} (x500)</div>
      <div>mega clipper cost {megaClipperCost}</div>
      <button
        className={styles.button}
        onClick={buyMegaClipper}
      >
        +
      </button>
    </>
  );
};
