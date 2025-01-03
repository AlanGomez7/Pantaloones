import RoundCard from "./RoundCard";

function Categories() {
  return (
    <>
      <p className="text-5xl font-semibold  text-center">Major Brands</p>
      <p className="text-center mt-5 mb-11">we collab with some major brands to make quality products for you guys</p>
      <div className="w-full flex justify-center gap-10 flex-wrap">
        <RoundCard />
        <RoundCard />
        <RoundCard />
        <RoundCard />
        <RoundCard />
      </div>
    </>
  );
}

export default Categories;
