import { Replay } from "@mui/icons-material";
import { Box, Button, Checkbox, TextField, Typography } from "@mui/material";
import React, { FC, useEffect, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  LoadCanvasTemplateNoReload,
  validateCaptcha,
} from "react-simple-captcha";

interface ICashOnDelivery {
  isCod: boolean;
  onSelect: () => void;
}

const CashOnDelivery: FC<ICashOnDelivery> = ({ isCod, onSelect }) => {
  const [captcha, setCaptcha] = useState("");
  const [iscaptchaValid, setIsCaptchaValid] = useState<boolean>()
 
  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setCaptcha(e.target.value);
  };

  const captchaSubmit = () => {
    const isValid = validateCaptcha(captcha);
    if(isValid){
      // call the api to place the order
    }else{
      // reload captcha
    }
  };
  return (
    <>
      <Box className={`${isCod ?"bg-blue-50" :  "bg-white" }`}> 
        <Typography component="div" onClick={onSelect}>
          <Checkbox
            checked={isCod}
            size="small"
            sx={{
              color: "black",
              "&.Mui-checked": {
                color: "black",
              },
            }}
          />
          Pay on Delivery
        </Typography>
        <Box className={`flex justify-between p-5 ${isCod ? "block" : "hidden"}`}>
          <LoadCanvasTemplateNoReload />
          <TextField
            variant="outlined"
            onChange={(e) => handleChange(e)}
            size="small"
            label="Enter captcha"
            className="bg-white"
          />
          <Box>
            <Button
              disableElevation
              type="submit"
              variant="contained"
              onClick={() => captchaSubmit()}
            >
              Place Order
            </Button>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default CashOnDelivery;

{
  /* <Box className="px-10 flex place-items-center border border-black text-5xl text-green-700 font-extrabold"><p className="-tracking-3">{captch}</p></Box>
<Box className="border border-black flex place-items-center"><Replay/></Box> */
}
