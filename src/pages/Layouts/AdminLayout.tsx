import { Outlet } from "react-router-dom";
import AdminSidebar from "../../components/Navbar/Admin/AdminSidebar";
import { Box } from "@mui/material";
import AdminNavbar from "../../components/Navbar/Admin/AdminNavbar";
import { Toaster } from "sonner";

function AdminLayout() {
  return (
    <>
      <Box className="h-0">
        <Toaster />
      </Box>
      <Box className="flex gap-8">
        <Box className="sticky top-0 w-1/6  h-dvh overflow-y-auto">
          <div className="font-logo text-4xl p-3 sticky top-0 z-10">
            <p>dressrossa</p>
          </div>
          <AdminSidebar />
        </Box>
        <Box className="w-full px-4">
          <AdminNavbar />
          <Box className="flex-grow">
            <Outlet />
          </Box>
        </Box>
        {/* <Footer/> */}
      </Box>
    </>
  );
}

export default AdminLayout;
