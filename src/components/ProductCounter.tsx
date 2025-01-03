import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../redux/store";
import { decrement, increment } from "../redux/slices/counterSlice";
import { Remove } from "@mui/icons-material";

function ProductCounter() {
  const count = useSelector((store: RootState) => store.counter.count);
  const dispatch = useDispatch();
  return (
    <Box className="flex w-full justify-around my-3">
      <Box
        onClick={() => dispatch(decrement())}
        className={`border border-gray-300 cursor-pointer w-1/4 px-2 ${
          count === 0 ? "pointer-events-none" : "select-none"
        }`}
      >
        -
      </Box>
      <Box className="border border-gray-300 w-2/4 flex justify-center">
        {count}
      </Box>
      <Box
        onClick={() => dispatch(increment())}
        className="border border-gray-300 cursor-pointer flex-grow w-1/4 px-2 select-none"
      >
        +
      </Box>
    </Box>
  );
}

export default ProductCounter;
