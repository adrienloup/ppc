// import { useMachinery, useMachineryDis } from '../useMachinery.ts';
// import styles from '../../../test/test.module.scss';
//
// export const ClipperComponent = () => {
//   console.log('ClipperComponent');
//   const dispatch = useMachineryDis();
//   const { clipper, clipperCost } = useMachinery();
//
//   const buyClipper = () => {
//     const cost = clipperCost + (Math.random() * 10 + 10); // 10 et 20
//     dispatch({ type: 'BUY_CLIPPER', cost });
//   };
//
//   return (
//     <>
//       <div>clippers {clipper}</div>
//       <div>clipperCost {clipperCost}</div>
//       <button
//         className={styles.button}
//         disabled={100 < clipperCost}
//         //disabled={factory.funds < clipperCost}
//         onClick={buyClipper}
//       >
//         +1
//       </button>
//     </>
//   );
// };
