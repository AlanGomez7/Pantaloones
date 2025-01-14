import { Outlet } from "react-router-dom";
import Navbar from "../../components/Navbar/User/Navbar";
import { Toaster } from "sonner";

function Layout() {
  return (
    <>
      <div className="h-0">
        <Toaster/>
      </div>
      <Navbar />
      <Outlet />
    </>
  );
}

export default Layout;
