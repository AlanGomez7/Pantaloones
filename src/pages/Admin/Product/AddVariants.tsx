import { zodResolver } from "@hookform/resolvers/zod";
import { Typography } from "@mui/material";
import { FC, useState } from "react";
import { useForm } from "react-hook-form";
import { any, string, z } from "zod";
import { Add } from "@mui/icons-material";
import { addVariantApi } from "../../../api/AdminApi";

const AddVariantSchema = z.object({
  stock: string().min(1, { message: "Stock cannot be empty" }),
  color: string()
    .startsWith("#", { message: "Enter a valid hex code" })
    .min(7)
    .max(7),
  Image: any(),
  size: any(),
  uniqueId: string().min(10, { message: "Enter a valid Id" }),
});

type AddVariantType = Zod.infer<typeof AddVariantSchema>;

type DataType = { stock: string; color: string; Image?: any; size?: any };

const AddVariants: FC = () => {
  const [formHidden, setFormHidden] = useState(true);

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<AddVariantType>({
    mode: "onBlur",
    resolver: zodResolver(AddVariantSchema),
  });

  const onSubmit = async (data: DataType) => {
    const result = await addVariantApi(data);
    console.log(result);
  };

  return (
    <div className="flex-grow px-40 py-3 mt-3 mb-10 bg-white">
      <div className="flex justify-between my-5">
        <div>
          <Typography variant="h4" className=" text-gray-400">
            Add Variants
          </Typography>
          <Typography variant="subtitle1">
            Add variants for the above product
          </Typography>
        </div>
        <div>
          <button
            onClick={() => setFormHidden(!formHidden)}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Variant <Add />
          </button>
        </div>
      </div>

      <form
        onSubmit={handleSubmit(onSubmit)}
        encType="multipart/form-data"
        className={`${formHidden ? "hidden" : "block"}`}
      >
        <div>
          
          <div className="mb-3">
            <label className="block mb-2 text-sm font-medium">Product Id</label>
            <div>
              <input
                id="uniqueId"
                {...register("uniqueId")}
                className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 ${
                  errors.uniqueId && "border-red-400 "
                }`}
              />
            </div>
            <p className="text-red-500 text-xs">
              {errors.uniqueId && errors.uniqueId.message}
            </p>
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
                className="block mb-2 text-sm font-medium flex gap-3"
              >
                Available sizes
                <p className="font-thin">(enter available sizes separeted using comma)</p>
              </label>

              <input
                type=""
                id="brand"
                {...register("size")}
                className={`shadow-sm bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  border-gray-600 `}
              />

              {/* <p className="text-red-500 text-xs">
          {errors.color && errors.color.message}
          </p> */}
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

            <div>
              <label className="block mb-2 text-sm font-medium text-gray-900 ">
                Upload Images
              </label>
              <input
                {...register("Image")}
                name="Image"
                multiple
                className="p-2 block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  dark:border-gray-600 dark:placeholder-gray-400"
                type="file"
              />
            </div>
          </div>
          <button
            type="submit"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVariants;
