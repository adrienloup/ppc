import { classNames } from '@/src/shared/utils/classNames.ts';
import { ButtonComponent } from '@/src/shared/ui/button/button.component.tsx';
import type { Navigation } from '@/src/shared/ui/navigation/navigation.type.ts';
import styles from '@/src/shared/ui/navigation/navigation.module.scss';

export const NavigationComponent = ({ className, id = 'main-navigation', items }: Navigation) => {
  return items.length > 0 ? (
    <nav
      className={classNames([styles.nav, className])}
      id={id}
      role="navigation"
    >
      {items.map((item) => (
        <ButtonComponent
          key={item}
          className={styles.item}
          to={`/ppc/${item}`}
        >
          {item}
        </ButtonComponent>
      ))}
    </nav>
  ) : null;
};
