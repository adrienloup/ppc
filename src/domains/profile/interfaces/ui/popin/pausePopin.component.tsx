import { useTranslation } from 'react-i18next';
import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { PopinComponent } from '@/src/shared/ui/popin/popin.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/popin/pausePopin.module.scss';

export const PausePopinComponent = () => {
  const { t } = useTranslation();
  const profileDispatch = useProfileDis();
  const onPlay = () => profileDispatch({ type: 'PLAY_PAUSE' });
  // const onPlay = () => profileDispatch({ type: 'PLAY_PAUSE' });

  return (
    <PopinComponent onRemove={onPlay}>
      <div>1</div>
      <div>2</div>
      <div>3</div>
      <ButtonComponent
        className={styles.button}
        onClick={onPlay}
      >
        {t('app.play')}
      </ButtonComponent>
    </PopinComponent>
  );
};
