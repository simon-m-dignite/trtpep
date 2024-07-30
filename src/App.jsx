import { Suspense } from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import { routes } from "./AppRoutes/AppRoutes";
import Loader from "./components/Global/Loader";
import ScrollToTopButton from "./components/Global/ScrollToTopButton";

function App() {
  return (
    <>
      <ScrollToTopButton />
      <Suspense fallback={<Loader />}>
        <Routes>
          {routes.map((route, index) => {
            return <Route path={route.url} element={route.page} key={index} />;
          })}
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
