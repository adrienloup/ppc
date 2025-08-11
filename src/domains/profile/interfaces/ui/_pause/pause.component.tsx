// import { useEffect, useRef, useState } from 'react';
// import { useTranslation } from 'react-i18next';
// import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
// import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
// import { classNames } from '@/src/shared/utils/classNames.ts';
// import styles from '@/src/domains/profile/interfaces/ui/_pause/pause.module.scss';
//
// export const PauseComponent = () => {
//   const { t } = useTranslation();
//   const profileDispatch = useProfileDis();
//   const timerRef = useRef<number | null>(null);
//   const [out, setOut] = useState(false);
//
//   const clearTimer = () => {
//     if (timerRef.current === null) return;
//     clearTimeout(timerRef.current);
//     timerRef.current = null;
//   };
//
//   const onClick = () => {
//     setOut(true);
//     clearTimer();
//     timerRef.current = window.setTimeout(() => {
//       profileDispatch({ type: 'PLAY_PAUSE' });
//     }, 400); // CSS animation duration
//   };
//
//   useEffect(() => clearTimer, []);
//
//   return (
//     <div className={styles.pause}>
//       <ButtonComponent
//         className={classNames(styles.button, out ? styles.out : '')}
//         onClick={onClick}
//       >
//         <span className={styles.label}>{t('app.play')}</span>
//       </ButtonComponent>
//       <div
//         className={styles.backdrop}
//         role="presentation"
//         onClick={onClick}
//       ></div>
//     </div>
//   );
// };
