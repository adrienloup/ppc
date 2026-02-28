import { useEffect } from "react";
import { usePagehide } from "@/src/shared/hook/usePagehide.ts";
import { Footer } from "@/src/shared/ui/footer/Footer.tsx";
import { Header } from "@/src/shared/ui/header/Header.tsx";
import { Main } from "@/src/shared/ui/main/Main.tsx";
import type { PageType } from "@/src/shared/ui/page/Page.ts";

export const Page = ({ children }: PageType) => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  usePagehide();

  return (
    <>
      <Header />
      <Main>{children}</Main>
      <Footer />
    </>
  );
};
