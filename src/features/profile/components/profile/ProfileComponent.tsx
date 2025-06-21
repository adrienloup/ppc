import { ArticleComponent } from '@/src/common/components/article/ArticleComponent.tsx';
import { TurbanComponent } from '@/src/common/components/turban/TurbanComponent.tsx';
import { TitleComponent } from '@/src/common/components/title/TitleComponent.tsx';
import { ButtonComponent } from '@/src/common/components/button/ButtonComponent.tsx';
import styles from '@/src/features/profile/components/profile/ProfileComponent.module.scss';

export const ProfileComponent = () => {
  return (
    <ArticleComponent>
      <TurbanComponent className={styles.turban}>
        <TitleComponent className={styles.title}>profile</TitleComponent>
        <ButtonComponent className={styles.button}>factory</ButtonComponent>
      </TurbanComponent>
      profile
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
