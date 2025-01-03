import { Link } from "react-router-dom";

function SearchNavbar() {
  return (
    <>
      <div className="w-full h-20 flex justify-center place-items-center shadow-sm bg-white">
        <div className="flex my-11 space-x-9">
          <Link to={"/"} className="cursor-pointer">Home</Link >
          <Link to={"/shop"} className="cursor-pointer">Shop</Link >
          <Link to={"/kids"} className="cursor-pointer">Kids</Link >
          <Link to={"/ladies"} className="cursor-pointer">Ladies</Link >
          <Link to={"/men"} className="cursor-pointer">Men</Link >
        </div>
      </div>
    </>
  );
}

export default SearchNavbar;
