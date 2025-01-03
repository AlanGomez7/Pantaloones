import { TextField } from "@mui/material";
import {
  ShoppingCartOutlined,
  FavoriteOutlined,
} from "@mui/icons-material";
import { Link } from "react-router-dom";
import Profile from "../../../pages/Profile";

function TopNavbar() {

  return (
    <>
      <div className="w-full bg-white h-20 flex px-6 justify-between place-items-center">
        <div className="font-logo text-4xl">
          <p>dressrossa</p>
        </div>
        <div className="space-x-4 hidden lg:block lg:w-[25%]">
          <TextField
            id="outlined-basic"
            placeholder="search"
            variant="outlined"
            size="small"
            fullWidth
          />
          {/* <Button variant="contained">Search</Button> */}
        </div>
        <div className="flex space-x-4">
          <Profile/>
     

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
    </>
  );
}

export default TopNavbar;
