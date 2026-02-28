import { useEffect } from 'react';
import { usePageHide } from '@/src/shared/hook/usePageHide.ts';
import { Footer } from '@/src/shared/ui/footer/Footer.tsx';
import { Header } from '@/src/shared/ui/header/Header.tsx';
import { Main } from '@/src/shared/ui/main/Main.tsx';
import type { PageType } from '@/src/shared/ui/page/Page.ts';

export const Page = ({ children }: PageType) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  usePageHide();

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
