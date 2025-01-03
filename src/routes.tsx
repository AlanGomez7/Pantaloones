import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Wishlist from "./pages/Wishlist";
import Shop from "./pages/Shop"
import { privateRoutesType, publicRoutesType } from "./utils/types/types";
import ProductDetails from "./pages/Products/ProductDetails";
import AddProduct from "./pages/Admin/Product/AddProduct";


import { lazy } from "react";
const ChangePassword = lazy(()=>import("./pages/Auth/ChangePassword"));
const Checkout = lazy(()=>import("./pages/Products/Checkout"))

export const privateRoutes: privateRoutesType = [
  {
    path: "/cart",
    element: <Cart />,
  },
  
  {
    path: "/checkout",
    element: <Checkout/>
  },

  {
    path: "/wishlist",
    element: <Wishlist />,
  },
];

export const publicRoutes: publicRoutesType = [
  {
    path: "/",
    element: <Home />,
  },

  {
    path: "/change-password",
    element: <ChangePassword />,
  },
  {
    path: "/shop",
    element: <Shop/>
  },
  {
    path: "/products",
    element: <ProductDetails/>
  },

];
