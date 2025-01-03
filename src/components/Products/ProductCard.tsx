import { ShoppingCartOutlined, FavoriteOutlined } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
interface IProductProp {
  Product: ProductPropType | undefined;
}

type ProductPropType = {
  _id: string;
  brand: string;
  category: string;
  description: string;
  image: string[];
  isListed: boolean;
  price: number;
  stock: number;
  title: string;
  uniqueId: string;
};

function ProductCard({ Product }: IProductProp) {
  const navigate = useNavigate();

  const addToCart = () => {
    console.log("clicke");
  };

  const selectedProduct = () => {
    const path = `/products?key=${Product?.uniqueId}`;
    navigate(path);
  };

  return (
    <div
      className="h-[400px] w-[250px] shrink-0 hover:shadow-xl bg-white"
      onClick={selectedProduct}
    >
      <div
        className="h-[70%] bg-cover"
        style={{
          backgroundImage: `url(${Product?.image[0]})`,
        }}
      >
        <div className="p-3 float-end">
          <FavoriteOutlined />
        </div>
      </div>
      <div className="h-[30%] flex py-5 px-3 justify-between">
        <div>
          <p className="font-semibold text-gray-400">{Product?.brand}</p>
          <p className="">{Product?.title}</p>
          <p className="font-bold">${Product?.price}</p>
        </div>
        <div
          className="flex place-items-center cursor-pointer"
          onClick={() => addToCart()}
        >
          <div className="h-[50px] w-[50px] bg-white rounded-full flex justify-center place-items-center">
            <ShoppingCartOutlined />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
