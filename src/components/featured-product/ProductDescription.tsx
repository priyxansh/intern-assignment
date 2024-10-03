type ProductDescriptionProps = {};

const ProductDescription = ({}: ProductDescriptionProps) => {
  return (
    <div className="sm:ml-auto text-center sm:text-right">
      <h2 className="text-3xl lg:text-4xl uppercase text-[#31546D]">
        Best Price
      </h2>
      <h3 className="text-4xl lg:text-5xl font-bold text-[#31546D] mb-8">
        Agate Phone Grip
      </h3>
      <p className="mb-6 text-[#31546D] text-sm max-w-[400px] mx-auto">
        These Pop Rock Crystal grip tops can be swapped with other tops
        depending on your mood, outfit, nails, phone case, holiday, etc.! Just
        gently squeeze the sides to remove and swap out with another color or
        design!
      </p>
      <div className="flex items-center justify-center sm:justify-end gap-4">
        <span className="text-lg font-bold text-[#41A0B7] line-through">
          $44.50
        </span>
        <span className="text-4xl lg:text-5xl font-bold text-[#E35B3E]">
          $19.50
        </span>
      </div>
      <button className="mt-8 px-8 py-3 bg-[linear-gradient(90deg,#75CCEB_0%,#6FB4FF_100%)] text-white rounded-xl shadow-lg hover:bg-blue-700 transition">
        Buy Now
      </button>
    </div>
  );
};

export default ProductDescription;
