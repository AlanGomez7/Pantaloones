import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

function Coupons() {
  return (
    <Box className="p-3 my-5 shadow-sm bg-white">
      <Box>
        <Typography variant="h6" className="pb-5" sx={{ color: "grey" }}>
          Coupons
        </Typography>
        <Box className="flex justify-between w-full">
          <TextField variant="outlined" size="small" label="Coupon code"/>
            <div className="text-gray-400 font-light text-xs">Only applied once</div>
          <Button variant="contained" disableElevation>
            Apply
          </Button>
        </Box>
      </Box>
    </Box>
  );
}

export default Coupons;
