import { useTranslation } from 'react-i18next';
import { useProfile } from '@/src/features/profile/infrastructure/useProfile.ts';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/common/components/pause/PauseComponent.module.scss';

export const PauseComponent = () => {
  const { t } = useTranslation();
  const [profile, setProfile] = useProfile();
  const label = `${profile.isPlay ? t('app.start') : t('app.stop')} <span>${t('app.press')}</span>`;

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
        className={styles.backdrop}
        onClick={() => setProfile({ type: 'SET_PLAY' })}
      ></div>
    </div>
  );
};
