import "../node_modules/bootstrap/dist/css/bootstrap.css";
import {
  Navigate,
  RouterProvider,
  createBrowserRouter,
  redirect,
} from "react-router-dom";
import Root from "./pages/Root";
import Store from "./pages/Store";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import Contact from "./pages/Contact";
import Product from "./pages/Product";
import LoginPage from "./components/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { path: "", element: <Home /> },
      {
        path: "store",
        loader: () => {
          const userLoggedIn = !!localStorage.getItem("user");

          if (!userLoggedIn) {
            return redirect("/login");
          }

          return null;
        },

        element: <Store />,
      },
      {
        path: "store/:productId",
        element: <Product />,
      },

      { path: "about", element: <AboutPage /> },
      { path: "contact", element: <Contact /> },
      {
        path: "login",

        element: <LoginPage />,
      },
    ],
  },
  { path: "*", element: <Navigate to={"/login"} /> },
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
