import { useRoutes } from "react-router-dom";
import { Factory } from "@/src/page/Factory.tsx";
import { NotFound } from "@/src/page/not-found/NotFound.tsx";
import { Profile } from "@/src/page/Profile.tsx";
import { Page } from "@/src/shared/ui/page/Page.tsx";

function AppRouter() {
  const routes = useRoutes([
    { path: "/", element: <Profile /> },
    { path: "/profile", element: <Profile /> },
    { path: "/factory", element: <Factory /> },
    { path: "/*", element: <NotFound /> },
  ]);

  return <Page>{routes}</Page>;
}

export default AppRouter;
