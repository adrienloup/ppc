import { useRoutes } from "react-router-dom";
import { Factory } from "@/src/page/Factory.tsx";
import { NotFound } from "@/src/page/NotFound.tsx";
import { Profile } from "@/src/page/Profile.tsx";
import { Page } from "@/src/shared/ui/page/Page.tsx";

function AppRouter() {
  const element = useRoutes([
    { path: "/", element: <Profile /> },
    { path: "/profile", element: <Profile /> },
    { path: "/factory", element: <Factory /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return <Page>{element}</Page>;
}

export default AppRouter;
