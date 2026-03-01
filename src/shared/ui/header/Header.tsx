import { Menu } from '@/src/shared/ui/menu/Menu.tsx';
import styles from '@/src/shared/ui/header/Header.module.scss';

export const Header = () => {
  return (
    <header
      className={styles.header}
      role="banner"
    >
      <Menu />
    </header>
  );
};
