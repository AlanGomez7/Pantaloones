import { Box, Button, Divider, Paper, Typography } from "@mui/material";
import CartProduct from "../../components/Products/CartProduct";
import PaymentWrapper from "../../components/Payment/PaymentWrapper";
import Address from "../../components/Checkout/Address";
import Coupons from "../../components/Checkout/Coupons";

function Checkout() {
  return (
    <>
      <main className="lg:flex gap-4 px-4">
        <Box className=" lg:w-2/3">
          <Box className="w-full mt-5">
            <Address />
          </Box>

          <Box className="my-5">
            <CartProduct />
            <CartProduct />
            <Box className="flex justify-between p-3 bg-white shadow-sm">
              <Typography component="div">
                Confirmation email will be send to:{" "}
                <strong>alangomez0047@gmail.com</strong>
              </Typography>
            </Box>
          </Box>

          <Coupons />
          <PaymentWrapper />
        </Box>
        <Box className="flex-grow self-start shadow-sm sticky top-40 bg-white my-5 hidden lg:block">
          <Typography variant="h6" className="text-gray-400 p-2 ">
            Total Price
          </Typography>
          <Box className="flex justify-between p-3 my-5">
            <Box>
              <Typography className="py-2 ">Price</Typography>
              <Typography className="py-2 ">
                Delivery Charges
              </Typography>
              <Typography className="py-2 ">
                Discounts
              </Typography>
              <Typography className="py-2 lg:text-black text-gray-400" variant="h5">
                Total Amount
              </Typography>
            </Box>

            <Box>
              <Typography className="py-2 ">Price</Typography>
              <Typography className="py-2 ">
                Delivery Charges
              </Typography>
              <Typography className="py-2 ">$5</Typography>
              <Typography className="py-2" variant="h5">
                $56
              </Typography>
            </Box>
          </Box>

          <Divider />
        </Box>
      </main>
    </>
  );
}

export default Checkout;
