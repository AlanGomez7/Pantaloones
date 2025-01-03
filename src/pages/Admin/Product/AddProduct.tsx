import AddVariants from "./AddVariants";
import { addProductApi } from "../../../api/AdminApi";
import ProductForm from "../../../components/Admin/Forms/ProductForm";
import { Box } from "@mui/material";

type DataType = { stock: string; color: string; Image?: any; size?: any };

export default function AddProduct() {

  const onSubmit = async (data: any) => {
    const res = await addProductApi(data);
    console.log(res);
  };

  return (
    <Box className="px-5">
      <ProductForm onSubmit={onSubmit}/>
      <AddVariants />
    </Box>
  );
}
