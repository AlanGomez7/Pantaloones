import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import Categories from "../../components/Categories";
import { useEffect, useState } from "react";
import { selectedProductApi } from "../../api/productApi";
import { useDispatch } from "react-redux";
import { setProductDetails } from "../../redux/slices/productSlice";
import ViewProductDetails from "./ViewProductDetails";

function ProductDetails() {
  const [result, setResult] = useState();

  const [searchParams] = useSearchParams(); //search difference b/w useParams and useSearchParams
  const key = searchParams.get("key");
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    fetchSelectedProductData();
  }, []);

  const fetchSelectedProductData = async () => {
    const result = await selectedProductApi(key);

    if (result?.status === 200) {
      console.log(result?.data, "9999999");
      dispatch(setProductDetails(result?.data.product!));
    } else {
      return <>something went wrong</>;
    }
  };

  return (
    <>
      <ViewProductDetails />
      <Categories />
    </>
  );
}

export default ProductDetails;
