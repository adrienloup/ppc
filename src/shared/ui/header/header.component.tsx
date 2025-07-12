import { MenuComponent } from '@/src/shared/ui/menu/menu.component.tsx';
import styles from '@/src/shared/ui/header/header.module.scss';

export const HeaderComponent = () => {
  return (
    <header
      className={styles.header}
      role="banner"
    >
      <MenuComponent />
    </header>
  );
};
