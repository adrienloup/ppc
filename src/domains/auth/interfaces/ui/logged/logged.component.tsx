import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import { IconComponent } from '@/src/shared/ui/icon/icon.component.tsx';
import styles from '@/src/domains/auth/interfaces/ui/logged/logged.module.scss';

export const LoggedComponent = () => {
  const faces = ['face', 'face_2', 'face_3', 'face_4', 'face_5', 'face_6'];
  const face = faces[Math.floor(Math.random() * faces.length)];

  return (
    <ButtonComponent
      className={styles.logged}
      to="/ppc/profile"
    >
      <IconComponent icon={face ?? 'face_5'} />
    </ButtonComponent>
  );
};
