import { Box, List, ListItem, Typography } from "@mui/material";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

function AdminSidebar() {
  const [pathName, setPathName] = useState<string[]>()
  const location = useLocation();

  const name = location.pathname.split("/")
  // const setPathName()

  const listArray = [
    { name: "dashboard", path: "/admin/dashboard" },
    { name: "products", path: "/admin/products" },
    { name: "users", path: "/admin/users" },
    { name: "orders", path: "/admin/orders" },
    { name: "Categories", path: "/admin/categories" },
    { name: "Banners", path: "/admin/banners" },
    { name: "Coupons", path: "/admin/coupons" },
  ];


  return (
    <>
      <List>
        {listArray.map((list) => (
          <Link to={list.path}>
            <ListItem className={`my-3  ${list.name === name[2] ? ("bg-violet-400 ") : ("hover:bg-slate-200")} rounded-r-full`}>
              <Typography
                variant="h6"
                sx={{ color: "#433c50" }}
                className="font-thin"
              >
                <p className="capitalize">{list.name}</p>
              </Typography>
            </ListItem>
          </Link>
        ))}
      </List>
    </>
  );
}

export default AdminSidebar;
