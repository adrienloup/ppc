import { MenuComponent } from '@/src/components/layout/menu/menu.component.tsx';
import styles from '@/src/components/layout/header/header.module.scss';

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
