import { LogoutComponent } from '@/src/domains/auth/interfaces/ui/logout/logout.component.tsx';
import { useAuth } from '@/src/domains/auth/interfaces/useAuth.ts';
import { PlayPauseComponent } from '@/src/domains/profile/interfaces/ui/play/playPause.component.tsx';
import { classNames } from '@/src/shared/utils/classNames.ts';
import styles from '@/src/domains/profile/interfaces/ui/controls/controls.module.scss';

export const ControlsComponent = () => {
  const { user } = useAuth();

  return (
    <div className={classNames(styles.controls, !user ? styles.disabled : '')}>
      controls
      <div className={styles.control}>
        <PlayPauseComponent />
        <LogoutComponent />
      </div>
    </div>
  );
};
