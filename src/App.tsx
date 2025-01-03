import { lazy, Suspense } from "react";
import { privateRoutes, publicRoutes } from "./routes";
import PrivateRoutes from "./components/Auth/PrivateRoutes";
import { Route, Routes } from "react-router-dom";
import Signin from "./pages/Auth/Signin";
import SignUp from "./pages/Auth/Signup";
import Home from "./pages/Admin/Home";
import Layout from "./pages/Layouts/Layout";

const AddProduct = lazy(() => import("./pages/Admin/Product/AddProduct"));
const AdminLayout = lazy(() => import("./pages/Layouts/AdminLayout"));
const OtpSignin = lazy(() => import("./pages/Auth/OtpSignin"));
const EditProduct = lazy(() => import("./pages/Admin/Product/EditProduct"));

function App() {
  return (
    <>
      <Suspense fallback={<>loading</>}>
        <Routes>
          <Route element={<PrivateRoutes />}>
            {privateRoutes.map((routes) => (
              <Route
                key={routes.path}
                path={routes.path}
                element={routes.element}
              />
            ))}
          </Route>

          <Route element={<Layout />}>
            {publicRoutes.map((routes) => (
              <Route
                key={routes.path}
                path={routes.path}
                element={routes.element}
              />
            ))}
          </Route>

          <Route element={<AdminLayout />}>
            <Route path="admin/add-product" element={<AddProduct />}></Route>
            <Route path="admin/products/edit-product" element={<EditProduct />}></Route>
            <Route path="admin/dashboard" element={<Home />}></Route>
            <Route path="admin/products" element={<Home />}></Route>
            <Route path="admin/users" element={<Home />}></Route>
            <Route path="admin/orders" element={<Home />}></Route>
          </Route>

          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/otplogin" element={<OtpSignin />} />
          <Route path="*" element={<>Not found</>} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;

// import OtpSignin from ;
// import AdminLayout from ;
// import AddProduct from ;
// import EditProduct from ;
