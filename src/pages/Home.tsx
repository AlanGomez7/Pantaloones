// import SearchNavbar from "../components/Navbar/SearchNavbar";
// import TopNavbar from "../components/Navbar/TopNavbar";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Carousel from "../components/Carousel";
import { useEffect, useState } from "react";
import { fetchHomepageData } from "../api/pageApi";


function Home() {
  const [result, setResult] = useState<any>();
  const fetchData = async () => {
    const res = await fetchHomepageData();
    setResult(res?.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <section className="">
        <Banner Banner={result?.banners} />
      </section>
      <section>
        <Categories />
        <div className="py-20 ">
          <p className="text-5xl font-medium text-center mb-20">
            Latest Additions
          </p>
          <Carousel Products={result?.products} />
        </div>
      </section>
    </>
  );
}

export default Home;
