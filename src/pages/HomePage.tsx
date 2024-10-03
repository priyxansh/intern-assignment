import AllProducts from "../components/all-products/AllProducts";
import Hero from "../components/hero/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <AllProducts />
    </div>
  );
};

export default HomePage;
