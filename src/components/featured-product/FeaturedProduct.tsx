import ProductDescription from "./ProductDescription";
import ProductImage from "./ProductImage";

type FeaturedProductProps = {};

const FeaturedProduct = ({}: FeaturedProductProps) => {
  return (
    <section className="bg-white py-16 grid grid-cols-1 sm:grid-cols-2 gap-6 px-2">
      <ProductDescription />
      <ProductImage />
    </section>
  );
};

export default FeaturedProduct;
