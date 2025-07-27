import { PlayComponent } from '@/src/domains/profile/interfaces/ui/play/play.component.tsx';
import { LogoutComponent } from '@/src/domains/auth/interfaces/ui/logout/logout.component.tsx';
import styles from '@/src/domains/profile/interfaces/ui/controls/controls.module.scss';

export const ControlsComponent = () => {
  return (
    <div className={styles.controls}>
      controls
      <div className={styles.control}>
        <PlayComponent />
        <LogoutComponent />
      </div>
    </div>
  );
};
