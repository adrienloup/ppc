import { StoreComponent } from '@/src/domains/store/store.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';

function StorePage() {
  useTitle('store');

  return (
    <PageComponent>
      <StoreComponent />
    </PageComponent>
  );
}

export default StorePage;
