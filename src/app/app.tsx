import "@/src/app/App.scss";
import { lazy, Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { Loader } from "@/src/shared/ui/loader/Loader.tsx";
import { delay } from "@/src/shared/utils/delay.ts";

const AppRouter = lazy(() => delay(import("@/src/app/AppRouter.tsx"), 5e3));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader />}>
        <AppRouter />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
