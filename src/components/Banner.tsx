import Skimmer from "./Skimmer";

type BannerType = {
  _id: string;
  image: string[];
  bannerheading: string;
  pagelocation: string;
}[];

interface IBannerProp {
  Banner: BannerType | undefined;
}

function Banner({ Banner }: IBannerProp) {
  return Banner === undefined ? (
    <Skimmer />
  ) : (
    <>
      <div
        className="w-full h-[50%] lg:h-[70%] bg-cover bg-no-repeat bg-right mt-5 rounded-lg flex justify-end place-items-center p-5"
        style={{
          backgroundImage: `url(${Banner[0]?.image[0]})`,
        }}
      >
        <div className="w-1/2 flex flex-col">
          <p className="lg:text-4xl text-2xl text-white">
            Get 50% discount on shoes Lorem ipsum, dolor sit amet consectetu
            cupiditate illo molestiae.
          </p>
          <div className="mt-5 bg-violet-600 py-3 w-32 rounded-md text-white flex justify-center">
            Shop Now
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
