import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/features/factory/components/shop/ShopComponent.module.scss';

export const ShopComponent = () => {
  return (
    <ArticleComponent>
      <TurbanComponent className={styles.turban}>
        <TitleComponent className={styles.title}>shop</TitleComponent>
        <ButtonComponent
          className={styles.button}
          to="/ppc/dashboard"
        >
          dashboard
        </ButtonComponent>
      </TurbanComponent>
      shop
      <div className={styles.planet}></div>
      <div className={styles.stars}>
        {[1, 2, 3].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </ArticleComponent>
  );
};
