import { Box, Button, Typography } from "@mui/material"
import { FC } from "react";

interface IAddressProps 
  {
    name: string;
    mobileNo: string;
    locality: string;
    pincode: string;
    address: string;
    AlternateMobile: string;
    landMark: string;
}[]

const Address:FC<IAddressProps> = ({name, mobileNo, address, landMark, pincode}) => {
  return (
    <Box className="p-5 flex justify-between shadow-sm bg-white">
      <Box>
        <Typography variant="h6" sx={{ color: "grey" }}>
          Address
        </Typography>
        <Typography variant="subtitle2">
          {`${name}, ${address}, ${landMark} - ${pincode}`}
        </Typography>
      </Box>
      <Box>
        <Button variant="contained" disableElevation>
          Change
        </Button>
      </Box>
    </Box>
  );
}

export default Address;
