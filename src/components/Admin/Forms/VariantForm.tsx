import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { VariantSchema } from "../../../utils/Schema/Schemas";
import { ChangeEvent } from "react";
import noImage from "../../../assets/no-image.png";
import { ADMIN_API } from "../../../api/utils";
type VariantType = Zod.infer<typeof VariantSchema>;

type VariantFormPropType = {
  variant?: any;
  onSubmit: (data: any) => void;
  setVariantImage?: (data: any) => any;
};

function VariantForm({
  onSubmit,
  variant,
  setVariantImage,
}: VariantFormPropType) {

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    setVariantImage!(file ? URL.createObjectURL(file) : noImage);
  };
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<VariantType>({
    mode: "onBlur",
    resolver: zodResolver(VariantSchema),
    values: variant,
  });

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      encType="multipart/form-data"
      className="font-normal w-full"
    >
      <div>
        <div className={`mb-3 `}>
          <label className="block mb-2 text-sm font-medium">Product Id</label>
          <div>
            <input
              id="uniqueId"
              {...register("uniqueId", { value: variant?.productId })}
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:border-gray-600 ${
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
                {...register("stock", { valueAsNumber: true })}
                className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:border-gray-600 ${
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
              sizes
            </label>

            <input
              type=""
              id="brand"
              {...register("size")}
              placeholder="SM, M, L, XL, XXL"
              className={`bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:border-gray-600 `}
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
                className={` bg-gray-50 border text-gray-900 text-sm rounded-lg  block w-full p-2.5  focus:border-gray-600 ${
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
              className="p-2 block w-full text-sm text-gray-900 border border-gray-300  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none  focus:border-gray-600 dark:placeholder-gray-400"
              type="file"
              onChange={(e) => handleChange(e)}
            />
          </div>
        </div>
        <button
          type="submit"
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          {variant ? "Save Details" : "Submit"}
        </button>
      </div>
    </form>
  );
}

export default VariantForm;
