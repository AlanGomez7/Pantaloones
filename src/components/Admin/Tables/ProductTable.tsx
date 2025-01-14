import { Box, Button, Input } from "@mui/material";
import React, { useEffect, useState } from "react";
import { fetchProduct } from "../../../api/AdminApi";
import { productDetailsType } from "../../../utils/types/types";
import { useLocation, useNavigate } from "react-router-dom";
import { products } from "../../../utils/Constants";

function ProductTable() {
  const navigate = useNavigate()
  const [loading, setLoading] = useState(false);
  const [res, setRes] = useState<any>();

  const handleClick = (id:string) => {
    navigate(`/admin/products/edit-product?key=${id}`)
  }

  const fetchProducts = async () => {
    setLoading(true);
    const result = await fetchProduct();
    setRes(result?.data);
    if (result?.status === 200) {
      setLoading(false);
    } else {
      return <>Something went wrong</>;
    }
    setLoading(false)
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <>
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg bg-white p-3">
        <input
          placeholder="Search"
          className="mb-2 bg-gray-100 rounded-md p-1"
        />
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>

              <th scope="col" className="px-6 py-3">
                Product name
              </th>

              <th scope="col" className="px-6 py-3">
                Description
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Brand</div>
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Category</div>
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Stock</div>
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">Price</div>
              </th>

              <th scope="col" className="px-6 py-3 text-white text-right">
                Action
              </th>
            </tr>
          </thead>
          
          {loading ? (
            <>loading.....</>
          ) : (
            <tbody>
              {res?.map((p: any) => (
                <tr className="bg-white border-b">
                  <th>
                    <Box className="bg-cover w-[70px]">
                      <img src={`${p?.image[0]}`} alt="" />
                    </Box>
                  </th>

                  <th
                    scope="row"
                    className="px-6 py-4 font-medium whitespace-nowrap"
                  >
                    {p.title}
                  </th>
                  <td className="px-6 py-4">{p.brand}</td>
                  <td className="px-6 py-4">{p.description}</td>
                  <td className="px-6 py-4">{p.category}</td>
                  <td className="px-6 py-4">{p.stock}</td>
                  <td className="px-6 py-4">$ {p.price}</td>
                  <td className="px-2 py-4 text-right">
                    <Button
                      variant="contained"
                      disableElevation
                      onClick={() => handleClick(p.uniqueId)}
                    >
                      Edit
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          )}
        </table>
      </div>
    </>
  );
}

export default ProductTable;
