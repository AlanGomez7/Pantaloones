import { useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { Navigate, Outlet, useLocation } from "react-router-dom";
import TopNavbar from "./Navbar/TopNavbar";
import SearchNavbar from "./Navbar/SearchNavbar";

function Prefetch() {
  const location = useLocation();
  const token: { accessToken: string } | undefined = useSelector(
    (store: RootState) => store.auth.userDetails
  );
  
  console.log(token)

  let content;

  if (token === null) {
    content = <Navigate to="/signin" state={{ from: location }} replace />;
  } else {
    content = <>
      <TopNavbar />
      <SearchNavbar />
      <Outlet />
    </>;
  }
  return content;
}

export default Prefetch;
