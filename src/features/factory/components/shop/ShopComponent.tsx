import { useAuthentification } from '@/src/features/authentification/infrastructure/useAuthentification.ts';
import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import { CategoriesComponent } from '@/src/features/factory/components/shop/categories/CategoriesComponent.tsx';
import { LoginComponent } from '@/src/features/authentification/components/login/LoginComponent.tsx';
import styles from '@/src/features/factory/components/shop/ShopComponent.module.scss';

export const ShopComponent = () => {
  const [authentification] = useAuthentification();

  return (
    <>
      <ArticleComponent>
        {authentification.user ? (
          <>
            <TurbanComponent className={styles.turban}>
              <TitleComponent className={styles.title}>shop</TitleComponent>
              <ButtonComponent
                className={styles.button}
                to="/ppc/dashboard"
              >
                dashboard
              </ButtonComponent>
            </TurbanComponent>
            <CategoriesComponent />
          </>
        ) : (
          <LoginComponent className={styles.login} />
        )}
      </ArticleComponent>
      {[1, 2].map((n) => (
        <div
          key={n}
          className={styles[`planet${n}`]}
        />
      ))}
      <div className={styles.stars}>
        {[1, 2, 3, 4].map((n) => (
          <div
            key={n}
            className={styles[`star${n}`]}
          />
        ))}
      </div>
    </>
  );
};
