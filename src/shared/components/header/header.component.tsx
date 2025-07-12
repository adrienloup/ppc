import { MenuComponent } from '@/src/shared/components/menu/menu.component.tsx';
import styles from '@/src/shared/components/header/header.module.scss';

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
