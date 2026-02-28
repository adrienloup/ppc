import { useEffect } from "react";

export const usePagehide = () => {
  useEffect(() => {
    const onPagehide = () => {
      console.log("log out");
    };

    window.addEventListener("pagehide", onPagehide);

    return () => window.removeEventListener("pagehide", onPagehide);
  }, []);
};
