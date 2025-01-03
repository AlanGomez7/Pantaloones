import { ProductType } from "../utils/types/types";
import ProductCard from "./Products/ProductCard";
import { ArrowBackOutlined, ArrowForwardOutlined } from "@mui/icons-material";

interface ICarouselProp {
  Products: ProductType | undefined;
}


function Carousel({ Products }: ICarouselProp) {
  const scrollHanlder = (isLeft: boolean) => {
    const wrapper = document.getElementById("wrapper");
    if (isLeft) {
      wrapper?.scrollBy(-400, 0);
    } else {
      wrapper?.scrollBy(400, 0);
    }
  };

  return (
    <>
      <div id="wrapper" className="scroll-smooth flex gap-3 overflow-x-auto">
        {Products?.map((product) => (
          <ProductCard Product={product} key={product._id}/>
        ))}
      </div>
      <div className="flex justify-center gap-3 mt-11">
        <div
          className="cursor-pointer w-10 h-10 rounded-full bg-black text-white flex justify-center place-items-center"
          onClick={() => scrollHanlder(true)}
        >
          <ArrowBackOutlined />
        </div>
        <div
          className="cursor-pointer w-10 h-10 rounded-full bg-black text-white flex justify-center place-items-center"
          onClick={() => scrollHanlder(false)}
        >
          <ArrowForwardOutlined />
        </div>
      </div>
    </>
  );
}

export default Carousel;
