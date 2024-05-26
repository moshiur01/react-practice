import { useLoaderData } from "react-router-dom";
import Banner from "../components/home/Banner";
import Products from "../components/home/Products";
import SalePoster from "../components/home/SalePoster";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products data={data} />
      {/* <Accordian /> */}
      <SalePoster />
    </div>
  );
};

export default Home;
