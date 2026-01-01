import { ArticleComponent } from '@/src/shared/ui/article/article.component';
import { StarterComponent } from '@/src/shared/ui/starter/starter.component.tsx';

function HomeComponent() {
  return (
    <ArticleComponent>
      home
      <StarterComponent />
    </ArticleComponent>
  );
}

export default HomeComponent;
