import { useTranslation } from 'react-i18next';
import { usePopin } from '@/src/domains/popin/interfaces/usePopin.ts';
import { useProfile, useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/playPause/playPause.module.scss';

export const PlayPauseComponent = () => {
  const { t } = useTranslation();
  const profileDispatch = useProfileDis();
  const [, onRemove] = usePopin();
  const { pause } = useProfile();

  return (
    <ButtonComponent
      className={styles.playPause}
      onClick={() => (pause ? onRemove(false) : profileDispatch({ type: 'PLAY_PAUSE' }))}
    >
      {t('app.pause')}
    </ButtonComponent>
  );
};
