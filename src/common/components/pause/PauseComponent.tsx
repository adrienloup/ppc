// import { useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/common/components/pause/PauseComponent.module.scss';

export const PauseComponent = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useProfile();
  const label = `${profile.isPlay ? t('app.start') : t('app.stop')} <span>${t('app.press')}</span>`;
  // const backdropRef = useRef<HTMLDivElement>(null);

  // useEffect(() => {
  //   if (backdropRef.current) {
  //     backdropRef.current.innerHTML = '';
  //     for (let i = 0; i < 20; i++) {
  //       const div = document.createElement('div');
  //       backdropRef.current.appendChild(div);
  //     }
  //   }
  // }, []);

  return (
    <div className={styles.pause}>
      <ButtonComponent
        onClick={() => setProfile({ type: 'SET_PLAY' })}
        className={styles.button}
      >
        <span
          className={styles.label}
          dangerouslySetInnerHTML={{ __html: label }}
        />
      </ButtonComponent>
      <div
        // ref={backdropRef}
        className={styles.backdrop}
        onClick={() => setProfile({ type: 'SET_PLAY' })}
      ></div>
    </div>
  );
};
