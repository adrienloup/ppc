import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { DebugComponent } from '@/src/domains/debug/interfaces/debug.component.tsx';
import { DashboardComponent } from '@/src/domains/industry/interfaces/ui/dashboard/dashboard.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/shared/ui/layout/layout.component.tsx'), 1e3));

function FactoryPage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <DebugComponent />
        <DashboardComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default FactoryPage;
