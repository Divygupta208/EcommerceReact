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
import { useContext } from "react";
import { Cart } from "./components/store/CartContext";
import ProductDetails from "./components/ProductDetails";

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

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
      {
        path: "login",

        element: <LoginPage />,
      },
    ],
  },
]);

function App() {
  const notify = (text) => toast(text);

  return (
    <>
      <RouterProvider router={router} />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

export default App;
