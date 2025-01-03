import { Box, Button } from "@mui/material";
import React from "react";

type VaraintTablePropsType = {
  variant:
    | { stock: string; size: string; image: [string]; color: string }[]
    | undefined;
};

function VariantsTable({ variant }: VaraintTablePropsType) {
  const handleClick = () => {
  };
  let content;

  if (variant?.length === 0) {
    content = <></>;
  } else {
    content = (
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg bg-white px-40 py-10 my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs  uppercase bg-black">
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

              <th scope="col" className="px-6 py-3 text-white text-right">
                Action
              </th>
            </tr>
          </thead>
          {variant?.map((v) => (
            <tbody>
              <tr className="bg-white border-b">
                <th>
                  <Box className="bg-cover w-[70px] m-2">
                    <img src={`${v.image[0]}`} alt="" />
                  </Box>
                </th>
                <th
                  scope="row"
                  className="px-6 py-4 font-medium whitespace-nowrap "
                >
                  {v.color}
                </th>
                <td className="px-6 py-4">{v.stock}</td>
                <td className="px-6 py-4">{v.size}</td>
                <td className="px-2 py-4 text-right">
                  <Button
                    variant="contained"
                    disableElevation
                    onClick={handleClick}
                  >
                    Edit
                  </Button>
                </td>
              </tr>
            </tbody>
          ))}
        </table>
      </div>
    );
  }
  return content;
}

// onClick={()=>handleClick(p.uniqueId)}
export default VariantsTable;
