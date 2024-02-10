import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Store from "./pages/Store";

import Home from "./pages/Home";

import AboutPage from "./pages/AboutPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      { path: "store", element: <Store /> },
      { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />;
    </>
  );
}

export default App;
