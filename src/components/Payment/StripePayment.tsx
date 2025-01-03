import { Box, Checkbox, Typography } from "@mui/material";
import {
  PaymentElement,
  useElements,
  useStripe,
} from "@stripe/react-stripe-js";
import { ChangeEvent, FC, useState } from "react";

interface ISelectPaymentMethod {
  isCod: boolean;
  onSelect: () => void;
}

const StripePayment: FC<ISelectPaymentMethod> = ({isCod, onSelect}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [isFormHidden, setIsFormHidden] = useState(true);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
  };

  const handleClick = ()=>{
    onSelect()
    setIsFormHidden(!isFormHidden)
  }

  return (
    <form className={`py-5 ${isCod ?"bg-blue-50" :  "bg-white" }`} >
      <Typography component="div">
        <Checkbox
        checked={isCod}
          size="small"
          sx={{
            color: "black",
            "&.Mui-checked": {
              color: "black",
            },
          }}
          onChange={handleChange}
          onClick={handleClick}
        />
        Stripe Payment
      </Typography>
      <Box className={!isCod ? "hidden" : "block"}>
        <PaymentElement />
      </Box>
    </form>
  );
};

export default StripePayment;
