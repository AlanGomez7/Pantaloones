import { PersonRounded } from "@mui/icons-material";
import {
  Box,
  Menu,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";

function Profile() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClick = (e: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(e.currentTarget);
  };
  return (
    <div>
      <Box
        sx={{
          cursor: "pointer",
        }}
        id="profile-button"
        aria-controls={open ? "basic-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <PersonRounded />
      </Box>
      <Menu
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        id="profile-menu"
        MenuListProps={{ "aria-labelledby": "profile-button" }}
      >
        <Link to={"/sample"}>
          <MenuItem onClick={handleClose}>Edit Profile</MenuItem>
        </Link>
        <Link to={"/sample"}>
          <MenuItem onClick={handleClose}>My Orders</MenuItem>
        </Link>
        <Link to={"/sample"}>
          <MenuItem onClick={handleClose}>Coupons</MenuItem>
        </Link>
        <Link to={"/logout"}>
          <MenuItem onClick={handleClose} sx={{ color: "red" }}>
            Logout
          </MenuItem>
        </Link>
      </Menu>
    </div>
  );
}

export default Profile;
