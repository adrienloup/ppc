import { ExploreComponent } from '@/src/domains/explore/explore.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';

function ExplorePage() {
  useTitle('explore');

  return (
    <PageComponent>
      <ExploreComponent />
    </PageComponent>
  );
}

export default ExplorePage;
