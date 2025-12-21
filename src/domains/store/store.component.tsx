import { ArticleComponent } from '@/src/shared/ui/article/article.component.tsx';
import { BannerComponent } from '@/src/shared/ui/banner/banner.component.tsx';

function StoreComponent() {
  return (
    <ArticleComponent>
      <BannerComponent
        title="store"
        button="factory"
      />
    </ArticleComponent>
  );
}

export default StoreComponent;
