// // import { useLocation, useNavigate } from 'react-router-dom';
// import { useEffect } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useSpring, animated, to } from '@react-spring/web';
// import styles from '@/src/components/PageNavigator.module.scss';
// import type { Page } from '@/src/features/game/domain/Page.ts';
// import { useGame } from '@/src/features/game/infrastructure/useGame.ts';
//
// // type Page = 'page1' | 'page2' | 'page3' | 'page4';
//
// const pageCoords: Record<Page, { x: number; y: number }> = {
//   page1: { x: 0, y: 0 },
//   page2: { x: -100, y: 0 },
//   page3: { x: 0, y: -100 },
//   page4: { x: -100, y: -100 },
// };
//
// export function PageNavigator() {
//   // const location = useLocation();
//   // const navigate = useNavigate();
//   const { t } = useTranslation();
//   const [game] = useGame();
//   // const [currentPage, setCurrentPage] = useState<Page>('page1');
//
//   const [{ x, y }, api] = useSpring(() => ({
//     x: 0,
//     y: 0,
//     config: { tension: 180, friction: 22 },
//   }));
//
//   // useEffect(() => {
//   //   const pathPage = location.pathname.replace('/', '') as Page;
//   //   if (pathPage && pathPage !== currentPage && pathPage in pageCoords) {
//   //     setCurrentPage(pathPage);
//   //   }
//   // }, [location.pathname, currentPage]);
//
//   useEffect(() => {
//     // const { x: targetX, y: targetY } = pageCoords[currentPage];
//     const { x: targetX, y: targetY } = pageCoords[game.page];
//     api.start({ x: targetX, y: targetY });
//     // }, [currentPage, api]);
//   }, [game.page, api]);
//
//   // const goToPage = (page: Page) => {
//   //   if (page === currentPage) return;
//   //   // navigate(`/${page}`);
//   //   setCurrentPage(page);
//   //   setGame({ ...game, page: page });
//   // };
//
//   return (
//     <>
//       {/*<div className={styles.nav}>*/}
//       {/*  {(['page1', 'page2', 'page3', 'page4'] as Page[]).map((p) => (*/}
//       {/*    <button*/}
//       {/*      key={p}*/}
//       {/*      onClick={() => goToPage(p)}*/}
//       {/*      className={currentPage === p ? styles.active : ''}*/}
//       {/*    >*/}
//       {/*      {p.toUpperCase()}*/}
//       {/*    </button>*/}
//       {/*  ))}*/}
//       {/*</div>*/}
//       <animated.div
//         className={styles.wrapper}
//         style={{
//           transform: to([x, y], (x, y) => `translate(${x}vw, ${y}vh)`),
//         }}
//       >
//         {/*<div className={`${styles.page} ${styles.page1} ${currentPage === 'page1' ? styles.active : ''}`}>*/}
//         <div className={`${styles.page} ${styles.page1} ${game.page === 'page1' ? styles.active : ''}`}>
//           {t('paperclips.page')} Page 1<div className={styles.star1}></div>
//           <div className={styles.star2}></div>
//         </div>
//         <div className={`${styles.page} ${styles.page2}`}>Page 2</div>
//         <div className={`${styles.page} ${styles.page3}`}>
//           <div>Page 3 top</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 a card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 b card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 c card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 d card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 e card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 f card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 g card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 h card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 i card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 j card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 k card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 l card</div>
//           <div style={{ height: '200px', border: '1px solid red' }}>Page 3 m card</div>
//           <div>Page 3 bottom</div>
//         </div>
//         <div className={`${styles.page} ${styles.page4}`}>
//           <div>Page 4 top</div>
//           <div style={{ height: '3000px' }}></div>
//           <div>Page 4 bottom</div>
//         </div>
//       </animated.div>
//     </>
//   );
// }
