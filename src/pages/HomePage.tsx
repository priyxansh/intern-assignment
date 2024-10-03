import AllProducts from "../components/all-products/AllProducts";
import FeaturedProduct from "../components/featured-product/FeaturedProduct";
import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";

const HomePage = () => {
  return (
    <div className="flex flex-col">
      <Hero />
      <AllProducts />
      <FeaturedProduct />
      <Footer />
    </div>
  );
};

export default HomePage;
