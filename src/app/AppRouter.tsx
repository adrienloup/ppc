import { useRoutes } from "react-router-dom";
import FactoryPage from "@/src/page/FactoryPage.tsx";
import ProfilePage from "@/src/page/ProfilePage.tsx";

function AppRouter() {
  return useRoutes([
    { path: "/", element: <ProfilePage /> },
    { path: "/*", element: <ProfilePage /> },
    { path: "/profile", element: <ProfilePage /> },
    { path: "/factory", element: <FactoryPage /> },
  ]);
}

export default AppRouter;
