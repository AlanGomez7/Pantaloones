import { useEffect, useState } from "react";
import { fetchHomepageData } from "../api/pageApi";
import ProductCard from "../components/Products/ProductCard";
import { ProductType } from "../utils/types/types";
import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, Slider } from "@mui/material";
import SideNavbar from "../components/Navbar/User/SideNavbar";

function Shop() {
  const [products, setProducts] = useState<ProductType>();

  // const products =[ {
  //   brand: "Luis Phillipe",
  //   category: "64610011cbb60b4ead530aff",
  //   description: "Formal shirts for every day use",
  //   image: [
  //     "http://res.cloudinary.com/dm0zmjhwf/image/upload/v1684133995/ypm9jxbmwdtotoyzx5fe.jpg",
  //   ],
  //   isListed: true,
  //   price: 86,
  //   stock: 860,
  //   title: "Mens's Shirt ",
  //   uniqueId: "ae0ed4b2f0601d33",
  //   _id: "6461d86b3402c4fd6f42b82d",
  // }];

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetchHomepageData();
      setProducts(res?.data.products);
    };
    fetchData();
  }, []);

  return (
    <>
      <main className="flex w-full gap-5 p-4">
        <SideNavbar />
        <div className="shadow-lg flex gap-4 flex-wrap py-4 justify-center bg-white">
          {products?.map((product) => (
            <ProductCard Product={product} key={product._id} />
          ))}
        </div>
      </main>
    </>
  );
}

export default Shop;
