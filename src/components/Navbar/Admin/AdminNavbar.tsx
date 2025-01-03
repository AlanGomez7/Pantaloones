import { FavoriteOutlined, ShoppingCartOutlined } from "@mui/icons-material";
import React from "react";
import { Link } from "react-router-dom";
import Profile from "../../../pages/Profile";
import { TextField } from "@mui/material";

function AdminNavbar() {
  return (
    <div className="sticky top-0 m-auto w-5/5 bg-white h-20 flex px-6 justify-between place-items-center mb-5 rounded-lg z-10 shadow-lg">
      <div className="space-x-4 hidden lg:block lg:w-[45%]">
        <TextField
          id="outlined-basic"
          placeholder="Search"
          size="small"
          sx={{
            ".MuiOutlinedInput-root": {
              fieldset: {
                border: "none",
              },
              "&.Mui-focused fieldset": {
                border: "none",
              },
            },
          }}
          accessKey="k"
          fullWidth
        />
        {/* <Button variant="contained">Search</Button> */}
      </div>
      <div className="flex space-x-4">
        <Profile />
        <Link className="cursor-pointer" to={"/wishlist"}>
          <div className="flex relative">
            {/* wishlist */}
            <FavoriteOutlined />
            <div className="bottom-4 absolute left-4">
              <p className="flex justify-center place-items-center bg-violet-500 text-white h-4 w-4 rounded-full text-center text-xs">
                0
              </p>
            </div>
          </div>
        </Link>
        <Link className="cursor-pointer" to={"/cart"}>
          <div className="flex relative">
            {/* cart */}
            <ShoppingCartOutlined />
            <div className="bottom-4 absolute left-4">
              <p className="flex justify-center place-items-center bg-violet-500 text-white h-4 w-4 rounded-full text-center text-xs">
                0
              </p>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default AdminNavbar;
