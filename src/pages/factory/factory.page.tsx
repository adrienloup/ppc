import { FactoryComponent } from '@/src/domains/factory/factory/factory.component.tsx';
import { useTitle } from '@/src/shared/hooks/useTitle.ts';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';

function FactoryPage() {
  useTitle('factory');

  return (
    <PageComponent>
      <FactoryComponent />
    </PageComponent>
  );
}

export default FactoryPage;
