import { useEffect, useState } from "react";
import ProductForm from "../../../components/Admin/Forms/ProductForm";
import { selectedProductApi } from "../../../api/productApi";
import { useSearchParams } from "react-router-dom";
import { setProductToEdit } from "../../../redux/slices/adminSlice";
import { useDispatch } from "react-redux";
import VariantsTable from "./VariantsTable";
import { productDetailsType } from "../../../utils/types/types";

function EditProduct() {
  const dispatch = useDispatch();
  const [details, setDetails] = useState<productDetailsType>();
  const [searchParams] = useSearchParams();
  const key = searchParams.get("key");

  const onSubmit = (data: any) => {
    // logic to send the edited data to backend
    console.log(data);
    return Promise.resolve();
  };

  const fetchProduct = async () => {
    const result = await selectedProductApi(key);
    if (result?.status === 200) {
      setDetails(result.data);
      dispatch(setProductToEdit(result.data));
    } else {
      return <>Something went wrong</>;
    }
  };

  console.log(details)

  useEffect(() => {
    fetchProduct();
  }, []);
  return (
    <>
      <ProductForm
        onSubmit={onSubmit}
        product={details ? details : undefined}
      />
      <VariantsTable variant={details?.variants} />
    </>
  );
}

export default EditProduct;
