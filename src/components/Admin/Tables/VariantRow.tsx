import { Box, Button } from "@mui/material";
import { useState } from "react";
import VariantForm from "../Forms/VariantForm";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { updateVariant } from "../../../api/AdminApi";
import { toast } from "sonner";
import { setEditedProduct } from "../../../redux/slices/adminSlice";

function VariantRow({ variant }: any) {

  const dispatch = useDispatch()
  const { image, stock, size, color } = variant;
  const [isHidden, setIsHidden] = useState(true);
  const [variantImage, setVariantImage] = useState(variant.image[0]);

  const productId = useSelector(
    (store: RootState) => store.admin.productToEdit.uniqueId
  );

  const onSubmit = async (data: any) => {
    data._id = variant._id;
    data.file = variant.image;
    const result = await updateVariant(data);
    if(result?.status === 200){
      dispatch(setEditedProduct("success"))
      setIsHidden(true)
    }

  };

  return (
    <>
      <tbody>
        <tr className="bg-white border-b">
          <th>
            <Box className="bg-cover w-[70px] m-2">
              <img src={`${variant.image[0]}`} alt="" />
            </Box>
          </th>
          <th scope="row" className="px-6 py-4 whitespace-nowrap ">
            {variant.color}
          </th>
          <td className="px-6 py-4">{variant.stock}</td>
          <td className="px-6 py-4">{variant.size}</td>
          <td className="px-2 py-4 text-right">
            <Button
              variant="contained"
              disableElevation
              onClick={() => setIsHidden(!isHidden)}
            >
              Edit
            </Button>
          </td>
        </tr>
        <tr className={`${isHidden ? "hidden" : ""} border-black border-b-2`}>
          <th className="w-full py-3">
            <VariantForm
              onSubmit={onSubmit}
              variant={{ productId, image, stock, size, color }}
              setVariantImage={setVariantImage}
            />
          </th>
          <th></th>
          <th>
            <Box className="bg-cover w-[200px] m-2">
              <img src={`${variantImage}`} alt="" />
            </Box>
          </th>
        </tr>
      </tbody>
    </>
  );
}

export default VariantRow;
