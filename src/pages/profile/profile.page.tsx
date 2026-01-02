import { lazy, Suspense } from 'react';
import { LoaderComponent } from '@/src/shared/ui/loader/loader.component.tsx';
import { PageComponent } from '@/src/shared/ui/page/page.component.tsx';
import { delay } from '@/src/shared/utils/delay.ts';

const ProfileComponent = lazy(() =>
  delay(import('@/src/domains/profile/ui/profile/profile.component.tsx'), 5e3)
);

function ProfilePage() {
  return (
    <Suspense fallback={<LoaderComponent />}>
      <PageComponent>
        <ProfileComponent />
      </PageComponent>
    </Suspense>
  );
}

export default ProfilePage;
