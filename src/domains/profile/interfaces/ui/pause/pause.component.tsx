import { useTranslation } from 'react-i18next';
import { PopinComponent } from '@/src/domains/popin/interfaces/ui/popin.component.tsx';
import { useProfileDis } from '@/src/domains/profile/interfaces/useProfile.ts';

export const PauseComponent = () => {
  const { t } = useTranslation();
  const profileDispatch = useProfileDis();

  return (
    <PopinComponent
      text={t('app.game')}
      button={t('app.play')}
      onPopin={() => profileDispatch({ type: 'PLAY_PAUSE' })}
    />
  );
};
