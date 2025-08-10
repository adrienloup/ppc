import { useTranslation } from 'react-i18next';
import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/play/play.module.scss';

export const PlayPauseComponent = () => {
  const { t } = useTranslation();
  const profileDispatch = useProfileDis();

  return (
    <ButtonComponent
      className={styles.play}
      onClick={() => profileDispatch({ type: 'PLAY_PAUSE' })}
    >
      {t('app.pause')}
    </ButtonComponent>
  );
};
