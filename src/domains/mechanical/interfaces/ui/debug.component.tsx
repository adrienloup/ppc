// import { useMeca, useMecaDispatch } from '@/src/domains/mechanical/interfaces/useMeca.ts';
//
// export const DebugMecaComponent = () => {
//   const dispatch = useMecaDispatch();
//   const { clipperBonus, megaClipperBonus, clipFactoryBonus } = useMeca();
//
//   const updateClipperBonus = (bonus: number) => dispatch({ type: 'CLIPPER_BONUS', bonus });
//   const updateMegaClipperBonus = (bonus: number) => dispatch({ type: 'MEGA_CLIPPER_BONUS', bonus });
//   const updateClipFactoryBonus = (bonus: number) => dispatch({ type: 'CLIP_FACTORY_BONUS', bonus });
//
//   return (
//     <>
//       <form>
//         <span>clipperBonus = {clipperBonus}</span>
//         <div>
//           <button
//             type="button"
//             onClick={() => updateClipperBonus(0)}
//           >
//             0
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipperBonus(2)}
//           >
//             2
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipperBonus(10)}
//           >
//             10
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipperBonus(5e2)}
//           >
//             5e2
//           </button>
//         </div>
//       </form>
//       <form>
//         <span>megaClipperBonus = {megaClipperBonus}</span>
//         <div>
//           <button
//             type="button"
//             onClick={() => updateMegaClipperBonus(0)}
//           >
//             0
//           </button>
//           <button
//             type="button"
//             onClick={() => updateMegaClipperBonus(2)}
//           >
//             2
//           </button>
//           <button
//             type="button"
//             onClick={() => updateMegaClipperBonus(10)}
//           >
//             10
//           </button>
//           <button
//             type="button"
//             onClick={() => updateMegaClipperBonus(5e2)}
//           >
//             5e2
//           </button>
//         </div>
//       </form>
//       <form>
//         <span>clipFactoryBonus = {clipFactoryBonus}</span>
//         <div>
//           <button
//             type="button"
//             onClick={() => updateClipFactoryBonus(0)}
//           >
//             0
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipFactoryBonus(2)}
//           >
//             2
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipFactoryBonus(10)}
//           >
//             10
//           </button>
//           <button
//             type="button"
//             onClick={() => updateClipFactoryBonus(5e2)}
//           >
//             5e2
//           </button>
//         </div>
//       </form>
//     </>
//   );
// };
