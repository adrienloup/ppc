import { MenuComponent } from '@/src/common/components/menu/MenuComponent.tsx';
import styles from '@/src/common/components/header/HeaderComponent.module.scss';

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
