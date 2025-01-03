import { useEffect, useState } from "react";
import { fetchCartData } from "../api/pageApi";

function Cart() {
  const [fetchResult, setFetchResult] = useState();
  const fetchCartDetails = async () => {
    const result = await fetchCartData();
    console.log(result)
    // setFetchResult(result?.data)
  };

  useEffect(() => {
    fetchCartDetails();
  }, []);

  // console.log(fetchResult);

  return <div>Cart</div>;
}

export default Cart;
