import "../node_modules/bootstrap/dist/css/bootstrap.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import Store from "./pages/Store";

import Home from "./pages/Home";

import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Product from "./pages/Product";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        element: <Store />,
      },
      { path: "store/:productId", element: <Product /> },

      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
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
