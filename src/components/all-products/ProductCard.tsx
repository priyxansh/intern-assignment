import dummyProduct from "../../assets/dummy-product.png";

type ProductCardProps = {};

const ProductCard = ({}: ProductCardProps) => {
  return (
    <div className="rounded-[30px] text-center shadow-md transition hover:shadow-xl p-4 pb-[40px] border border-gray-200/50 flex flex-col gap-6">
      <img
        src={dummyProduct}
        alt="Crystal Agate"
        className="w-48 mx-auto h-48 object-cover rounded-md"
      />
      <div>
        <h3 className="text-lg font-normal uppercase text-[#4F4F4F]">
          Crystal Agate Phone Grip
        </h3>
        <p className="text-lg font-bold text-[#317189] text-center">$18.99</p>
      </div>
      <div className="relative p-[3px] rounded-[21px] bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)] w-[180px] mx-auto">
        <button className="text-[#75CCEB] bg-white font-bold px-4 py-2 rounded-[18px] w-full transition hover:bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)] hover:text-white">
          Buy Now
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
