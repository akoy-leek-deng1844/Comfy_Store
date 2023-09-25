import { RouterProvider, createBrowserRouter } from "react-router-dom"; 

import {
  About,
  Cart,
  Products,
  HomeLayout,
  LogIn,
  Register,
  SingleProduct,
  Error,
  CheckOut,
  Landing,
  Orders
} from "./Pages";
import { ErrorElement } from "./Components";
import { loader as landingLoader } from "./Pages/Landing";
import { loader as singleProductLoader } from "./Pages/SingleProduct";
import { loader as ProductsLoader } from "./Pages/Products";
import { action as registerAction } from "./Pages/Register";
import { action as loginAction } from "./Pages/LogIn";
import { store } from './Store';
const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Landing />,
        errorElement: <ErrorElement />,
        loader: landingLoader,
      },
      {
        path: "products",
        element: <Products />,
        errorElement: <ErrorElement />,
        loader: ProductsLoader,
      },
      {
        path: "products/:id",
        element: <SingleProduct />,
        errorElement: <ErrorElement />,
        loader: singleProductLoader,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "checkout",
        element: <CheckOut />,
      },
      {
        path: "orders",
        element: <Orders />,
      },
    ],
  },
  {
    path: "/login",
    element: <LogIn />,
    errorElement: <Error />,
    action: loginAction(store),
  },
  {
    path: "/register",
    element: <Register />,
    errorElement: <Error />,
    action: registerAction,
  },
]);
const App = () => {
  return (
    <>
      <RouterProvider router={router}/> 
    </>
  );
}
export default App