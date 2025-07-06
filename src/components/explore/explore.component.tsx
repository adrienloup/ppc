import { useAuth } from '@/src/features/authentification/useAuth.ts';
import { ArticleComponent } from '@/src/components/layout/article/article.component.tsx';
import { ExpandsComponent } from '@/src/components/common/expands/expands.component.tsx';
import { LoginComponent } from '@/src/components/common/login/login.component.tsx';
import styles from '@/src/components/explore/explore.module.scss';

export const ExploreComponent = () => {
  const { user } = useAuth();

  return user ? (
    <ArticleComponent>
      <div className={styles.stages}>
        <div className={styles.stage}>
          <div className={styles.circle}>1</div>
          <ExpandsComponent
            className={styles.expands}
            expands={[
              { title: <h2 className={styles.title}>Premier volet 1</h2>, content: <>'uiuiiu'</> },
              {
                title: <h2 className={styles.title}>Premier volet 2</h2>,
                content: '<>tutu</>',
              },
              { title: <h2 className={styles.title}>Premier volet 3</h2>, content: '<>tutu</>' },
            ]}
          />
        </div>
        <div className={styles.stage}>
          <div>1</div>
          <ExpandsComponent
            className={styles.expands}
            expands={[
              { title: <h2 className={styles.expand}>Premier volet 1</h2>, content: <>'uiuiiu'</> },
              {
                title: <h2 className={styles.expand}>Premier volet 2</h2>,
                content: '<>tutu</>',
              },
              { title: <h2 className={styles.expand}>Premier volet 3</h2>, content: '<>tutu</>' },
            ]}
          />
          <div className={styles.circle}>1</div>
        </div>
        <div className={styles.stage}>
          <div className={styles.circle}>1</div>
          <ExpandsComponent
            className={styles.expands}
            expands={[
              { title: <h2 className={styles.expand}>Premier volet 1</h2>, content: <>'uiuiiu'</> },
              {
                title: <h2 className={styles.expand}>Premier volet 2</h2>,
                content: '<>tutu</>',
              },
              { title: <h2 className={styles.expand}>Premier volet 3</h2>, content: '<>tutu</>' },
            ]}
          />
        </div>
      </div>
    </ArticleComponent>
  ) : (
    <LoginComponent />
  );
};
