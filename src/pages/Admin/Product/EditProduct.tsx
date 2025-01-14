import { useEffect, useState } from "react";
import ProductForm from "../../../components/Admin/Forms/ProductForm";
import { selectedProductApi } from "../../../api/productApi";
import { useSearchParams } from "react-router-dom";
import { setEditedProduct, setProductToEdit } from "../../../redux/slices/adminSlice";
import { useDispatch, useSelector } from "react-redux";
import VariantsTable from "./VariantsTable";
import { productDetailsType } from "../../../utils/types/types";
import { updateProduct } from "../../../api/AdminApi";
import { RootState } from "../../../redux/store";
import { toast } from "sonner";

function EditProduct() {
  const dispatch = useDispatch();
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");

  const editedProduct = useSelector((store: RootState)=>store.admin.editedProduct);
  const product:productDetailsType = useSelector((store: RootState)=>store.admin.productToEdit);

  
  const onSubmit = async (data: any) => {
    data.file = product?.image;
    data.uniqueId = product?.uniqueId;

    const result = await updateProduct(key, data);
    if(result?.status === 200){
      dispatch(setEditedProduct("success"))
      toast("Product Updated!!")
    }else{
      toast("Something went wrong!")
    }
    // console.log(result)
  };

  const fetchProduct = async () => {
    const result = await selectedProductApi(key);
    if (result?.status === 200) {
      dispatch(setProductToEdit(result.data));
    } else {
      toast("Something went wrong!")
    }
  };

  useEffect(() => {
    fetchProduct();
  }, [editedProduct]);

  return (
    <>
      {product ? (
        <>
          <ProductForm onSubmit={onSubmit} product={product} />
          <VariantsTable variant={product?.variants} />
        </>
      ) : (
        <>Loadingggggggggg...........</>
      )}
    </>
  );
}

export default EditProduct;
