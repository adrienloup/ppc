import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';

function StoreComponent() {
  return (
    <ArticleComponent>
      <BannerComponent
        icon="factory"
        label="factory"
        title="store"
      />
    </ArticleComponent>
  );
}

export default StoreComponent;
