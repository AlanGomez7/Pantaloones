import { FC, useEffect, useState } from "react";
import { Button } from "@mui/material";
import Selector from "../../components/Products/Selector";
import { useNavigate, useSearchParams } from "react-router-dom";
import ProductReviews from "./ProductReviews";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { selectedProductApi } from "../../api/productApi";
import { setProductDetails } from "../../redux/slices/productSlice";
import { productDetailsType } from "../../utils/types/types";

const ViewProductDetails = () => {
  const product:productDetailsType = useSelector(
    (store: RootState) => store.product.productDetails
  );
  console.log(product);
  // const { price, title, description, brand } = product;
  const [selectedType, setSelectedType] = useState();
  // const [optedSize, setOptedSize] = useState<number>(0);
  const navigate = useNavigate();

  return product ? (
    <main className="w-full lg:flex gap-3 px-20 mt-5">
      <div className="lg:sticky top-40 lg:self-start lg:-z-1">
        <div
          className="bg-cover p-[15em]"
          style={{
            backgroundImage: `url(${product?.image[0]})`,
          }}
        ></div>
      </div>
      <div className="flex-grow bg-white px-6 py-4">
        <div className="">
          <p className="text-gray-500 ">{product.brand}</p>
          <p className="text-2xl ">{product.title}</p>
          <p className=" ">{product.description}</p>
          <p className="text-4xl ">$ {product.price}</p>
        </div>

        
          <div className="flex gap-2 place-items-center mt-4">
            {product.variants.map((details: any) => (
              <Selector
                bgColor={details.color}
                isSelected={selectedType === details}
                onSelect={() => setSelectedType(details)}
              ></Selector>
            ))}
          </div>

        <div className="flex gap-2 place-items-center mt-4">
          <p>Size:</p>
          {/* {selectedType.size.map((size: any, index: any) => (
            <Selector
              isSelected={optedSize === index}
              onSelect={() => setOptedSize(index)}
            >
              <p>{size.available}</p>
            </Selector>
          ))} */}
        </div>
        <div className="mt-5">
          <Button sx={{ marginRight: 3 }} variant="outlined" size="large">
            Add to Cart
          </Button>
          <Button
            variant="contained"
            disableElevation
            size="large"
            onClick={() => navigate("/checkout?key=1")}
          >
            Buy Now
          </Button>
        </div>
        <div className=" mt-4">
          <p>Deliver to:</p>
        </div>
        <ProductReviews />
      </div>
    </main>
  ) : (
    <>iiiii</>
  );
};

export default ViewProductDetails;
