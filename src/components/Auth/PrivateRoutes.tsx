import { Navigate, Outlet, useLocation } from "react-router-dom";
import Navbar from "../Navbar/User/Navbar";

function PrivateRoutes() {
  const location = useLocation();

  const token = localStorage.getItem("user");
  console.log(token)
  let content;

  if (token !== null) {
    content = (
      <>
        <Navbar/>
        <Outlet />
      </>
    );
  } else {
    content = <Navigate to="/signin" state={{ from: location }} replace />;
  }
  return content;
}

export default PrivateRoutes;
