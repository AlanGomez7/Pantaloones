import { Box, Button, Typography } from "@mui/material";
import { FC } from "react";
import { product } from "../../utils/Constants";
import ProductCounter from "../ProductCounter";

const CartProduct: FC = () => {
  return (
    <>
      <Box className="flex gap-5 p-3 justify-between shadow-sm bg-white">
        <Box className="bg-cover w-[100px]">
          <img src={`${product?.type[0].image[0]}`} alt="" />
          <ProductCounter />
        </Box>
        <Box className="">
          <Typography variant="h6">{product.description}</Typography>
          <Typography variant="subtitle2" className="text-gray-400">
            Brand
          </Typography>
          <Typography variant="subtitle2" className="text-gray-400">
            size: 32
          </Typography>
          <Typography variant="h6">$46</Typography>
          <Button>Remove</Button>
        </Box>
        <Typography variant="subtitle2">Delevery by 24 nov | Free</Typography>
      </Box>
    </>
  );
};

export default CartProduct;
