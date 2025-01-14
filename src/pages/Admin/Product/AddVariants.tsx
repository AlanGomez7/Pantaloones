import { zodResolver } from "@hookform/resolvers/zod";
import { Box, Typography } from "@mui/material";
import { FC, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { any, string, z } from "zod";
import { Add } from "@mui/icons-material";
import { addVariantApi } from "../../../api/AdminApi";
import VariantForm from "../../../components/Admin/Forms/VariantForm";
import noImage from "../../../assets/no-image.png";


type DataType = { stock: string; color: string; Image?: any; size?: any };

const AddVariants: FC = () => {
  const [formHidden, setFormHidden] = useState(true);
  const [variantImage, setVariantImage] = useState(noImage);

  const onSubmit = async (data: DataType) => {
    console.log(data, "add variannt")
    const result = await addVariantApi(data);
    console.log(result);
  };

  // console.log(variantImage);

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
      <div className={`flex gap-8 ${formHidden ? "hidden" : "block"}`}>
        <VariantForm
          onSubmit={onSubmit}
          setVariantImage={setVariantImage}
        />
        <Box className="bg-cover w-[200px] m-2">
          <img src={`${variantImage}`} alt="" />
        </Box>
      </div>
    </div>
  );
};

export default AddVariants;
