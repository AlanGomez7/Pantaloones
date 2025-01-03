import React, { FC, useEffect } from "react";

import { zodResolver } from "@hookform/resolvers/zod";
import {
  Box,
  MenuItem,
  Select,
  SelectChangeEvent,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { AddProductSchema } from "../../../utils/Schema/Schemas";
import { productDetailsType } from "../../../utils/types/types";
import noImage from "../../../assets/no-image.png"

type AddProductType = Zod.infer<typeof AddProductSchema>;

type productFormPropType = {
  onSubmit: (data: any) => Promise<void>;
  product?: productDetailsType | undefined;
};

const ProductForm = ({ onSubmit, product }: productFormPropType) => {
  const [category, setCategory] = useState("");
  const [val, setVal] = useState<string>(noImage);

  const {
    register,
    formState: { errors },
    reset,
    handleSubmit,
    watch,
  } = useForm<AddProductType>({
    values: product,
    mode: "onBlur",
    resolver: zodResolver(AddProductSchema),
  });

  // const produc = useSelector((store: RootState) => store.admin.productToEdit);

  return (
    <form
      className="flex-grow px-40 py-10 bg-white"
      encType="multipart/form-data"
      onSubmit={handleSubmit(onSubmit)}
    >
      <Typography variant="h3" className="pb-20">{product ? "Edit Product" : "Add Product"}</Typography>

      <div className="flex gap-8">
        <div className="flex-grow">
          <div className="mb-5 flex gap-3">
            <div className="flex-grow">
              <label
                //   for="email"
                className="block mb-2 text-sm font-medium"
              >
                Product title
              </label>
              <div>
                <input
                  {...register("title")}
                  id="title"
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg block w-full p-2.5  border-gray-600 ${
                    errors.title && "border-red-400"
                  }`}
                  name="title"
                />
              </div>
              <p className="text-red-500 text-xs">
                {errors.title && errors.title.message}
              </p>
            </div>

            <div className="flex-grow">
              <label className="block mb-2 text-sm font-medium">
                Product Brand
              </label>
              <div>
                <input
                  type=""
                  id="brand"
                  {...register("brand")}
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                    errors.brand && "border-red-400 "
                  }`}
                  name="brand"
                />
              </div>

              <p className="text-red-500 text-xs">
                {errors.brand && errors.brand.message}
              </p>
            </div>
          </div>
          
          <div className="mb-5 flex gap-3">
            <div className="">
              <label
                //   for="email"
                className="block mb-2 text-sm font-medium"
              >
                Price in Dollars
              </label>
              <div>
                <input
                  type=""
                  id="price"
                  {...register("price")}
                  placeholder="$ 97"
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                    errors.price && "border-red-400 "
                  }`}
                />
              </div>
              <p className="text-red-500 text-xs">
                {errors.price && errors.price.message}
              </p>
            </div>
            <div className="flex-grow">
              <label
                //   for="repeat-password"
                className="block mb-2 text-sm font-medium"
              >
                Product Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                  errors.description && "border-red-400 "
                }`}
              />
              <p className="text-red-500 text-xs">
                {errors.description && errors.description.message}
              </p>
            </div>
          </div>
          <div className="mb-5 flex gap-3">
            <div className="flex-grow">
              <label
                //   for="email"
                className="block mb-2 text-sm font-medium"
              >
                Color (Hex code)
              </label>
              <div>
                <input
                  type="text"
                  id="title"
                  {...register("color")}
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                    errors.color && "border-red-400 "
                  }`}
                />
              </div>
              <p className="text-red-500 text-xs">
                {errors.color && errors.color.message}
              </p>
            </div>

            <div className="flex-grow">
              <label
                //   for="password"
                className="block mb-2 text-sm font-medium"
              >
                Category
              </label>
              {/*  */}
              <div>
                <Select
                  {...register("category")}
                  size="small"
                  id="Category"
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full  border-gray-600 ${
                    errors.category &&
                    "border-red-400 shadow-sm border text-gray-900 text-sm rounded-lg focus:ring-black w-full"
                  }`}
                  value={category}
                  onChange={(e: SelectChangeEvent) =>
                    setCategory(e.target.value as string)
                  }
                >
                  <MenuItem value={"men"} sx={{ paddingX: "20px" }}>
                    Men
                  </MenuItem>
                  <MenuItem value="kids" sx={{ paddingX: "20px" }}>
                    Kids
                  </MenuItem>
                  <MenuItem value="women" sx={{ paddingX: "20px" }}>
                    Women
                  </MenuItem>
                  <MenuItem value="Accessories" sx={{ paddingX: "20px" }}>
                    Accessories
                  </MenuItem>
                </Select>
              </div>
              <p className="text-red-500 text-xs">
                {errors.category && errors.category.message}
              </p>
            </div>
          </div>

          <div className="mb-5 flex gap-3">
            <div className="flex-grow">
              <label className="block mb-2 text-sm font-medium">Stock</label>
              <div>
                <input
                  type="number"
                  id="title"
                  {...register("stock")}
                  className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                    errors.stock && "border-red-400 "
                  }`}
                />
              </div>
              <p className="text-red-500 text-xs">
                {errors.stock && errors.stock.message}
              </p>
            </div>
            <div className="flex-grow">
              <label
                //   for="password"
                className="block mb-2 text-sm font-medium"
              >
                Available sizes
              </label>

              <input
                type=""
                id="brand"
                {...register("size")}
                className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 `}
              />
            </div>
            {/* <p className="text-red-500 text-xs">
          {errors.color && errors.color.message}
          </p> */}
          </div>
        </div>
        <div className="mb-5">
          <div>
            <Box className="bg-cover w-[287px]">
              <img src={`${product ? product?.image[0] : val}`} alt="" />
            </Box>
            <label className="block mb-2 text-sm font-medium text-gray-900 ">
              Upload Images
            </label>
            <input
              {...register("Image")}
              name="Image"
              multiple
              onChange={(e) => {
                const file = e.target.files?.[0];
                setVal(file ? URL.createObjectURL(file) : noImage);
              }}
              className="p-2 block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
              type="file"
            />
          </div>
        </div>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Add Product
      </button>
    </form>
  );
};

export default ProductForm;
