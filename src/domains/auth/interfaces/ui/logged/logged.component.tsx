import { useProfile } from '@/src/domains/profile/interfaces/useProfile.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import styles from '@/src/domains/auth/interfaces/ui/logged/logged.module.scss';

export const LoggedComponent = () => {
  const { face } = useProfile();

  return (
    <ButtonComponent
      className={styles.logged}
      to="/ppc/profile"
    >
      <IconComponent icon={face ?? 'face_5'} />
    </ButtonComponent>
  );
};
