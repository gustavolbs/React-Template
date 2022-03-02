import { Routes, Route, BrowserRouter } from "react-router-dom";
import { routes } from "./routes";

function Router() {
  const routeComponents = routes.map((route, key) => (
    <Route path={route.path} element={route.element} key={key} />
  ));

  return (
    <BrowserRouter>
      <Routes>{routeComponents}</Routes>
    </BrowserRouter>
  );
}

export default Router;
