import { lazy, Suspense } from 'react';
import { fallback } from '@/src/shared/utils/fallback.ts';
import { LoaderComponent } from '@/src/components/common/loader/loader.component.tsx';
import { ProfileComponent } from '@/src/components/profile/profile.component.tsx';

const LayoutComponent = lazy(() => fallback(import('@/src/components/layout/layout.component.tsx'), 15e2));

function ProfilePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <LayoutComponent>
        <ProfileComponent />
      </LayoutComponent>
    </Suspense>
  );
}

export default ProfilePage;
