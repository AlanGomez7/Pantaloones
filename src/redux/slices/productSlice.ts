import { createSlice } from "@reduxjs/toolkit";
import AddVariants from "../../pages/Admin/Product/AddVariants";
import { productDetailsType } from "../../utils/types/types";

interface IProductState {
  productDetails:productDetailsType | undefined;
  variantDetails: string[];
}
const initialState: IProductState = {
  productDetails: undefined,
  variantDetails: [],
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setProductDetails: (state, action) => {
      state.productDetails = action.payload;
    },

    setVariants: (state, action) => {
      const newVariant = action.payload;
      state.variantDetails.push(newVariant);
    },
  },
});

export const { setProductDetails, setVariants } = productSlice.actions;
export default productSlice.reducer;
