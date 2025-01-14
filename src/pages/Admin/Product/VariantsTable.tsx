import VariantRow from "../../../components/Admin/Tables/VariantRow";

type VaraintTablePropsType = {
  variant:
    | { stock: string; size: string; image: [string]; color: string }[]
    | undefined;
};

function VariantsTable({ variant }: VaraintTablePropsType) {
  let content;

  if (variant?.length === 0) {
    content = <></>;
  } else {
    content = (
      <div className="relative overflow-x-auto shadow-sm sm:rounded-lg bg-white px-40 py-10 my-8">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="uppercase bg-black">
            <tr>
              <th scope="col" className="px-6 py-3">
                Image
              </th>

              <th scope="col" className="px-6 py-3">
                color
              </th>

              <th scope="col" className="px-6 py-3">
                stock
              </th>

              <th scope="col" className="px-6 py-3">
                <div className="flex items-center">sizes</div>
              </th>

              <th scope="col" className="px-6 py-3 text-white text-right">
                Action
              </th>
            </tr>
          </thead>
          {variant?.map((v) => (
            <VariantRow variant={v}/>
          ))}
        </table>
      </div>
    );
  }
  return content;
}

// onClick={()=>handleClick(p.uniqueId)}
export default VariantsTable;
