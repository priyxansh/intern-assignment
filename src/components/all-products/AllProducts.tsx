import arrowIcon from "../../assets/icons/arrow.svg";
import ProductCard from "./ProductCard";

type AllProductsProps = {};

const AllProducts = ({}: AllProductsProps) => {
  return (
    <section className="py-12 px-4 md:px-16 flex flex-col gap-8">
      <h2 className="text-2xl sm:text-4xl font-bold text-[#31546D] w-full text-center">
        All Products
      </h2>
      <div className="flex gap-24 items-center">
        <p className="flex items-center gap-2 text-[#9AB0C0] font-semibold text-sm">
          Filter:{" "}
          <span className="flex items-center gap-2 text-[#31546D] font-bold">
            <span>All Products</span>
            <img src={arrowIcon} alt="Arrow Icon" />
          </span>
        </p>
        <p className="flex items-center gap-2 text-[#9AB0C0] font-semibold text-sm">
          Filter:{" "}
          <span className="flex items-center gap-2 text-[#31546D] font-bold">
            <span>All Products</span>
            <img src={arrowIcon} alt="Arrow Icon" />
          </span>
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {Array(8)
          .fill(null)
          .map((_, index) => (
            <ProductCard key={index} />
          ))}
      </div>
      <div className="relative p-[3px] rounded-[21px] bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)] w-[180px] mx-auto mt-[54px]">
        <button className="text-[#75CCEB] bg-white font-bold px-4 py-2 rounded-[18px] w-full transition hover:bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)] hover:text-white">
          View All
        </button>
      </div>
    </section>
  );
};

export default AllProducts;
