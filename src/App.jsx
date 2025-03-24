import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./AppRoutes/AppRoutes";
import Loader from "./components/Global/Loader";
import ScrollToTopButton from "./components/Global/ScrollToTopButton";
import { FormProvider } from "./context/FormContext";
import AutoScrollToTop from "./components/Global/AutoScrollToTop";

function App() {
  return (
    <>
      <ScrollToTopButton />
      <AutoScrollToTop />
      <Suspense fallback={<Loader />}>
        <FormProvider>
          <Routes>
            {routes.map((route, index) => {
              return (
                <Route path={route.url} element={route.page} key={index} />
              );
            })}
          </Routes>
        </FormProvider>
      </Suspense>
    </>
  );
}

export default App;
