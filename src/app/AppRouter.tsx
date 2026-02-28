import { useRoutes } from "react-router-dom";
import { Factory } from "@/src/page/Factory.tsx";
import { NotFound } from "@/src/page/NotFound.tsx";
import { Profile } from "@/src/page/Profile.tsx";

function AppRouter() {
  return useRoutes([
    { path: "/", element: <Profile /> },
    { path: "/profile", element: <Profile /> },
    { path: "/factory", element: <Factory /> },
    { path: "/*", element: <NotFound /> },
  ]);
}

export default AppRouter;
